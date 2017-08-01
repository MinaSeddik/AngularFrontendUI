'use strict'

var app = angular.module('myApp', ['ui.router']);

app.config(['$qProvider', '$stateProvider', '$urlRouterProvider', function ($qProvider, $stateProvider, $urlRouterProvider) {

    $qProvider.errorOnUnhandledRejections(false);

    $stateProvider.state('home', {
        url: '/',
        controller: 'banner',
        templateUrl : "shared/banner/banner.html"
    });

    $urlRouterProvider.when('', '/');

    $urlRouterProvider.otherwise('/404');

}]);