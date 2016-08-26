/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var app = angular.module('angularIngreso', []);//mvc module vision controller, con bindfing se modifica automaticamente en la misma pagina sin refrescar.


app.controller('controlPinturas', function($scope, $http) {//cuando se dispara la funcion automaticamente es referenciado al js y html
   $scope.temp=0;
   $scope.Resultado="";

	$scope.FahrenheitCentigrados=function(){

		var conversionFaC = ($scope.temp - 32) / 1.8;

		$scope.Resultado= $scope.temp + "ºF son " + conversionFaC + "ºC";
	}

	$scope.CentigradosFahrenheit=function(){

		var conversionCaF = $scope.temp * 1.8 + 32;

		$scope.Resultado= $scope.temp + "ºC son " + conversionCaF + "ºF";
	}

});
