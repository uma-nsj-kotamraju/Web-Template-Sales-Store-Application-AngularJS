angular.module('templateStore.templates',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	      when('/templates',{
	      	templateUrl: 'templates/templates.html',
	      	controller: 'TemplatesCtrl'
	      })
	      .when('/templates/:id', {
             templateUrl: 'templates/template-details.html',
              controller: 'TemplateDetailsCtrl'
             }) 
	       .otherwise({
	       	  redirectTo: '/templates'
	       });
}])

  . controller('TemplatesCtrl',['$scope',function($scope){
  	
  	
  }])
  .controller('TemplateDetailsCtrl', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {        
     console.log($routeParams.templateId); 
 	}]);