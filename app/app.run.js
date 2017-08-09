'use strict';

angular.module("myApp").run(['$rootScope', '$location' , 'Auth', '$log', '$http', '$cookieStore',

    function ($rootScope, $location, Auth, $log, $http, $cookieStore) {

        $log.debug("inside app.run .....");

        // read cookie
        var loggedIn = $cookieStore.get(COOKIE_PREFIX + 'auth.loggedIn');
        var user = $cookieStore.get(COOKIE_PREFIX + 'auth.user');

        $log.debug("app.run cookie: loggedIn = ", loggedIn);
        $log.debug("app.run cookie: user = ", user);

        if( loggedIn !== undefined && user !== undefined ){
            $log.debug("init Auth with user: ", user);

            Auth.setLoggedIn(loggedIn);
            Auth.setUser(user);
        }



    $rootScope.$on('$stateChangeStart', function (event, toUrl, fromUrl) {

        if (!Auth.isLoggedIn()){
            $log.debug("Access denied to access, user Not Authenticated");
            // event.preventDefault();
        }

    });

}]);