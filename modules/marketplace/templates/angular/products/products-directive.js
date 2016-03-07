(function() {
    'use strict';

    angular
        .module('products')
        .directive('products', products);

    function products($rootScope){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'marketplace/angular/products/content.html',
            link : function($scope, element, attrs, parentController){

            }
        }
    }

})();