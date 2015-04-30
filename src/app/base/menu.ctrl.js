(function (){
  'use strict';

  angular
    .module('mang')
    .controller('MenuCtrl', MenuCtrl);

  MenuCtrl.$inject = ['$mdSidenav'];

  function MenuCtrl ($mdSidenav) {
    var vm = this;

    vm.sections = [
      {
        name: 'Home',
        icon: 'action:home'
      },
      {
        name: 'Browser',
        icon: 'action:explore'
      }
    ];

    vm.selectedIndex = 0;
    vm.navigateTo = navigateTo;
    vm.isSelected = isSelected;

    function navigateTo (index) {
      vm.selectedIndex = index;
      $mdSidenav('menu')
        .close();
    }

    function isSelected (index) {
      return vm.selectedIndex == index;
    }


  }

})();
