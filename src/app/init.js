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