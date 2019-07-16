var app = angular.module('brakecalcapp')
app.controller('brakecalc', function CalculatorCtrl($scope) {
    $scope.yourSpeed = 70;
    $scope.speedLimit = 65;
    $scope.travelDistance = 0;
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
    }
];
    $scope.roadConditions = {
        dry: 1,
        wet: 2,
        raining: 3,
        snow: 4,
        icy: 5
    };
    $scope.roadGrade = {
        steepUphill: .6,
        uphill: .4,
        bitUphill: .2,
        flat: 0,
        bitDownhill: -.2,
        downhill: -.4,
        steepDownhill: -.6,
    };
});
