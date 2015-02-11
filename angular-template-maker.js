(function () {
    'use strict';

    angular.module('ngTemplateMaker', []);

    angular
        .module('ngTemplateMaker')
        .factory('templateMaker', templateMaker);

    templateMaker.$inject = ['$templateRequest', '$compile', '$rootScope', '$timeout', '$q'];

    /* @ngInject */
    function templateMaker($templateRequest, $compile, $rootScope, $timeout, $q) {
        return function (url, data) {
            return $templateRequest(url, false).then(function(response) {
                var $scope = $rootScope.$new();
                var dfd = $q.defer();

                Object.keys(data).forEach(function(key) {
                    $scope[key] = data[key];
                });

                var el = angular.element('<div>' + response + '</div>');

                $timeout(function() {
                    $compile(el)($scope);
                    $rootScope.$digest();
                    dfd.resolve(el.html());
                });

                return dfd.promise;
            });
        };
    }
})();
