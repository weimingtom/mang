(function (){
  'use strict';

  angular
    .module('mang')
    .controller('FileBrowserCtrl', FileBrowserCtrl);

  FileBrowserCtrl.$inject = ['$routeParams', '$location','FilesSvc'];

  function FileBrowserCtrl ($routeParams, $location, FilesSvc) {
    var vm = this;
    vm.navigateTo = navigateTo;
    vm.getImageSrc = FilesSvc.getImageSrc;

    activate();

    function activate () {
      var path = decodeURIComponent($routeParams.path);
      if (path == 'root')
        path = '/';
      vm.data = FilesSvc.getData(path);
    }

    function navigateTo (url) {
      if (vm.data.path != '/')
        url = vm.data.path + url;
      url = encodeURIComponent(url);
      $location.path(url);
    }



  }

})();
