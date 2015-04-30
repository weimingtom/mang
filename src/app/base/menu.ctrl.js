(function (){
  'use strict';

  angular
    .module('mang')
    .controller('MenuCtrl', MenuCtrl);

  function MenuCtrl () {
    var vm = this;

    vm.sections = [
      {
        name: 'Home',
        icon: 'action:home'
      },
      {
        name: 'Browser',
        icon: 'action:explore'
      },
      {
        name: 'Unpack',
        icon: 'action:input'
      }
    ];

    vm.selectedIndex = 0;
    vm.navigateTo = navigateTo;
    vm.isSelected = isSelected;

    function navigateTo (index) {
      vm.selectedIndex = index;
    }

    function isSelected (index) {
      return vm.selectedIndex == index;
    }


  }

})();
