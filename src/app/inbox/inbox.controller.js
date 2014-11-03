// Inbox.controller

console.log('Inbox Controller')

angular.module('gmailApp')
	.controller('InboxCtrl', ['$scope', 'InboxFactory', function($scope, InboxFactory){
		$scope.message = 'Inbox controller'

		InboxFactory.getMessages()
			.success(function  (data) {
				console.log(data)
			})
	}])