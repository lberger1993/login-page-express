angular.module('modalAppController', [])

// inject the Todo service factory into our controller
.controller('modalController', ['$scope', 
        'close',
    function(
        $scope, 
      
        close) {
        $scope.close = function(result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
        };

}]);