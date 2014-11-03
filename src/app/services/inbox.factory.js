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