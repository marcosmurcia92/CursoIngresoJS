/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var app = angular.module('angularIngreso', []);//mvc module vision controller, con bindfing se modifica automaticamente en la misma pagina sin refrescar.


app.controller('controlConstruccion', function($scope, $http) {//cuando se dispara la funcion automaticamente es referenciado al js y html
  $scope.largo=0;
   $scope.ancho=0;
   $scope.radio=0;
   $scope.resultadofinal=0;

   $scope.Rectangulo=function(){

	var resultado=$scope.largo*$scope.ancho;
	var resultado2=resultado*3;
	$scope.resultadofinal = "La cantidad de alambre a usar es: "+resultado2;
	}

	$scope.Circulo=function(){

	var perimetroAlambre = Math.PI * (2*$scope.radio);

	$scope.resultadofinal = "Se necesitan " + perimetroAlambre + "mts de alambre para cercar las dimensiones circulares ingresadas.";
	}


$scope.Materiales=function(){

	var area = $scope.largo * $scope.ancho;

	var cemento = area * 2;
	var cal = area * 3;

	$scope.resultadofinal = "Para realizar el contrapiso se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.";
	}

});

