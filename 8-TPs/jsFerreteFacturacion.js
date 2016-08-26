var app = angular.module('angularIngreso', []);//mvc module vision controller, con bindfing se modifica automaticamente en la misma pagina sin refrescar.


app.controller('controlFacturacion', function($scope, $http) {//cuando se dispara la funcion automaticamente es referenciado al js y html
  $scope.PrecioUno=0;
   $scope.PrecioDos=0;
   $scope.PrecioTres=0;
   $scope.Resultado="";

   $scope.Sumar=function(){

	var resultado=parseInt($scope.PrecioUno)+parseInt($scope.PrecioDos)+parseInt($scope.PrecioTres);
	$scope.Resultado = "La suma da "+resultado;
	}

	$scope.Promedio=function(){

	var resultado=(parseInt($scope.PrecioUno)+parseInt($scope.PrecioDos)+parseInt($scope.PrecioTres))/3;
	$scope.Resultado = "El promedio es "+resultado;
	}


$scope.PrecioFinal=function(){

	var resultado=parseInt($scope.PrecioUno)+parseInt($scope.PrecioDos)+parseInt($scope.PrecioTres);
	var preciofinal=resultado*0.21+resultado;
	$scope.Resultado = "El precio final es "+preciofinal;
	}

});
