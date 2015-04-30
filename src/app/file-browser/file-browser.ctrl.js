(function (){
  'use strict';

  angular
    .module('mang')
    .controller('FileBrowserCtrl', FileBrowserCtrl);

  FileBrowserCtrl.$inject = ['FilesSvc']

  function FileBrowserCtrl (FilesSvc) {
    var vm = this;

    activate();

    function activate () {
      vm.data = {};
      vm.data = FilesSvc.getInitialData('/');
    }



  }

})();
