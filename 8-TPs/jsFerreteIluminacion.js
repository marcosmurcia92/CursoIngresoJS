/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var app = angular.module('angularIngreso', []);//mvc module vision controller, con bindfing se modifica automaticamente en la misma pagina sin refrescar.


app.controller('controlIluminacion', function($scope, $http) {//cuando se dispara la funcion automaticamente es referenciado al js y html
   $scope.cantCompradas=0;
   $scope.marca="ArgentinaLuz";
   $scope.precioDescuento="";
   $scope.alerta="";

   $scope.CalcularPrecio=function(){

	var precioFinal = $scope.cantCompradas * 35;

 	if($scope.cantCompradas >= 6){
 		precioFinal *= 0.5;
 	}else if($scope.cantCompradas == 5){
 		if($scope.marca == "ArgentinaLuz"){
 			precioFinal *= 0.6;
 		}else{
 			precioFinal *= 0.7;
 		}
 	}else if($scope.cantCompradas == 4){
 		if($scope.marca == "ArgentinaLuz" || $scope.marca == "FelipeLamparas"){
 			precioFinal *= 0.75;
 		}else{
 			precioFinal *= 0.8;
 		}
 	}else if($scope.cantCompradas == 3){
 		if($scope.marca == "ArgentinaLuz"){
 			precioFinal *= 0.85;
 		}else if($scope.marca == "FelipeLamparas"){
 			precioFinal *= 0.9;
 		}else{
 			precioFinal *= 0.95;
 		}
 	}

 	if(precioFinal > 120){
 		$scope.alerta="Usted pagó " + (precioFinal * 0.1) + " de IIBB.";
 		precioFinal *= 1.1;
 	}

 	$scope.precioDescuento = "$" + precioFinal;
	}

});
