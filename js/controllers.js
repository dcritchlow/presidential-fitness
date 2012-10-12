function RequirementsCtrl($scope, $http) {
  $http.get('requirements/requirements.json').success(function(data){
  	$scope.requirements = data;
  });
}

//RequirementsCtrl.$inject = ['$scope', '$http'];

function AgeDetailCtrl($scope, $routeParams, $http) {
  $http.get('requirements/' + $routeParams.age + '.json').success(function(data) {
    $scope.require = data;
  });
}

//AgeDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];