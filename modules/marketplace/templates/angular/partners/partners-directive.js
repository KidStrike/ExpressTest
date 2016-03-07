(function() {
    'use strict';

    angular
        .module('partners')
        .directive('partners', partners);

    function partners($rootScope){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'marketplace/angular/partners/content.html',
            link : function($scope, element, attrs, parentController){

            }
        }
    }

})();