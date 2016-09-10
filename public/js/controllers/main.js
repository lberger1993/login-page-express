angular.module('todoController', [])

// inject the Todo service factory into our controller
.controller('mainController', ['$scope', 
        '$http', 
        'Todos', 
        'createUser',
    function(
        $scope, 
        $http, 
        Todos, 
        createUser) {

    

        Todos.get()
        .success(function(data) {
            $scope.todos = data;
            $scope.loading = false;
        });

        $scope.formData = {};
        $scope.userData  = {};
        $scope.loading = true;
        $scope.show_block = false;



    // CREATE ==================================================================
    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {

        // validate the formData to make sure that something is there
        // if form is empty, nothing will happen
        if ($scope.formData.text != undefined) {
            $scope.loading = true;

            // call the create function from our service (returns a promise object)
            Todos.create($scope.formData)

            // if successful creation, call our get function to get all the new todos
            .success(function(data) {
                $scope.loading = false;
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data; // assign our new list of todos
            });
        }
    };
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

            //console.log("I can get here", $scope.userData);
            // call the create function from our service (returns a promise object)
            // createUser.create($scope.userData)
            // .success(function(data) {
            //     $scope.loading = false;
            //     $scope.formData = {}; // clear the form so our user is ready to enter another
            //     $scope.todos = data; 
            //     console.log( $scope.todos );
            //     // assign our new list of todos
            // });
        
    };
    


    // DELETE ==================================================================
    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $scope.loading = true;

        Todos.delete(id)
            // if successful creation, call our get function to get all the new todos
            .success(function(data) {
                $scope.loading = false;
                $scope.todos = data; // assign our new list of todos
            });
    };
}]);