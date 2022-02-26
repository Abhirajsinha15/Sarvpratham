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

//________________________________HERO-SECTION DATA_________________________________________________________

function hero() {
  let cont = $(".hero-theme");

  let data = [{
    imgName: "hero-gif",
  }]
  $.each(data, function (index, item) {
    $(cont).append(`
        <div class="col-lg-12 my-5 mx-sm-5">
            <div class="content text-white">
              <img src="videos/${item.imgName}.gif" class="img-fluid img-rounded">
            </div>
        </div>
      `)
  })
}

//________________________________STAFF-SECTION DATA_________________________________________________________


function staff(){
  let title = $(".staff-title")

  let data=[{
    title:"#Our Team"
  }]

  title.append(data[0].title);

  let itemContent = [
    {
      title:"Shobhit Sharma",
      imgName:"profile_shobhit",

    },
    {
      title:"Mayank Sharma",
      imgName:"profile",

    },
    {
      title:"Shobhit Sharma",
      imgName:"profile_shobhit",

    }
  ]

  let itemWrapper = $(".staff-wrapper") 
  $.each(itemContent , function( index, item){
      itemWrapper.append(`
      <div class="col-md-12 col-lg-4 col-xl-4">
        <div class="card border-0">
          <div class="card-img">
              <img src="images/${item.imgName}.jfif" class=" mx-5">
          </div>
        </div>
        <div class="content text-center my-3">
          <h2>${item.title}</h2>
        </div>
      </div>
      
      `)
  })
}


//________________________________QUERIES-SECTION DATA_________________________________________________________

function queries(){

  let title =$(".queries-title");

  let data=[{
    title:"Queries"
  }]

  title.append(data[0].title);
}

//----------------------------Calling function----------------------------------------------------

hero();
staff();
queries();