'use strict';

app.service('Auth', [function () {

    var user;
    var loggedIn = false;

    this.isLoggedIn = function () {
        return loggedIn;
    };

    this.setLoggedIn = function (loggedIn) {
        this.loggedIn = loggedIn;
    };

    this.setUser = function (user) {
        this.user = user;
    };

    this.getUser = function () {
        return user;
    };

    // in case of logging out
    this.reset = function () {
        this.loggedIn = false;
        this.user = null;
    };


}]);