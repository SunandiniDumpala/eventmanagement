// Toggle Function
$('.toggle').click(function(){
  // Switches the Icon
  $(this).children('i').toggleClass('fa-pencil');
  // Switches the forms  
  $('.form').animate({
    height: "toggle",
    'padding-top': 'toggle',
    'padding-bottom': 'toggle',
    opacity: "toggle"
  }, "slow");
});
ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched

ng-touched ng-not-empty ng-dirty ng-valid-parse ng-valid ng-valid-required