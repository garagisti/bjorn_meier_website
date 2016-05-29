console.log("Query version is:", $().jquery);


// Carosel the Background
$(document).ready(function() {
 
  $("#owl-carosel1").owlCarousel({
    
    navigation : false, // Don't Show next and prev buttons
    autoPlay: 5000,
    singleItem: true
  });
    
});


// when the user clicks on a li, call function
$('li').click(showContent);

// When the user clicks on the View Projects button, scroll down smoothly
$('#button').click(scroll)

//function to scroll
function scroll(){
 
    $('#scroll-Point').ScrollTo();
}

//  function
function showContent()
{
    // add the class "Active" to the clicked li
    
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');   
    } else {
        $('.active').removeClass('active');
        $(this).addClass('active');
    }    
    
    //An Owl Carosel for each active window (probably not the best approach). 
    $("#owl-carosel2").owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });
    
        $("#owl-carosel3").owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });
    
        $("#owl-carosel4").owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });
    
            $("#owl-carosel5").owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });
    
            $("#owl-carosel6").owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });
    
            $("#owl-carosel7").owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });
                $("#owl-carosel8").owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });
    
            $("#owl-carosel9").owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });
    
            $("#owl-carosel10").owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });
                $("#owl-carosel11").owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });
}

    