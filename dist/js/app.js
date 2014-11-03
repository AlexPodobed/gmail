// init js

console.log('init')

angular.module('gmailApp', ['ngRoute'])
	.config(function  ($routeProvider) {
		$routeProvider
			.when('/',{
				templateUrl: "app/home/home.html",
				controller: "HomeCtrl",
				controllerAs: "home"
			})
			.when('/inbox',{
				templateUrl: "app/inbox/inbox.html",
				controller: "InboxCtrl",
				controllerAs: "inbox"
			})
			.when('/inbox/email/:id',{
				templateUrl: "app/email/email.html",
				controller: "EmailCtrl",
				controllerAs: "email"
			})
			.otherwise({
				redirectTo: '/'
			})
	})
// email.controller

console.log('Email Controller')

angular.module('gmailApp')
	.controller('EmailCtrl', ['$scope', function($scope){
		$scope.message = 'Email controller'
	}])
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
// user.controller

console.log('HomeCtrl')

angular.module('gmailApp')
	.controller('HomeCtrl', ['$scope', function($scope){
		$scope.message = 'Home controller'
	}])
console.log('inbox.factory')

angular.module('gmailApp')
    .factory('InboxFactory', ['$http',
        function($http) {
            return {
                getMessages: function() {
                    return $http.get('json/emails.json')
                        .error(function(err) {
                            console.log('There was an error:' + err)
                        })
                }
            }
        }
    ])