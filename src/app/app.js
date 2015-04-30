(function (){
  'use strict';

   angular.module( 'mang', [ 'ngMaterial' ] )
    .config(['$mdIconProvider', '$mdThemingProvider', function($mdIconProvider, $mdThemingProvider) {
      $mdIconProvider
        .iconSet('action', 'app/iconsets/action-icons.svg', '20')
        .iconSet('alert', 'app/iconsets/alert-icons.svg', '20')
        .iconSet('av', 'app/iconsets/av-icons.svg', '20')
        .iconSet('communication', 'app/iconsets/communication-icons.svg', '20')
        .iconSet('content', 'app/iconsets/content-icons.svg', '20')
        .iconSet('device', 'app/iconsets/device-icons.svg', '20')
        .iconSet('editor', 'app/iconsets/editor-icons.svg', '20')
        .iconSet('file', 'app/iconsets/file-icons.svg', '20')
        .iconSet('hardware', 'app/iconsets/hardware-icons.svg', '20')
        .iconSet('icons', 'app/iconsets/icons-icons.svg', '20')
        .iconSet('image', 'app/iconsets/image-icons.svg', '20')
        .iconSet('maps', 'app/iconsets/maps-icons.svg', '20')
        .iconSet('navigation', 'app/iconsets/navigation-icons.svg', '20')
        .iconSet('notification', 'app/iconsets/notification-icons.svg', '20')
        .iconSet('social', 'app/iconsets/social-icons.svg', '20')
        .iconSet('toggle', 'app/iconsets/toggle-icons.svg', '20')

      $mdThemingProvider.theme('default')
        .primaryPalette('cyan');


    }]);


})();
