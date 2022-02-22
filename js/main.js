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

//   <ul class="social-medias d-flex justify-content-center">
//   <li><a href=""><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
//   <li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
//   <li><a href=""><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
// </ul>