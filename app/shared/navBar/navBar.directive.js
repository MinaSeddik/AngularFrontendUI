'use strict';

app.directive('navBar', ['Auth', function (Auth) {

    return {
        restrict : 'E',
        controller: 'navBarCtrl',
        templateUrl: 'shared/navBar/navBar.html',
        replace: "false"
    };

}]);