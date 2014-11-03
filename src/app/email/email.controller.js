// email.controller

console.log('Email Controller')

angular.module('gmailApp')
	.controller('EmailCtrl', ['$scope', function($scope){
		$scope.message = 'Email controller'
	}])