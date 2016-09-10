(function () {
    'use strict';

    angular
        .module('savrApp', ['ngRoute', 'todoController', 'todoService', 'createUserService'])
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
             .when('/', {
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })
            .when('/', {
                templateUrl: 'login/login.view.html'
               
            })

            .when('/login', {
                //controller: 'LoginController',
                templateUrl: 'login/login.view.html'
            })

            .when('/register', {
                //controller: 'RegisterController',
                templateUrl: 'register/register.html',
                // controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/login' });
    }

})();

