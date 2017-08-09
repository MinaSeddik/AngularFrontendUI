'use strict';

app.service('loginService', ['$http', '$q', '$log', function ($http, $q, $log) {

    this.authenticate = function (userName, password) {
        $log.debug("Authenticate user: ", userName);

        var url = __env.apiUrl + __env.baseUrl + "/login";
        $log.debug("API login Url: ", url);

        return $http({
            method: 'POST',
            url: url,
            data: "username=" + userName + "&password=" + password,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(function (response) {
                $log.debug("Login successful: ", response);
                $log.debug("Login successful: ", response.status);
                $log.debug("Login successful: ", response.data);

                // return a promise of data
                return $q.resolve(response);
            }, function (response) {
                // failed
                $log.debug("Login failed: ", response);
                $log.debug("Login failed: ", response.status);
                $log.debug("Login failed: ", response.data);

                return $q.reject(response);
            });
    };

    this.logout = function () {
        $log.debug("call logout");

        var url = __env.apiUrl + __env.baseUrl + "/logout";
        $log.debug("API logout Url: ", url);

        return $http({
            method: 'GET',
            url: url
        })
            .then(function (response) {
                $log.debug("Logout successful: ", response);
                $log.debug("Logout successful: ", response.status);
                $log.debug("Logout successful: ", response.data);

                // return a promise of data
                return $q.resolve(response);
            }, function (response) {
                // failed
                $log.debug("Logout failed: ", response);
                $log.debug("Logout failed: ", response.status);
                $log.debug("Logout failed: ", response.data);

                return $q.reject(response);
            });
    };

}]);