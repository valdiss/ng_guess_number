var myApp = angular.module('GuessApp', []);

myApp.controller('GuessController', function($scope) {
    let random = Math.floor(Math.random() * 100);
    console.log(random);
    $scope.turn_count = 7;
    $scope.disable = false;
    $scope.guessTheNumber = function() {
        $scope.turn_count--;
        if ($scope.turn_count === 0) {
            $scope.indication = "Game over!";
            $scope.disable = true;
        } else if ($scope.guess > random) {
            $scope.indication = "C'est moins!";
        } else if ($scope.guess < random) {
            $scope.indication = "C'est plus!";
        } else if ($scope.guess === random) {
            $scope.indication = "C'est gagné!";
            $scope.disable = true;
        }
    };
    let reset = document.getElementById('reset');
    reset.addEventListener("click", function() {
        window.location.reload();
    });
});
