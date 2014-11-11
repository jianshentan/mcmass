var PAGE = "";

$( document ).ready( function() {
    var nav = $( "nav" ),
        navPos = nav.position().top;

    var route = window.location.pathname.split('/');
    route = route[ route.length-1 ];
    switch ( route ) {
        case "":
        case "index": 
            PAGE = "HOME";
            break;
        case "faq": 
            PAGE = "FAQ";
            nav.addClass( "stick" );
            $( "body" ).css("margin-top", "80px");
            $(".faq .section").each( function() {
                $( this ).height( $( this ).find( ".text" ).height() ); 
            });
        default:
            break;
    }

    // stick
    $( window ).scroll( function() {
        if( PAGE == "HOME" ) {
            if( $( this ).scrollTop() > navPos ) {
                nav.addClass( "stick" );
            } else {
                nav.removeClass( "stick" );
            }
        }

        if( $( this ).scrollTop() > navPos + nav.height() ){
            nav.css( "background-color", "white" );
        } else {
            nav.css( "background-color", "red" );
        }
    });

    // home button
    $( ".home" ).click( function() {
        if( PAGE == "HOME" ) {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        } else {
            window.location.href="/";
        }
    });
    $( ".faq" ).click( function() {
        if( PAGE != "faq" ) {
            window.location.href= "/faq";
        }
    });

    //social buttons
    $( ".donate" ).click( function() { window.location.href="" });
    $( ".tumblr" ).click( function() {
        window.open( "http://www.tumblr.com/share", "_blank");
    });
    $( ".facebook" ).click( function() {
        window.open( "https://www.facebook.com/sharer.php?u=www.mcmass.com", "_blank");
    });
    $( ".twitter" ).click( function() {
        createTweetPopup("PRAY DIFFERENT. Support The McMass Project");
    });

    // email
    $( ".form .submit" ).click( emailSubmit );
    $( document ).keypress( function(e) {
        if( e.which == 13 ) {
            if( $( ".form input" ).is( ":focus" ) ) {
                emailSubmit();
            }
        }
    });

    function emailSubmit() {
        var textbox = $( ".form input" );
        var email = textbox.val();
        if( validateEmail(email) ) {
            // submit
            $.get( "subscribe", { email: email } ).done( function( data ) {
                $( ".success" ).slideDown( "slow", function(){} );
            });
        } else {
            // invalid
            textbox.attr( "placeholder", "INVALID EMAIL" );
            textbox.val( "" );
        }
    };

});

function createTweetPopup(text) {
        var width  = 575,
            height = 400,
            left   = ($(window).width()  - width)  / 2,
            top    = ($(window).height() - height) / 2,
            url    = this.href,
            opts   = 'status=1' +
                     ',width='  + width  +
                     ',height=' + height +
                     ',top='    + top    +
                     ',left='   + left;
            
            var twitterMessage = ""; 
            var words = text.split(" ");
            for (var i=0; i<words.length; i++) 
                twitterMessage += words[i]+"%20";
            console.log(twitterMessage);

            window.open("http://twitter.com/share?text="+twitterMessage+"%20@feastforjesus", 'twitter', opts);
};

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 
