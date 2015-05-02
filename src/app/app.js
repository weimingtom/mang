(function (){
  'use strict';

   angular.module( 'mang', [ 'ngMaterial', 'ngRoute' ] )
    .config(['$mdIconProvider', '$mdThemingProvider', '$routeProvider',
      function($mdIconProvider, $mdThemingProvider, $routeProvider) {
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
            controllerAs: 'vm'
          })


    }
  ]);


})();
