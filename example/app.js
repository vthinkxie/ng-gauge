'use strict';

angular.module('ng-gauge-example', [
  'ng-gauge'
])
.controller('example', ['$scope', '$interval',function($scope,$interval){
      $scope.example = {
        tVal:0,
        bVal:0
      };
      var intervalfn = $interval(function () { 
        $scope.example.tVal = (Math.random()*100).toFixed(2);
        $scope.example.bVal = (Math.random()*100).toFixed(2);
      }, 5000);
      $scope.$on('$destroy', function () { $interval.cancel(intervalfn); });  
}])