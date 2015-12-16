angular.module('starter.controllers', [])
    .controller('DashCtrl', function ($scope) {})
    .controller('ChatsCtrl', function ($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };
    })
    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })
    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })
    .controller('LoginCtrls', function ($scope, $auth) {
        $scope.isAuthenticated = function () {
            return $auth.isAuthenticated();
        };

        $scope.authenticate = function (provider) {
            $auth.authenticate(provider)
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (response) {
                    console.log(response);
                })
        };

        $scope.logOut = function () {
            $auth.logout();
        }
    })
    .controller('LoginCtrl', function ($scope, $cordovaOauth) {
        $scope.facebookLogin = function () {
            $cordovaOauth.facebook("936078046479824", ["email"]).then(function (result) {
                // results
                console.log("Response Object -> " + JSON.stringify(result));
            }, function (error) {
                // error
                console.log("Error -> " + error);
            });
        }
    });