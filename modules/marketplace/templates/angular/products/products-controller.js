
(function() {
    'use strict';

    angular
        .module('products')
        .controller('ProductsController',['$scope', '$rootScope', 'api', ProductsController]);
    /**
     *
     * @param $scope
     * @param $rootScope
     * @constructor
     */
    function ProductsController($scope, $rootScope, api){

	    //$scope.$on('load-products', function(e) {
		    //$scope.$emit("pingBack", $scope.get());

		    let Products = api.GetProducts();

		    Products.get().$promise.then(function (data) {

			    $scope.posts = data.posts;

		    }, function (error) {
			    console.log(':products:error', error);
		    });

	    //});

	}

})();