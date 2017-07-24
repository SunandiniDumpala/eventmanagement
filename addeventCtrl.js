angular.module("events").controller("addEventCtrl",["$log","$scope","$uibModalInstance","$firebaseArray","$cookieStore","eventDataIndual","tittles",function($log,$scope,$uibModalInstance,$firebaseArray,$cookieStore,eventDataIndual,tittles){
	$scope.fm=eventDataIndual;
	$scope.mainTitle=tittles.mainTitle;
	$scope.btnTitle=tittles.btnTitle;
	//$scope.fm.eventName=eventDataIndual.eventName;
	$scope.username=$cookieStore.get('username');
	var ref = new Firebase("https://fir-reference-e9032.firebaseio.com/");
	var list = $firebaseArray(ref);


	$scope.ok=function(type){


		var data=$scope.fm;
		if(type=="Register"){
		var response=list.$add({
			username:$scope.username,
		eventAddress :data.eventAddress,
		eventDate :data.eventDate,
		eventLocation:data.eventLocation,
		eventName:data.eventName,
		phone:data.phone

	});
	response.then(function(){
			$log.log("success");
			$uibModalInstance.close();

		},function(){
			$log.log("fail");

		});
			} // register
		if(type=="Update"){ // update
			var id = data.$id;
			var event = list.$getRecord(id);
			event.eventAddress =data.eventAddress;
			event.eventDate =data.eventDate;
			event.eventLocation=data.eventLocation;
			event.eventName=data.eventName;
			event.phone=data.phone;
			list.$save(event).then(function(){
			$log.log("success");
			$uibModalInstance.close();
		},function(err){
			$log.log("fail");
		});
		/*var saveData=list.$save(data);
			saveData.then(function(){
				$log.log("successsed fully updated");
			$uibModalInstance.close();
			},
						  function(){
				$log.log("fail");}
						 ); */
		}


	}

	$scope.cancel=function(){
		$uibModalInstance.dismiss();
	}

}]);
