angular.module('starter.controllers', [])
    .controller('LogCtrl', function ($scope) {})
    .controller('StoreCtrl', function ($scope, getInfo) {
        $scope.list = [];
        getInfo.getCurrentLocation($scope.list);
    })
    .controller('ItemCtrl', function () {})
    .controller('LoginCtrl', function ($scope, $cordovaOauth) {
        $scope.facebookLogin = function () {
            $cordovaOauth.facebook("936078046479824", ["email"]).then(function (result) {
                // results
            }, function (error) {
                // error
                console.log("Error -> " + error);
            });
        }
    });