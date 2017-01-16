var myApp = angular.module('GuessApp',[]);

myApp.controller('GuessController', function($scope) {
  let random = Math.floor(Math.random()*101);
  console.log(random);
  let turn_count = 0;
  $scope.guessTheNumber= function(){
      turn_count+=1;
      if(turn_count>=7){
        $scope.indication = "Game over!";
      }
      else if($scope.guess > random){
        $scope.indication = "C'est moins!";
      }
      else if ($scope.guess < random) {
        $scope.indication = "C'est plus!";
      }
      else if ($scope.guess === random) {
        $scope.indication = "C'est gagné!";
      }
  };
});
