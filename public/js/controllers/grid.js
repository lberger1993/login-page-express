angular.module('gridAppController', [])

// inject the Todo service factory into our controller
.controller('gridController', ['$scope', 
        '$http', 
       
    function(
        $scope, 
        $http
       
        ) {
          $scope.show = function() {
            ModalService.showModal({
                templateUrl: 'grid/modal.html',
                controller: "ModalController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        };

        console.log("I am in the grid controller");


}]);