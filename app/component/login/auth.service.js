'use strict';

app.service('Auth', ['$rootScope', '$log', '$cookieStore', function ($rootScope, $log, $cookieStore) {

    this.loggedIn = $cookieStore.get(COOKIE_PREFIX + 'auth.loggedIn');
    this.user = $cookieStore.get(COOKIE_PREFIX + 'auth.user');

    $log.debug('inside Auth service.');

    $log.debug('inside Auth service --> ', this.loggedIn);
    $log.debug('inside Auth service --> ', this.user);

    this.isLoggedIn = function () {
        $log.debug('Auth service::isLoggedIn ', this.loggedIn);
        return this.loggedIn;
    };

    this.setLoggedIn = function (loggedIn) {
        this.loggedIn = loggedIn;
        broadcastLogging(this.loggedIn, this.user);
    };

    this.setUser = function (user) {
        this.user = user;
        broadcastLogging(this.loggedIn, this.user);
    };

    this.getUser = function () {
        $log.debug('Auth service::getUser ', this.user);
        return this.user;
    };

    // in case of logging out
    this.logout = function () {
        this.loggedIn = false;
        this.user = null;
        $log.debug('Auth service::logout ', this.loggedIn);
        broadcastLogging(this.loggedIn, this.user);
};


    function broadcastLogging(user, islogging){

        $log.debug("Auth service::broadcastLogging start");

        $log.debug("Auth service::broadcastLogging: islogging = ", islogging);
        $log.debug("Auth service::broadcastLogging: user = ", user);

        $rootScope.$broadcast('loggedIn',
            {
                "user": user,
                "loggedIn": islogging
            });

        $log.debug("Auth service::broadcastLogging end");
    }

}]);