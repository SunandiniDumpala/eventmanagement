angular.module("events").controller("logoutCtrl",["$state","$cookieStore",function($state,$cookieStore){
	
	$cookieStore.remove('username');
	$state.go("login");
	
}]);