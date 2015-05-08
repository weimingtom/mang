(function (){
  'use strict';

  angular
    .module('mang')
    .controller('FileBrowserCtrl', FileBrowserCtrl);

  FileBrowserCtrl.$inject = ['$rootScope', '$routeParams', '$location', 'FilesSvc', 'FilesPrepSvc'];

  function FileBrowserCtrl ($rootScope, $routeParams, $location, FilesSvc, FilesPrepSvc) {
    var vm = this;
    vm.navigateTo = navigateTo;
    vm.getImageSrc = FilesSvc.getImageSrc;


    vm.data = FilesPrepSvc;
    $rootScope.$$phase || $rootScope.$apply();

    // activate();

    // function activate () {
    //   var path = decodeURIComponent($routeParams.path);
    //   if (path == 'root')
    //     path = '/';
    //   vm.data = FilesSvc.getData(path);
    // }

    function navigateTo (url) {
      if (vm.data.path != '/')
        url = vm.data.path + url;
      url = encodeURIComponent(url);
      vm.data = {};
      $location.path(url);
    }



  }

})();
