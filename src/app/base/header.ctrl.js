(function () {
    'use strict';

    angular
        .module('mang')
        .controller('HeaderCtrl', HeaderCtrl);

    HeaderCtrl.$inject = ['$mdSidenav', '$rootScope', '$scope'];

    function HeaderCtrl($mdSidenav, $rootScope, $scope) {
        var Window = require('nw.gui').Window.get();
        var vm = this;

        vm.minimize = minimize;
        vm.maximize = maximize;
        vm.close = close;
        vm.openMenu = openMenu;
        vm.upFolder = upFolder;

        Window.on('maximize', function () {
            vm.isMaximized = true;
        });

        Window.on('unmaximize', function () {
            vm.isMaximized = false;
        });

        function minimize() {
            Window.minimize();
        }

        function maximize() {
            if (vm.isMaximized)
                Window.unmaximize();
            else
                Window.maximize();
        }

        function close() {
            Window.close();
        }

        function openMenu() {
            $mdSidenav('menu')
                .open();
        }

        function upFolder() {
            //http://fanyc.iteye.com/blog/2302343
            //alert("upFolder");
            //$rootScope.$broadcast('$fromSubControllerClick', 'hello');
            var ctrl= document.querySelector('main');  
            if (ctrl) {
                var scope = angular.element(ctrl).scope(); 
                scope.$broadcast('$fromSubControllerClick', 'hello');
            }
        }
    }
})();
