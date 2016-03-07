
(function() {
    'use strict';

    angular
        .module('partners')
        .controller('PartnersController',['$scope', '$rootScope', 'api', '$filter', PartnersController]);
    /**
     *
     * @param $scope
     * @param $rootScope
     * @constructor
     */
    function PartnersController($scope, $rootScope, api, $filter){

        //$scope.$on('load-partners', function(e) {
            //$scope.$emit("pingBack", $scope.get());

        $scope.action = 'index';

        $scope.partialUrl = '';

        $scope.partners = [];

        $scope.activePartner = false;

        let Partners = api.GetPartners();
        
        $scope.switchAction = function (action, post_id) {

            if (!angular.isDefined(action))
                action = 'index';

            $scope.action = action;

            if (angular.isDefined(post_id) && angular.isNumber(post_id)) {
                var activePartner = $filter('filter')($scope.partners, {partner_id: post_id})[0].partner_id;
            }

            init(activePartner);

            $scope.partialUrl = api.domain + '/angular/partners/views/' + $scope.action + '.html';

        }

        $scope.submit = function (action) {
            Partners.update({'partner_id' : $scope.partners.partner_id}, $scope.partners).$promise.then(function (data) {

            }, function (error) {
                console.log(':partners:error', error);
            });
        }

        function init(value) {

            var params = false;
            if(angular.isDefined(value) && angular.isNumber(value))
                params = {'partner_id' : value};

            Partners.get(params).$promise.then(function (data) {

                $scope.partners = data.partners;

            }, function (error) {
                console.log(':partners:error', error);
            });
        }

        //});
	}

})();