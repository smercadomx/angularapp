'use strict';

angular.module('huddyfrontendApp')

  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: '/views/main.html'
      })
      .state('dummy', {
        url: '/dummy',
        templateUrl: '/views/dummy.html',
        controller: 'DummyCtrl'
      });
  }])
  .constant('API_URL', 'http://localhost/huddyapi/public/dummy');
