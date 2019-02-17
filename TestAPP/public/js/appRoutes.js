angular.module('BlogApp', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		

		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'	
		});

	$locationProvider.html5Mode(true);

}]);