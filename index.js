var form;


$("button").click(function() {
  form = $(".input-field").val();
  if (form != "") {
    console.log(form);
    //spin();
    rotate(0);

    $("ul").append("<li>" + form + "</li>");
  }

  $(".input-field").val("");


});

$(".reset").click(function(){
  $("li").remove();
  $(".input-field").val("");
});

// function spin() {
//
//   $("button").addClass("rotate1");
//
//   setTimeout(function() {
//     $("button").removeClass("rotate1");
//   }, 300);
//
// $(document).ready(function() {
//
//   setTimeout(function() {
//     $("button").addClass("rotate2");
//   }, 300);
// });
//
// $(document).ready(function() {
//   setTimeout(function() {
//     $("button").removeClass("rotate2");
//   }, 300);
//
// });
// }

function rotate(degree) {

  // For webkit browsers: e.g. Chrome
  $("button").css({
    WebkitTransform: 'rotate(' + degree + 'deg)'
  });
  // For Mozilla browser: e.g. Firefox
  $("button").css({
    '-moz-transform': 'rotate(' + degree + 'deg)'
  });

  degree=degree+5;

  // Animate rotation with a recursive call
  setTimeout(function() {
    if(degree<=360){
    rotate(degree);}
  }, 0.5);
}
