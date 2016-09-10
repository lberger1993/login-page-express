angular.module('todoController', [])

// inject the Todo service factory into our controller
.controller('mainController', ['$scope', 
        '$http', 
        'createUser',
    function(
        $scope, 
        $http, 
        createUser) {

    
        $scope.userData  = {};
        $scope.loading = true;
        $scope.show_block = false;
     $scope.createUser = function() {

        // validate the formData to make sure that something is there
        // if form is empty, nothing will happen
        if (1 < 2 ) {
            $scope.loading = true;
            console.log("I can get here", $scope.userData);
            // call the create function from our service (returns a promise object)
            createUser.create($scope.userData)
            .success(function(data) {
                $scope.loading = false;
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data; 
                console.log( $scope.todos );
                // assign our new list of todos
            });
        }
    };
     $scope.signUp = function() {

        // validate the formData to make sure that something is there
        // if form is empty, nothing will happen
       
            $scope.loading = true;
            $scope.show_block = true;
            $scope.show_block = true;
        
    };
    


}]);