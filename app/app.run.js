'use strict';

angular.module("myApp").run(['$rootScope', '$location' , 'Auth', '$log', function ($rootScope, $location, Auth, $log) {

    $rootScope.$on('$stateChangeStart', function (event, toUrl, fromUrl) {

        if (!Auth.isLoggedIn()){
            $log.debug("Access denied to access, user Not Authenticated");
            // event.preventDefault();
        }

    });

}]);