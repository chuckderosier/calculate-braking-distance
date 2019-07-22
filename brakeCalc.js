var app = angular.module('brakeCalc', [])
app.controller('brakeCalc', function CalculatorCtrl($scope) {
    $scope.yourSpeed = 70;
    $scope.speedLimit = 65;
    $scope.travelDistance = 0;
    $scope.user = {};
    $scope.reactTime = [{
        title: "Sharp",
        value: 1
    },
    {
        title: "Normal",
        value: 1.5
    },
    {
        title: "Tired",
        value: 2
    },
    {
        title: "Impaired",
        value: 2.5
    }];
    $scope.roadConditions = [{
        title: "Dry",
        value: 1
    },
    {
        title: "Wet",
        value: 2
    },
    {
        title: "Raining",
        value: 3
    },
    {
        title: "Snowing",
        value: 4
    },
    {
        title: "Iced Over",
        value: 5
    }];
    $scope.roadGrade = [{
        title: "Steep Up Hill",
        value: .6
    },
    {
        title: "Uphill",
        value: .4
    },
    {
        title: "Slight Uphill",
        value: .2
    },
    {
        title: "Flat",
        value: 0
    },
    {
        title: "Slight Downhill",
        value: -.2
    },
    {
        title: "Downhill",
        value: -.4
    },
    {
        title: "Steep Downhill",
        value: -.6
    }];
});
