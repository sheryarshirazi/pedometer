var pedoMeterApp = angular.module('pedoMeterApp', ['ionic']);

// pedoMeterApp.controller('myCtrl', ['$scope', function($scope){
//   $scope.startDate = '';
//   $scope.endDate = '';
//   $scope.numberOfSteps = 0;
//   $scope.distance = 0;
//   $scope.floorsAscended = 0;
//   $scope.floorsDescended = 0;
//   var successHandler = function (pedometerData) {
//       $scope.startDate = pedometerData.startDate;
//       $scope.endDate = pedometerData.endDate;
//       $scope.numberOfSteps = pedometerData.numberOfSteps;
//       $scope.distance = pedometerData.distance;
//       $scope.floorsAscended = pedometerData.floorsAscended;
//       $scope.floorsDescended = pedometerData.floorsDescended;
//   };
//   pedometer.startPedometerUpdates(successHandler, function () {
//     alert('notworking');
//   });
// }]);

pedoMeterApp.controller('myCtrl', ['$scope', function($scope){
  var startingOffset = 0;

  $scope.start = function () {
    stepcounter.start(startingOffset, success, failure);
  };
  $scope.stop = function () {
    stepcounter.stop(success, failure);
  };
  $scope.today = function () {
    stepcounter.getTodayStepCount(success, failure);
  };
  $scope.count = function () {
    stepcounter.getStepCount(success, failure);
  };

  var success = function(message) {
    alert(message);
  };

  var failure = function() {
    alert("Error calling CordovaStepCounter Plugin");
  };

  ionic.Platform.ready(function(){
    stepcounter.deviceCanCountSteps(success, failure);
  });

}]);

pedoMeterApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
