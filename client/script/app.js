var drApp = angular.module('drApp', ['ngRoute']);

drApp.config(function($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: '../partials/login.html',
        controller: 'UserController'
    })
    .when('/view', {
        templateUrl: '../partials/appointment_view.html',
        controller: 'ApptController'
    })
    .when('/new', {
        templateUrl: '../partials/new_appointment.html',
        controller: 'ApptController'
    })
    .otherwise({
        redirectTo: '/login'
    });
});
