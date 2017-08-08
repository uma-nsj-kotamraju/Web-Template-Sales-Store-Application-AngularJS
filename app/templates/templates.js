angular.module('templateStore.templates',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	      when('/templates',{
	      	templateUrl: 'templates/templates.html',
	      	controller: 'templatesCtrl'
	      });
}])

  . controller('templatesCtrl',['$scope',function($scope){
  	console.log("Templates Ctrl Init");
  	console.log($scope);
  }]);