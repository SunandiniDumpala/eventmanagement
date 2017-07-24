angular.module("events").controller("viewEventCtrl",["$log","$scope","$firebaseArray","$state","$cookieStore","$uibModal",function($log,$scope,$firebaseArray,$state,$cookieStore,$uibModal){
	
	$scope.openAddEventPopup=function(){
	var popupOpen=$uibModal.open({
	animation:true,
	templateUrl:"templates/add.html",
	controller:"addEventCtrl",
	size:"xs",
		resolve:{eventDataIndual:$scope.fm,
				 tittles:{
					 mainTitle:"create Event ",
					 btnTitle:"Register"
				 } }
	}); // open popup
	
	popupOpen.result.then(function(){ },function(){});
	}
		
		// edit pop
		$scope.openEditEventPopup=function(eventData){
			
		
	var popupEditOpen=$uibModal.open({
	animation:true,
	templateUrl:"templates/add.html",
	controller:"addEventCtrl",
	size:"xs",
		resolve:{eventDataIndual:eventData,tittles:{
					 mainTitle:"Update Event ",
					 btnTitle:"Update",
				 }}
		
	}); // open popup
	

	popupEditOpen.result.then(function(){ },function(){});
	

		}
	
	var ref = new Firebase("https://fir-reference-e9032.firebaseio.com/");
	var list = $firebaseArray(ref);
	$scope.deleteEvent=function(item){
		$log.log(list[0]);
		$log.log(item.$id);
		list.$remove(list.$getRecord(item.$id)).then(function(ref) {
  	
		}, function(error) {
  				console.log("Error:", error);
});
		/*ref.remove(function(error){     //removes all the records inserted so far
  //do stuff after removal
});*/
	} 
}]);