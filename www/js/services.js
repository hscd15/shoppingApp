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
        service.find = function (whatToSearch, lat, long) {
            switch (whatToSearch) {
            case "location":
                break;
            case b:
                break;
            case c:
                break;
            }
        };

        service.showStores = function (lat, long) {
            return $http.get('http://api.bestbuy.com/v1/stores(area(' + lat + ',' + long + ',1000))?format=json&show=storeId,name,distance&apiKey=dvpzqgkzkgj35t4emg6rngfe')
        };


        service.findItems = function (description) {
            return $http.get('http://api.bestbuy.com/v1/products(longDescription=' + description + ')?show=sku,name&pageSize=15&page=5&apiKey=dvpzqgkzkgj35t4emg6rngfe&format=json')
        };
        return service;

        //http://api.bestbuy.com/v1/products(longDescription=iPhone*|sku=7619002)?show=sku,name&pageSize=15&page=5&apiKey=YourAPIKey&format=json
    });