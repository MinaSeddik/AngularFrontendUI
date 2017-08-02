'use strict';

var env = {};

// Import variables if present in env.js
if (window) {
    Object.assign(env, window.__env);
}

var app = angular.module('myApp', ['ui.router']);

app.constant('__env', env);


app.config(['$qProvider', '$stateProvider', '$urlRouterProvider', '$logProvider',
    function ($qProvider, $stateProvider, $urlRouterProvider, $logProvider) {

        $qProvider.errorOnUnhandledRejections(false);

        $stateProvider
            .state('login', {
                url: '/login',
                controller: 'dashBoardCtrl',
                templateUrl: "component/login/login.html"
            })
            .state('home', {
                url: '/home',
                controller: 'dashBoardCtrl',
                templateUrl: "component/dashboard/dashboard.html"
            });

        $urlRouterProvider.when('', '/');
        $urlRouterProvider.when('/', '/home');
        $urlRouterProvider.otherwise('/404');


        $logProvider.debugEnabled(__env.enableDebug);

    }]);