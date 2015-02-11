'use strict';

describe('angular-template-maker', function() {

  beforeEach(module('ngTemplateMaker'));

  beforeEach(inject(function($templateCache) {
    $templateCache.put('scripts/interpolate.html', '<div>{{ name }}</div>');
    $templateCache.put('scripts/directive.html', '<div ng-class="{ info: info }"></div>');
  }));

  it('should interpolate on detail vaues', inject(function(templateMaker, $timeout) {
    var promise = templateMaker('scripts/interpolate.html', {
      name: 'john doe'
    });

    var callbackStub = jasmine.createSpy('callbackStub');
    promise.then(callbackStub);

    $timeout.flush();

    expect(callbackStub).toHaveBeenCalledWith('<div class="ng-binding">john doe</div>');
  }));

  it('should compile directives on template', inject(function(templateMaker, $timeout) {
    var promise = templateMaker('scripts/directive.html', {
      info: true
    });

    var callbackStub = jasmine.createSpy('callbackStub');
    promise.then(callbackStub);

    $timeout.flush();

    var el = angular.element(callbackStub.calls.argsFor(0)[0]);

    expect(el.hasClass('info')).toBeTruthy();
  }));


});
