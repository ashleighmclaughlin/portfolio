function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
          
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//smooth scroll to portfolio
$(document).ready(function(){
    $( "a.header-button-link" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 600);
    });
});

//smooth scroll to footer
$(document).ready(function(){
    $( "a.side-nav-footer" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
    });
});

//smooth scroll to about
$(document).ready(function(){
    $( "a.side-nav-about" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
    });
});