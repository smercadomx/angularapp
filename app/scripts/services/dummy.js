'use strict';

angular.module('huddyfrontendApp')
  .factory('DummyService', ['$http', 'API_URL', '$q', function ($http, API_URL, $q) {
    return {
      getData: function () {
        var deferred = $q.defer();

        $http.get(API_URL + 'dummy').success(function (response) {
          deferred.resolve(response.data);
        }).error(function (error) {
          deferred.reject(error);
        });

        return deferred.promise;
      }
    };
  }]);
