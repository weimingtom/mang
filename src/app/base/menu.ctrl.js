(function (){
  'use strict';

  angular
    .module('mang')
    .controller('MenuCtrl', MenuCtrl);

  MenuCtrl.$inject = ['$mdSidenav', '$location'];

  function MenuCtrl ($mdSidenav, $location) {
    var vm = this;

    vm.sections = [
      {
        name: 'Home',
        icon: 'action:home',
        url: '/'
      },
      {
        name: 'Browser',
        icon: 'action:explore',
        url: '/root'
      }
    ];

    vm.selectedIndex = 0;
    vm.navigateTo = navigateTo;
    vm.isSelected = isSelected;

    function navigateTo (url, index) {
      $location.path(url);
      vm.selectedIndex = index;
      $mdSidenav('menu')
        .close();
    }

    function isSelected (index) {
      return vm.selectedIndex == index;
    }


  }

})();
