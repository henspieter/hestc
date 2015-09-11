/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
    
    //document.getElementById("mail_status").hide();
    $("#mail_status").hide();
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            
            var top_of_object = $(this).offset().top+100;
            console.log('top:'+top_of_object);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            console.log('bottom:'+bottom_of_window);
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > top_of_object ){
                
                $(this).animate(
                {
                    opacity:'1'
                },
                1000,
                'swing');
                    
            }
            
        }); 
    
    });
    
});

function sendmail(){
    
    // te verwijderen als mail server werkt.
    $(this).attr('href', 'mailto:me@domain.com?subject=hello');
    alert();
    document.getElementById("sendform").style.display = "none";
    document.getElementById("contact_tekst").style.display = "none";
    //document.getElementById("mail_status").style.display = "block";
    
    //TODO: fout oplossen
    messsage = "message";
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("mail_status").innerHTML = xmlhttp.responseText+"error";
        }
    }
    xmlhttp.open("GET","sendmail?message="+message,true);
    xmlhttp.send();
    
    $("#mail_status").show(1000);
    
    
    
}