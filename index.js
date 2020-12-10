$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
     if (startchange.length){
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > 600) {
           $(".navbar").css('background-color', '#0F1008');
        } else {
           $('.navbar').css('background-color', 'transparent');
        }
    });
     }
 });

