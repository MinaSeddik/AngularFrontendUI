'use strict';

app.controller('navBarCtrl', ['$scope', '$log', '$state', '$cookieStore', 'Auth', 'loginService',
    function ($scope, $log, $state, $cookieStore, Auth, loginService) {

    $log.debug("inside navBarCtrl.");

    $scope.isAuthenticated = Auth.isLoggedIn();
    $scope.user = Auth.getUser();


    $scope.$on('loggedIn', function (event, data) {

        $log.debug("loggedIn message received");

        $scope.isAuthenticated = Auth.isLoggedIn();
        $scope.user = Auth.getUser();

        $log.debug("After updating logging data");
        $log.debug("isAuthenticated: ", $scope.isAuthenticated);
        $log.debug("user: ", $scope.user);
    })


    $scope.logout = function(){
        loginService.logout().then(function (data) {

            $log.debug("logout current user.");

            // remove from cookie
            $log.debug("remove user cookie.");
            $cookieStore.remove(COOKIE_PREFIX + 'auth.loggedIn');
            $cookieStore.remove(COOKIE_PREFIX + 'auth.user');

            $log.debug("clean Auth");
            Auth.logout();

            $log.debug("redirecting to login page ...");
            $state.go('login');
        },function (data) {

            // remove from cookie
            $log.debug("remove user cookie.");
            $cookieStore.remove(COOKIE_PREFIX + 'auth.loggedIn');
            $cookieStore.remove(COOKIE_PREFIX + 'auth.user');

            $log.debug("redirecting to login page ...");
            $state.go('login');

        });
    }




}]);