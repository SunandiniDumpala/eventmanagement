angular.module("events").controller("myAccountCtrl",["$log","$scope","$firebaseArray","$state","$cookieStore",function($log,$scope,$firebaseArray,$state,$cookieStore){
	
	$scope.username=$cookieStore.get('username');
	
	
	var ref = new Firebase("https://fir-reference-e9032.firebaseio.com/");
	var list = $firebaseArray(ref);
	$scope.events=list;
	

	
	if($scope.username==null || $scope.username==''){ $state.go("login");}
	
}]);