(function (){
  'use strict';

  angular
    .module('mang')
    .factory('FilesSvc', FilesSvc);

  function FilesSvc () {
    var mellow = require('mellow');
    var _AllowedExt = ['.jpg', '.png', '.gif'];

    var service = {
      data: {},
      getData: _getData,
      filterFiles: _filterFiles
    }

    return service;

    function _getData (path) {
      _setData(path);
      return service.data;
    }

    function _setData (path){
      if (path != '/')
        path = mellow.pathToWin('/' + path);
      mellow.read(path, function (err, data){
        service.data.files = _filterFiles(data.files);
        service.data.path = _setPath(data.path);
      });
    }

    function _setPath (path) {
      path = path.replace('\\/', '/');
      path = path.replace(':', '');
      path = path.replace('\\', '/');
      return path;
    }

    function _filterFiles (data) {
      var files = [];
      for (var i = 0; i < data.length - 1; i++) {
        /**
         * When mellow read the directory data assign a size value for each item,
         * if is a file item.size would be the file size in kb,
         * else if the file is a directory size are setted to 'dir'
         */
        var ext = data[i].name.slice(-4).toLowerCase();
        if(data[i].size === 'dir'){
          /**
           * To dont add system hidden folders
           */
          if(ext[0] != '.' && data[i].name[0] != '.')
            files.push(data[i]);
        }else{
          // if ext is in array
          if (_AllowedExt.indexOf(ext) > -1){
              files.push(data[i]);
          }
        }
      }

      return files;
    }


  }


})();
