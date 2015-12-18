angular.module('starter.directives', [])
    .directive('storesNearMe', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/list.html',
        };
    });