console.log('app.js was loaded.');
angular.module('App', [])
.controller('calc', ['$scope', function($scope){
    $scope.number = "0";
    $scope.firstNumber = 0;
    $scope.operator = "";
    $scope.operatorPressed = false;
    $scope.appendNumber = function(num){
        if($scope.operatorPressed){
            $scope.number = '';
            $scope.operatorPressed = false;
        }
        if ($scope.number == "0"){
            $scope.number = num;
        } else {
            $scope.number = $scope.number + num;
        }
    };
    $scope.clearNumber = function(){
        $scope.number = "0";
        $scope.firstNumber = 0;
    };

    $scope.evaluate = function(){
        $scope.number = doMath($scope.firstNumber, $scope.number, $scope.operator);
        $scope.operatorPressed = true;
        $scope.operator = '';
    };

    $scope.add = function(){
        if (!$scope.operator){
            console.log("storing operator");
            $scope.operator = "+";
            $scope.firstNumber = $scope.number;
        } else {
            $scope.number = doMath($scope.firstNumber, $scope.number, $scope.operator);
            $scope.firstNumber = $scope.number;
            $scope.operator = '';
        }
        $scope.operatorPressed = true;
    };
    $scope.minus = function(){
        if (!$scope.operator){
            console.log("storing operator");
            $scope.operator = "-";
            $scope.firstNumber = $scope.number;
            console.log($scope.number);
        } else {
            $scope.number = doMath($scope.firstNumber, $scope.number, $scope.operator);
            $scope.firstNumber = $scope.number;
            $scope.operator = '';
        }
        $scope.operatorPressed = true;
    };
    $scope.multi = function(){
        if (!$scope.operator){
            console.log("storing operator");
            $scope.operator = "*";
            $scope.firstNumber = $scope.number;
            console.log($scope.number);
        } else {
            $scope.number = doMath($scope.firstNumber, $scope.number, $scope.operator);
            $scope.firstNumber = $scope.number;
            $scope.operator = '';
        }
        $scope.operatorPressed = true;
    };
    $scope.div = function(){
        if (!$scope.operator){
            console.log("storing operator");
            $scope.operator = "/";
            $scope.firstNumber = $scope.number;
            console.log($scope.number);
        } else {
            $scope.number = doMath($scope.firstNumber, $scope.number, $scope.operator);
            $scope.firstNumber = $scope.number;
            $scope.operator = '';
        }
        $scope.operatorPressed = true;
    };
}]);

function doMath (num1, num2, op){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (op == "+"){
        return num1 + num2;
    } else if (op == "-"){
        return num1 - num2;
    } else if (op == "*"){
        return num1 * num2;
    } else if (op == "/"){
        if(num2 === 0){
            return "ERR: DIV 0";
        } else {
            return num1 / num2;
        }
    }
}
