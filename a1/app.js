(function(){

'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController',LunchCheckController);

function LunchCheckController($scope) {

LunchCheckController.$inject = ['$scope'];

  $scope.a1CheckLunch = function() {
      var message;
      if($scope.a1Menu == null || $scope.a1Menu.length == 0) {
        message = "Please enter data first";
      }
      else {
        var menuList = $scope.a1Menu.split(",");
        if(menuList.length > 0 && menuList.length < 4 ) {
          message = "Enjoy!";
        }
        if(menuList.length > 3) {
          message = "Too Much!";
        }
    }
    $scope.message = message;
    $scope.a1Menu = ""; //Resetting the input value
    return;
  }; //end of a1CheckLunch
  // end of controller - LunchCheckController
};

  // end of IIFE
})();
