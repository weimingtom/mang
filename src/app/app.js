(function (){
  'use strict';

   angular.module( 'mang', [ 'ngMaterial' ] )
    .config(['$mdIconProvider', function($mdIconProvider) {
            $mdIconProvider
                .iconSet('action', 'app/iconsets/action-icons.svg', 24)
                .iconSet('alert', 'app/iconsets/alert-icons.svg', 24)
                .iconSet('av', 'app/iconsets/av-icons.svg', 24)
                .iconSet('communication', 'app/iconsets/communication-icons.svg', 24)
                .iconSet('content', 'app/iconsets/content-icons.svg', 24)
                .iconSet('device', 'app/iconsets/device-icons.svg', 24)
                .iconSet('editor', 'app/iconsets/editor-icons.svg', 24)
                .iconSet('file', 'app/iconsets/file-icons.svg', 24)
                .iconSet('hardware', 'app/iconsets/hardware-icons.svg', 24)
                .iconSet('icons', 'app/iconsets/icons-icons.svg', 24)
                .iconSet('image', 'app/iconsets/image-icons.svg', 24)
                .iconSet('maps', 'app/iconsets/maps-icons.svg', 24)
                .iconSet('navigation', 'app/iconsets/navigation-icons.svg', 24)
                .iconSet('notification', 'app/iconsets/notification-icons.svg', 24)
                .iconSet('social', 'app/iconsets/social-icons.svg', 24)
                .iconSet('toggle', 'app/iconsets/toggle-icons.svg', 24)
        }]);


})();
