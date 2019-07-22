var app = angular.module('brakeCalc', [])
app.controller('brakeCalcCtrl', function CalculatorCtrl($scope) {
    $scope.yourSpeed = 70;
    $scope.speedLimit = 65;
    $scope.travelDistance = 0;
    $scope.user = {};
    $scope.reactTime = [{
        react: "Sharp",
        time: 1
    },
    {
        react: "Normal",
        time: 1.5
    },
    {
        react: "Tired",
        time: 2
    },
    {
        react: "Impaired",
        time: 2.5
    }];
    $scope.roadConditions = [{
        condition: "Dry",
        grip: 1
    },
    {
        condition: "Wet",
        grip: 2
    },
    {
        condition: "Raining",
        grip: 3
    },
    {
        condition: "Snowing",
        grip: 4
    },
    {
        condition: "Iced Over",
        grip: 5
    }];
    $scope.roadGrade = [{
        grade: "Steep Up Hill",
        degree: .6
    },
    {
        grade: "Uphill",
        degree: .4
    },
    {
        grade: "Slight Uphill",
        degree: .2
    },
    {
        grade: "Flat",
        degree: 0
    },
    {
        grade: "Slight Downhill",
        degree: -.2
    },
    {
        grade: "Downhill",
        degree: -.4
    },
    {
        grade: "Steep Downhill",
        degree: -.6
    }];
});
