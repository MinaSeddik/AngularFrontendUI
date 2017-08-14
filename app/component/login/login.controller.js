'use strict';

app.controller('loginCtrl', ['$scope', '$state', '$log', 'loginService', 'Auth', '$cookieStore',
    function ($scope, $state, $log, loginService, Auth, $cookieStore) {

        $scope.errorMsg = null;

        $scope.login = function () {
            var userName = $scope.userName;
            var password = $scope.password;


            loginService.authenticate(userName, password).then(function (data) {

                $log.debug("authenticate user " + userName + " pass");

                Auth.setLoggedIn(true);
                Auth.setUser(userName);

                // save in cookie
                $log.debug("save logging info to cookie store ...");
                $cookieStore.put(COOKIE_PREFIX + 'auth.loggedIn', Auth.isLoggedIn());
                $cookieStore.put(COOKIE_PREFIX + 'auth.user', Auth.getUser());

                $scope.errorMsg = null;

                $log.debug("redirecting to home page ...");
                $state.go('home');
            }, function (data) {

                $log.debug("authenticate user " + userName + " fail");
                $scope.errorMsg = "Invalid Credentials.";
            });
        };


    }]);