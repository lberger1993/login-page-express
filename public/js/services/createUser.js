angular.module('createUserService', [])

	// super simple service
	// each function returns a promise object 
	.factory('createUser', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/create_user');
			},
			create : function(userData) {
				console.log("I AM HERE");
				return $http.post('/api/create_user', userData);
			},
			delete : function(id) {
				return $http.delete('/api/create_user' + id);
			}
		}
	}]);