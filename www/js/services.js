angular.module('starter.services', [])
    .factory('getInfo', function ($cordovaGeolocation, BestBuy) {
        var service = {};
        service.getCurrentLocation = function ($scope) {
            var posOptions = {
                enableHighAccuracy: false
            };
            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function (position) {
                    var lat = position.coords.latitude
                    var long = position.coords.longitude

                    var promise = BestBuy.showStores(lat, long);
                    promise.then(function (response) {

                        $scope.stores = response.data.stores;
                        console.log(response.data)
                    }, function (response) {
                        
                        console.log(response);
                    });
                }, function (err) {
                    // error
                });
        };
        return service;
    })
    .factory('BestBuy', function ($http) {
        var service = {};
        service.showStores = function (lat, long) {
            return $http.get('http://api.bestbuy.com/v1/stores(area(' + lat + ',' + long + ',1000))?format=json&show=storeId,name,distance&apiKey=dvpzqgkzkgj35t4emg6rngfe')
        };
        return service;
    });