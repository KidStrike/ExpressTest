
(function(){
    'use strict';

    angular.module('api')
        .factory('api', api);

    function api($resource){

        var service = {
            // domain: 'http://localhost:8000',
            domain: document.location.protocol + '//' + document.domain.toLowerCase() + ':' + document.location.port +'/marketplace',
            GetProducts : GetProducts,
            GetPartners : GetPartners
        };

        function GetPartners() {
            //console.log(':api:load:');
            return $resource(service.domain+'/partners/:partner_id', {}, {
                'get' : {   method : "GET", 
                            isArray : false
                },
                'update' : {   method : "PUT",
                }
            });
        }

        function GetProducts() {
            //console.log(':api:load:');
            return $resource(service.domain+'/products', {}, {
                'get' : {   method : "GET",
                    isArray : false
                }
            });
        }

        return service;
    }

})();