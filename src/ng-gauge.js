(function() {
  'use strict';  angular.module('ng-gauge', []).directive('ngGauge', function(){
    return {
      restrict: 'E', 
      scope:{
        tLabel:"@",
        tValue:"@",
        bLabel:"@",
        bValue:"@",
        unit:"@"
      },
      template: 
        '<div class="ng-gauge">'+
            '<div class="ng-gauge-container-left">'+
                '<div class="ng-gauge-indicator" style={{bStyle}}></div>'+
            '</div>'+
           '<div class="ng-gauge-container-right">'+
                '<div class="ng-gauge-indicator" style={{tStyle}}></div>'+
            '</div>'+
            '<div class="ng-gauge-inner">'+
                '<div class="ng-gauge-label">{{tLabel}}</div>'+
                '<div class="ng-gauge-value">{{tValue}}{{unit}}</div>'+
                '<div class="ng-gauge-value ng-gauge-bottom">{{bValue}}{{unit}}</div>'+
                '<div class="ng-gauge-label">{{bLabel}}</div>'+
            '</div>'+
        '</div>'    ,     
      link: function(scope, element, attrs) {
        // can be replaced with watchGroup in angular 1.3             
        scope.$watch('tValue', function(){
          scope.tStyle = '-webkit-transform:rotate('+(scope.tValue/100*180-180)+'deg);';
        }, true);       
        scope.$watch('bValue', function(){
          scope.bStyle = '-webkit-transform:rotate('+(scope.bValue/100*180-180)+'deg);';
        }, true);               
      }
    };
  });
}).call(this);