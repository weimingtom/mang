(function (){
  'use strict';

  angular
    .module('mang')
    .controller('HeaderCtrl', HeaderCtrl);

  function HeaderCtrl () {
    var Window = require('nw.gui').Window.get();
    var vm = this;

    vm.minimize = minimize;
    vm.maximize = maximize;
    vm.close = close;

    Window.on('maximize', function(){
      vm.isMaximized = true;
    });

    Window.on('unmaximize', function(){
      vm.isMaximized = false;
    });

    function minimize (){
      Window.minimize();
    }

    function maximize (){
      if (vm.isMaximized)
        Window.unmaximize();
      else
        Window.maximize();
    }

    function close () {
      Window.close();
    }
  }
})();
