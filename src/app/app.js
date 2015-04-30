(function (){
  'use strict';

   angular.module( 'mang', [ 'ngMaterial' ] )
    .config(['$mdIconProvider', '$mdThemingProvider', function($mdIconProvider, $mdThemingProvider) {
      $mdIconProvider
        .iconSet('action', 'app/iconsets/action-icons.svg')
        .iconSet('alert', 'app/iconsets/alert-icons.svg')
        .iconSet('av', 'app/iconsets/av-icons.svg')
        .iconSet('communication', 'app/iconsets/communication-icons.svg')
        .iconSet('content', 'app/iconsets/content-icons.svg')
        .iconSet('device', 'app/iconsets/device-icons.svg')
        .iconSet('editor', 'app/iconsets/editor-icons.svg')
        .iconSet('file', 'app/iconsets/file-icons.svg')
        .iconSet('hardware', 'app/iconsets/hardware-icons.svg')
        .iconSet('icons', 'app/iconsets/icons-icons.svg')
        .iconSet('image', 'app/iconsets/image-icons.svg')
        .iconSet('maps', 'app/iconsets/maps-icons.svg')
        .iconSet('navigation', 'app/iconsets/navigation-icons.svg')
        .iconSet('notification', 'app/iconsets/notification-icons.svg')
        .iconSet('social', 'app/iconsets/social-icons.svg')
        .iconSet('toggle', 'app/iconsets/toggle-icons.svg')

      $mdThemingProvider.theme('default')
        .primaryPalette('cyan');


    }]);


})();
