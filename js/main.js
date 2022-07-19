//_____________________________________WHAT WE WANT ON SITE_______________________________//

/*
1) Navigation bar
2) Education qoutes section 1
3) 2nd section meet our team 
5)syllabus of IX and X  and XI and XII
6) section of confuse about your carrier
7)About IT carriers 
8) Admission starts on

*/

//_____________________________________Slider_______________________________//
$('.slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


//________________________________ACTIVE-BUTTON _________________________________________________________


// $(document).ready(function(){
//   $('.nav-link').on('click', function () {
//       alert(1)
//     //Removing active class from all the 'li'
//     $('.nav-link').removeClass('active');

//       //Adding active class on clicked LI
//       $(this).addClass('active');
//   })
// })



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


//________________________________READ MORE-BUTTON _________________________________________________________

$(document).ready(function () {

  function readMore() {
    $(".Read-morebtn").on("click", function () {
      $(this).parent().toggleClass("showContent");

      //Shorthand if-else statement
      var replaceText = $(this).parent().hasClass("showContent") ? "Read Less" : "Read More";
      $(this).text(replaceText);

    })
  }

  readMore()

});


//______________________________________Data-Bases________________________________________________________

//______________________________________HeroData-Base________________________________________________________

function hero() {


  let itemContent = [{
    imgName: 'hero-gif'

  },
  ]
  let itemWrapper = $(".content-wrapper");
  $.each(itemContent, function (index, item) {
    itemWrapper.append(`
      <div class="col-lg-12 my-5">
        <div class="content text-white">
          <img src="videos/${item.imgName}.gif" class="img-fluid img-rounded">
        </div>
       </div>
    `)
  })

}

//______________________________________ StaffData-Base________________________________________________________

function staff() {

  let title = $('#team-title');
  let data = [{
    title: "#TeamSarvpratham"
  }]

  title.append(data[0].title)

  let itemContent = [
    {
      title: 'Shobhit Sharma',
      imgName: 'profile_shobhit',
    },
    {
      title: 'Mayank Sharma',
      imgName: 'profile_manish',
    },
    {
      title: 'Rakesh Sir',
      imgName: 'profile_rakesh',
    },

  ]

  let itemWrapper = $("#content-wrapper");
  $.each(itemContent, function (index, item) {
    itemWrapper.append(`
        <div class="col-md-12 col-lg-4 col-xl-4">
            <div class="card border-0">
              <div class="card-img">
                  <img src="images/${item.imgName}.jpg" class=" mx-3 ">
              </div>
            </div>
            <div class="content text-center my-3">
              <h2>${item.title}</h2>
            </div>
          </div>
      `)
  })
}

//______________________________________QueriesData-Base________________________________________________________

// function queries(){
//     let title = $('#queries-title');

//     let data =[{
//       title:"Queries"
//     }]

//     title.append(data[0].title)

//     let itemContent =[
//       {
//         imgName :'',
//         title: '',
          
//       },
//       {
//         imgName :'',
//         title: '',
          
//       },
//       {
//         imgName :'',
//         title: '',
          
//       }
//     ]

//     let itemWrapper = $("content-wrapper");
//     $.each(itemContent , function ( index,item){
//       itemWrapper.append(`
      
      
//       `)
//     })

// }

//______________________________________Calling back Functions________________________________________________________

hero();
staff();




