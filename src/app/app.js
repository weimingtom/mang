(function (){
  'use strict';

   var app = angular.module( 'mang', [ 'ngMaterial', 'ngRoute' ] );

    app.config(appConfig);

    appConfig.$inject = ['$mdIconProvider', '$mdThemingProvider', '$routeProvider']

    function appConfig ($mdIconProvider, $mdThemingProvider, $routeProvider) {
      $mdIconProvider
        .iconSet('action', 'app/base/iconsets/action-icons.svg')
        .iconSet('alert', 'app/base/iconsets/alert-icons.svg')
        .iconSet('av', 'app/base/iconsets/av-icons.svg')
        .iconSet('communication', 'app/base/iconsets/communication-icons.svg')
        .iconSet('content', 'app/base/iconsets/content-icons.svg')
        .iconSet('device', 'app/base/iconsets/device-icons.svg')
        .iconSet('editor', 'app/base/iconsets/editor-icons.svg')
        .iconSet('file', 'app/base/iconsets/file-icons.svg')
        .iconSet('hardware', 'app/base/iconsets/hardware-icons.svg')
        .iconSet('icons', 'app/base/iconsets/icons-icons.svg')
        .iconSet('image', 'app/base/iconsets/image-icons.svg')
        .iconSet('maps', 'app/base/iconsets/maps-icons.svg')
        .iconSet('navigation', 'app/base/iconsets/navigation-icons.svg')
        .iconSet('notification', 'app/base/iconsets/notification-icons.svg')
        .iconSet('social', 'app/base/iconsets/social-icons.svg')
        .iconSet('toggle', 'app/base/iconsets/toggle-icons.svg')

      $mdThemingProvider.theme('default')
        .primaryPalette('cyan');

      $routeProvider
        .when('/:path', {
          templateUrl: 'app/file-browser/file-browser.tmlp.html',
          controller: 'FileBrowserCtrl',
          controllerAs: 'vm',
          resolve: {
            FilesPrepSvc: FilesPrepSvc
          }
        })

  }

  FilesPrepSvc.$inject = ['$q', '$route', 'FilesSvc'];
  function FilesPrepSvc ($q, $route, FilesSvc){
    var path = $route.current.params.path;
    path = decodeURIComponent(path);
    if (path == 'root')
      path = '/';
    return FilesSvc.getData(path);
  }

  app.controller('AppCtrl', AppCtrl);

  function AppCtrl ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function(e, curr, prev){
      if (curr.$$route && curr.$$route.resolve) {
        // Show a loading message until promises aren't resolved
        $rootScope.loadingView = true;
      }
    });

    $rootScope.$on('$routeChangeSuccess', function(e, curr, prev){
      $rootScope.loadingView = false;
    });

    $rootScope.$on("$routeChangeError", function (e, curr, prev, rejection) {
      alert(rejection);
      var path = prev.$$route.originalPath.replace(":path", prev.params.path);
      // path
      console.log(prev);
      $location.path(path);
    });
  }


})();
