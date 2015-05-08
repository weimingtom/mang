(function (){
  'use strict';

  angular
    .module('mang')
    .factory('FilesSvc', FilesSvc);

  FilesSvc.$inject = ['$q', '$timeout'];

  function FilesSvc ($q, $timeout) {
    var mellow = require('mellow');
    var _AllowedExt = ['.jpg', '.png', '.gif'];

    var service = {
      data: {},
      getData: getData,
      getImageSrc: getImageSrc
    }

    return service;

    function getData (path) {
      var deffered = $q.defer();

      // timeout added to because too quick of a response
      //  can feel less magical to the user
      $timeout(function () {
        if (path != '/')
          path = mellow.pathToWin('/' + path);
        mellow.read(path, function (err, data){
          try {
            _filterFiles(data.files);
            service._path = data.path;
            service.data.path = _setPath(data.path);
            deffered.resolve(service.data);
          }catch(err){
            deffered.reject("can't read data from that directory");
          }
        });
      }, 500);

      return deffered.promise;
    }

    function _setPath (path) {
      path = path.replace('\\/', '/');
      path = path.replace(':', '');
      path = path.replace('\\', '/');
      return path;
    }

    function _filterFiles (data) {
      var dirs = [];
      var images = [];
      for (var i = 0; i < data.length; i++) {
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
            dirs.push(data[i]);
        }else{
          // if ext is in array
          if (_AllowedExt.indexOf(ext) > -1){
              images.push(data[i]);
          }
        }
      }

      service.data.dirs = dirs;
      service.data.images = images;
    }

    function getImageSrc (img) {
      var src = service._path + img.name;
      src = encodeURI(src);
      src = src.replace('#', '%23');
      return src;
    }


  }


})();
