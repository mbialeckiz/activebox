$(function(){
  var jumboOffSet = $('#jumbo').offset().top,
      featuresOffSet = $('#features').offset().top;
  
    $(document).scroll(function(){
      if ($(document).scrollTop() >= jumboOffSet && $(document).scrollTop() < featuresOffSet){
         $('.navbar').css('background', 'none');
         $('.navbar').css('transition', '.3s');
       } else if (($(document).scrollTop() >= featuresOffSet)){
         $('.navbar').css('background', 'rgba(49, 52, 84, 1)');
         $('.navbar').css('transition', '.3s');
       }
    });
  });
