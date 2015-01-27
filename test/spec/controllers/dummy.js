'use strict';

describe('Controller: DummyCtrl', function () {

  // load the controller's module
  beforeEach(module('huddyfrontendApp'));

  var DummyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DummyCtrl = $controller('DummyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
