var app = angular.module('brakeCalc', [])
app.controller('brakeCalcCtrl', function CalculatorCtrl($scope) {
    $scope.yourSpeed = 70;
    $scope.speedLimit = 65;
    $scope.travelDistance = 0;
    $scope.user = {};
    $scope.reactTime = [{
        title: "Sharp",
        adjustment: 1
    },
    {
        title: "Normal",
        adjustment: 1.5
    },
    {
        title: "Tired",
        adjustment: 2
    },
    {
        title: "Impaired",
        adjustment: 2.5
    }];
    $scope.roadConditions = [{
        title: "Dry",
        adjustment: 1
    },
    {
        title: "Wet",
        adjustment: 2
    },
    {
        title: "Raining",
        adjustment: 3
    },
    {
        title: "Snowing",
        adjustment: 4
    },
    {
        title: "Iced Over",
        adjustment: 5
    }];
    $scope.roadGrade = [{
        title: "Steep Up Hill",
        adjustment: .6
    },
    {
        title: "Uphill",
        adjustment: .4
    },
    {
        title: "Slight Uphill",
        adjustment: .2
    },
    {
        title: "Flat",
        adjustment: 0
    },
    {
        title: "Slight Downhill",
        adjustment: -.2
    },
    {
        title: "Downhill",
        adjustment: -.4
    },
    {
        title: "Steep Downhill",
        adjustment: -.6
    }];
});
