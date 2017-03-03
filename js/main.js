var todoApp = angular.module('todoApp', []);
todoApp.controller('todoCtrl', ['$scope', function($scope){
  $scope.done = function(complete) {
    var position = $scope.completed.indexOf(complete);
    $scope.completed.splice(position, 1);
    console.log(position);
  }
  $scope.complete = function (task) {
    var position = $scope.tasks.indexOf(task);
    $scope.tasks.splice(position, 1);
    console.log(position)
    $scope.completed.push(task);
    console.log($scope.completed);
  }
  $scope.remove = function(task) {
   var position = $scope.tasks.indexOf(task);
   $scope.tasks.splice(position, 1);
  };


  $scope.add = function(){
  var check  = $scope.newTask.text;
  if(check) {
      $scope.tasks.push({
        text: $scope.newTask.text
      });
      $scope.newTask.text = "";

  } else {
    alert("enter a damn value");
  }

  }

 $scope.tasks = [
   {
     text: "some text here"
   },
   {
     text: "some text here"
   }
 ];
$scope.completed = [];



}]);
