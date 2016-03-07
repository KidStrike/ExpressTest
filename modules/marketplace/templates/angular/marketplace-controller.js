(function() {
    'use strict';

    angular.module('Marketplace')
    .controller('MarketplaceController', ['$scope', '$rootScope', MarketplaceController]);

	function MarketplaceController($scope, $rootScope) {
		$rootScope.insert_module = null;
		$scope.getPartners = getPartners;
		$scope.getProducts = getProducts;

		function getPartners(){
			$scope.insert_module = "Partners";
			//$rootScope.$broadcast ('load-partners');
		}
		function getProducts(){
			$scope.insert_module = "Products";
			//$rootScope.$broadcast ('load-products');
		}

		/*$scope.$on('pingBack', function(e,data) {
			$scope.msg = data;
		});*/

	}

})();