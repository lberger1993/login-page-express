(function () {
    'use strict';

    angular
        .module('savrApp', 
            ['ngRoute', 
            'todoController',
            'createUserService',
            'gridAppController', 
            'angularModalService',
            ])
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
             .when('/home', {
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })
            .when('/', {
                templateUrl: 'register/register.html',
            })

            .when('/login', {
                //controller: 'LoginController',
                templateUrl: 'login/login.view.html'
            })

            .when('/register', {
                //controller: 'RegisterController',
                templateUrl: 'register/register.html',
              
            })

            .when('/grid', {
                controller: 'gridController',
                templateUrl: 'grid/grid.html',
                
            })

            .otherwise({ redirectTo: '/register' });
    }

})();

