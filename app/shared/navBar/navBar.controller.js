'use strict';

app.controller('navBarCtrl', ['$scope', 'Auth', function ($scope, Auth) {

    $scope.isAuthenticated = Auth.isLoggedIn();
    $scope.user = Auth.getUser();

}]);