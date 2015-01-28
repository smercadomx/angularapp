'use strict';

angular.module('huddyfrontendApp')
  .controller('DummyCtrl', ['$scope', 'DummyService', function ($scope, DummyService) {
    DummyService.getData().then(function (data) {
      $scope.dummyData = data;
    });
  }]);
