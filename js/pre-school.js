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

 //Get the button:
mybutton = document.getElementById("scroll-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$("#scroll-btn").on('click', function () {
  $(window).scrollTop(0)
})
  
