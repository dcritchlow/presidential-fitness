'use strict';

/* App Module */

angular.module('presfitness', []).
  config(function($routeProvider) {
  $routeProvider.
      when('/requirements', {controller:RequirementsCtrl, templateUrl:'partials/age-list.html'}).
      when('/requirements/:age', {controller:AgeDetailCtrl, templateUrl:'partials/age-detail.html'}).
      otherwise({redirectTo:'/requirements'});
});


