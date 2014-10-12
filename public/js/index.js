$( document ).ready( function() {
    // stick
    var nav = $( "nav" ),
        navPos = nav.position().top;

    $( window ).scroll( function() {
        if( $( this ).scrollTop() > navPos ) {
            nav.addClass( "stick" );
        } else {
            nav.removeClass( "stick" );
        }
            
    });

});
