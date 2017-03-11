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
            console.log("navigateTo:" + url);
            $location.path(url);
        }

        $scope.$on('$upFolderClick', function(e, data){
            //console.log(data); // hello
            console.log("up path:" + vm.data.path);
            var url = vm.data.path;
            if (url && url !== '/') {
                url = url.replace(/\\/g, '/');
                if (url.charAt(url.length - 1) === '/') {
                    url = url.substring(0, url.length - 1);
                }
                if (url.lastIndexOf('/') > 0) {
                    url = url.substring(0, url.lastIndexOf('/') + 1);
                } else {
                    url = "/";
                }
            } else {
                url = "/";
            }
            console.log("up:" + url);
            if (url !== vm.data.path) {
                url = encodeURIComponent(url);
                vm.data = {};
                $location.path(url);
            }
        });
    }

})();
