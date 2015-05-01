(function (){
  'use strict';

  angular
    .module('mang')
    .controller('FileBrowserCtrl', FileBrowserCtrl);

  FileBrowserCtrl.$inject = ['$routeParams', '$location','FilesSvc'];

  function FileBrowserCtrl ($routeParams, $location, FilesSvc) {
    var vm = this;
    vm.navigateTo = navigateTo;

    activate();

    function activate () {
      vm.data = {};
      var path = decodeURIComponent($routeParams.path);
      console.log(path, 'recoge')
      if (path != 'root')
        vm.data = FilesSvc.getInitialData(path);
      else
        vm.data = FilesSvc.getInitialData('/');
    }

    function navigateTo (url) {
      url = _getUrl(url);
      $location.path(url);
    }

    function _getUrl (url) {
      var newUrl = '';
      if (vm.data.path != '/')
        newUrl = vm.data.path + url;
      else
        newUrl = url;
      newUrl = encodeURIComponent(newUrl);
      newUrl = 'browser/' + newUrl;
      return newUrl;
    }



  }

})();
