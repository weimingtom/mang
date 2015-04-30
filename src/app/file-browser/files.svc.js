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
      getInitialData: _getInitialData,
      filterFiles: _filterFiles
    }
    service.data.path = '';


    return service;

    function _getInitialData (path) {
      if (service.data.path != '/') {
        path += service.data.path;
      }
      _setData(path);
      return service.data;
    }

    function _getData (path) {
      _setData(path);
      return service.data;
    }

    function _setData (path){
      mellow.read(path, function (err, data){
        console.log(data);
        service.data.files = data.files.slice();
        service.data.path = data.path;
      });
    }

    function _filterFiles (data) {
      var files = [];
      for (var i = data.length - 1; i >= 0; i--) {
        /**
         * When mellow read the directory data assign a size value for each item,
         * if is a file item.size would be the file size in kb,
         * else if the file is a directory size are setted to 'dir'
         */
        console.log(data[i]);
        if(data[i].size === 'dir'){
          files.push(data[i]);
        }else{
          var ext = data[i].name.slice(-4).toLowerCase();
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
