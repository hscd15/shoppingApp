//(function run() {
    var object = {
        ajaxCall: function (x) {
            return console.log(x)
        },
        factory: {}
    }

    object.ajaxCall(25);
//}());

angular.module('starter.services', [])
    .factory('ajaxCall', function ($cordovaGeolocation, BestBuy) {
        var service = {};
        service.getLocation = function () {}
        var posOptions = {
            enableHighAccuracy: false
        };
        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function (position) {
                var lat = position.coords.latitude
                var long = position.coords.longitude
                    //console.log("lat" + lat + "long" + long)
                BestBuy.findStore(lat, long);
            }, function (err) {
                // error
            });
        return service;
    })