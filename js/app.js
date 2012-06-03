'use strict';

/* App Module */

angular.module('presfitness', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/requirements', {template: 'partials/age-list.html',   controller: RequirementsCtrl}).
      when('/requirements/:age', {template: 'partials/age-detail.html', controller: AgeDetailCtrl}).
      otherwise({redirectTo: '/requirements'});
}]);