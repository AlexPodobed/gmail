// user.controller

console.log('HomeCtrl')

angular.module('gmailApp')
	.controller('HomeCtrl', ['$scope', function($scope){
		$scope.message = 'Home controller'
	}])