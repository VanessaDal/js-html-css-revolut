// creare l’header come da screeshot allegato.
// Ogni voce di menù avrà un suo dropdown menù che viene fuori al click.

$(document).ready(function(){
  // $("li.dropitem").click(function () {
  //   $(".dropdown").toggleClass("show");
  // });

  $(".dropitem").click(function () {

    $(this).children(".dropdown").toggleClass("show");
  






  });

});