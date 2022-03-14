//________________________________SCROLL-BUTTON _________________________________________________________

$(document).ready(function(){

    function scrollUp(){

      // $(window).scroll(function(event){
      //   if($(window).scrollTop() > 40){
      //       $("#scroll-btn").addClass("active")
      //   }
      //   else{
      //     $("#scroll-btn").hide()
      //   }
      // });


     $("#scroll-up").on('click', function(){
        $(window).scrollTop(0)
     })
    }

    scrollUp()

  });