'use strict';

angular.module('todo')
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {

            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    // setup an abstract state for the tabs directive
        .state('home', {
        url: '/home',
        abstract: true,
        templateUrl: 'app/home/home.html'
    })

    // Each tab has its own nav history stack:

    .state('home.list', {
        url: '/list',
        views: {
            'tab-list': {
                templateUrl: 'app/list/list.html',
            }
        }
    })

    .state('home.todo', {
        url: '/todo',
        views: {
            'tab-todo': {
                templateUrl: 'app/todo/todo.html',
            }
        }
    })




    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home/list');

});