


    $(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 585) {
                    $(".top_bar").addClass("whiteopacity");
                } else {
                    $(".top_bar").removeClass("whiteopacity");
                }
            });
        });

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0          // default
   }
)
wow.init();

$(window).scroll(function(){
    $(".content").css("opacity", 1 - $(window).scrollTop() / 350);
  });


$(function() {
  var menuVisible = false;
  $('#menuBtn').click(function() {
    if (menuVisible) {
      $('#myMenu').css({'display':'none'});

      menuVisible = false;
      return;
    }
    $('#myMenu').css({'display':'block'});
    $('#myMenu').addClass('.fade');
   
    menuVisible = true;
  });
  $('#close').click(function() {
    $('#myMenu').css({'display':'none'});
    
    
    menuVisible = false;
  });

      $('#myMenu').click(function() {
    $(this).css({'display':'none'});

     menuVisible = false;
  });
});

$('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


$(function( $ ){

            $.localScroll.defaults.axis = 'y';
            
            $.localScroll({
                target: 'html', 
                queue:true,
                duration:1000,
                hash:true,
                offset: -85,                
                onBefore:function( e, anchor, $target ){
                  
                },
                onAfter:function( anchor, settings ){
                    
                }
            });
        });


