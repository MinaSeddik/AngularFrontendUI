'use strict';

app.controller('dashBoardCtrl', ['$scope', 'Auth', '$state', '$log', function ($scope, Auth, $state, $log) {

    $log.debug('inside dash board controller.');


    if (!Auth.isLoggedIn()){
        $log.debug("User Not logged in.")
        $state.go('login')
    }

} ]);