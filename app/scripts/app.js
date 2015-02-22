'use strict';

/**
 * @ngdoc overview
 * @name lunchioApp
 * @description
 * # lunchioApp
 *
 * Main module of the application.
 */
angular
  .module('lunchioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/meal.html',
        controller: 'MealCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/meal', {
        templateUrl: 'views/meal.html',
        controller: 'MealCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/allmeals', {
        templateUrl: 'views/allmeals.html',
        controller: 'AllmealsCtrl'
      })
      .otherwise({
        redirectTo: '/meal'
      });
  });

document.ondblclick = function() {
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    }
    else if (document.selection) {
      document.selection.empty();
    }
};