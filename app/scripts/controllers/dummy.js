'use strict';

angular.module('huddyfrontendApp')
  .controller('DummyCtrl',['$scope', '$http', 'API_URL', function ($scope, $http, API_URL) {
    $http.get(API_URL).success(function (response) {
      $scope.dummyData = response.data;
    });
  }]);
