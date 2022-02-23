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
