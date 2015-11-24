'use strict';

/**
 * @ngdoc overview
 * @name adminApp
 * @description
 * # adminApp
 *
 * Main module of the application.
 */
angular
  .module('adminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/filters', {
        templateUrl: 'views/filters.html',
        controller: 'FiltersCtrl'
      })
      .when('/expressions', {
        templateUrl: 'views/expressions.html',
        controller: 'ExpressionsCtrl'
      })
      .when('/directives', {
        templateUrl: 'views/directives.html',
        controller: 'DirectivesCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
