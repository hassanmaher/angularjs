var app = angular.module('myApp', [
	'myApp.services',
	'myApp.directives',
	'myApp.filters',
	'myApp.controllers'
	]);
function MyController($scope) {
	$scope.clock = new Date();
	var updateClock = function() {
		$scope.clock = new Date();
	};
	setInterval(function() {
		$scope.$apply(updateClock);
	}, 1000);
updateClock();
};