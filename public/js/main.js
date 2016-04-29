angular.module('angpic', ['myDirectives', 'ngAnimate', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/pictures', {
            templateUrl: 'partials/main.html',
            controller: 'PicturesController'
        });

        $routeProvider.when('/pictures/new', {
            templateUrl: 'partials/picture.html',
            controller: 'PictureController'
        });

        $routeProvider.when('/pictures/edit/:pictureId', {
            templateUrl: 'partials/picture.html',
            controller: 'PictureController'
        });

        $routeProvider.otherwise({ redirectTo: '/pictures' });

    });