var app = angular.module('miniRouting');

app.controller('productsController', function($routeParams, productsService, $scope) {
	if ($routeParams.id === 'shoes') {
		$scope.productData = productsService.shoeData;
	} else if ($routeParams.id === 'socks') {
		$scope.productData = productsService.sockData;
	}
});