(function () {
    'use strict';

    angular
        .module('mang')
        .controller('FileBrowserCtrl', FileBrowserCtrl);

    FileBrowserCtrl.$inject = ['$rootScope', '$routeParams', '$location', 'FilesSvc', 'FilesPrepSvc', '$scope'];

    function FileBrowserCtrl($rootScope, $routeParams, $location, FilesSvc, FilesPrepSvc, $scope) {
        var vm = this;
        vm.navigateTo = navigateTo;
        vm.getImageSrc = FilesSvc.getImageSrc;
        //vm.upFolder = upFolder;


        vm.data = FilesPrepSvc;
        console.log("enter:" + vm.data.path);
        $rootScope.$$phase || $rootScope.$apply();

        function navigateTo(url) {
            if (vm.data.path != '/')
                url = vm.data.path + url;
            url = encodeURIComponent(url);
            vm.data = {};
            $location.path(url);
        }

        $scope.$on('$fromSubControllerClick', function(e, data){
            //console.log(data); // hello
            var url = "";
            console.log("up path:" + vm.data.path);
            if (vm.data.path != '/') {
                var k = vm.data.path;
                k = k.substring(0, k.length - 1);
                if (k) {
                    url = k.substring(0, k.lastIndexOf('/') + 1);
                }
            }
            console.log("up:" + k);
            url = encodeURIComponent(url);
            vm.data = {};
            $location.path(url);
        });
    }

})();
