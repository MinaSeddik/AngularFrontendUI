'use strict';

app.directive('navBar', ['Auth', function (Auth) {

    return {
        restrict : 'EA',
        controller: 'navBarCtrl',
        templateUrl: 'shared/navBar/navBar.html',
        replace: "true"

    };

}]);