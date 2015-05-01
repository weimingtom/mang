(function (){
  'use strict';

  angular
    .module('mang')
    .controller('FileBrowserCtrl', FileBrowserCtrl);

  FileBrowserCtrl.$inject = ['$routeParams', 'FilesSvc'];

  function FileBrowserCtrl ($routeParams, FilesSvc) {
    var vm = this;

    activate();

    function activate () {
      vm.data = {};
      var path = $routeParams.path;
      if (path != 'root')
        vm.data = FilesSvc.getInitialData(path);
      else
        vm.data = FilesSvc.getInitialData('/');
    }



  }

})();
