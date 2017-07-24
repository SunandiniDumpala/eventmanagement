angular.module("events",['ui.router','firebase','ngCookies','ui.bootstrap']);
angular.module("events").config(function($stateProvider,$urlRouterProvider)
							   {
								$urlRouterProvider.otherwise("/login");
								$stateProvider.state("login",{
								url:"/login",
								    templateUrl:"templates/loginRegister.html",
									//template:""
									controller:"loginRegisterCtrl",
									controlerAs:"loginRegister"
								})
								.state("register",{
								url:"/register",
								    templateUrl:"templates/register.html",
									//template:""
									controller:"loginRegisterCtrl",
									controlerAs:"loginRegister"
								})
								.state("myAccount",{
								url:"/myaccount",
								    templateUrl:"templates/myAccount.html",
									controller:"myAccountCtrl",
									controlerAs:"myCtrl"
								})
								
	                         .state("logout",{
								url:"/logout",
								    templateUrl:"templates/logout.html",
									controller:"logoutCtrl"
								})
								
								.state("myAccount.events",{
								url:"/events",
								    views:{ "inner" :{templateUrl:"templates/events.html",
									  controller:"viewEventCtrl",
									   controlerAs:"eventCtrl"}}
								})


								
								});