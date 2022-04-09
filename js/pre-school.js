// Hide and show btn in gallery and aim


// on the first page aim should be there


// $(document).ready(function(){

//     $("#aimBtn").click( function(){
//         $("#Gallery").hide();
//         $("Aim").show();
//     });

//     $("#galleryBtn").click( function(){
//         $("Gallery").show();
//         $("#Aim").hide();
       
//     });
// })


//________________________________ACTIVE-BUTTON _________________________________________________________


// $(document).ready(function(){
//     $('.nav-link').on('click', function () {
//         alert(1)
//       //Removing active class from all the 'li'
//       $('.nav-link').removeClass('active');
  
//         //Adding active class on clicked LI
//         $(this).addClass('active');
//     })
//   })
  

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


     $("#scroll-btn").on('click', function(){
        $(window).scrollTop(0)
     })
    }

    scrollUp()

  });
