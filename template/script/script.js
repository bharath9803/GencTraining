$(document).ready(function(){
    console.log("Document is ready");
    $('#userLoginBtn').click(function() {
        console.log("User Login Button Clicked");
        $('#userLoginForm').show();
        $('#adminLoginForm').hide();
    });
    $('#adminLoginBtn').click(function() {
        console.log("Admin Login Button Clicked");
        $('#adminLoginForm').show();
        $('#userLoginForm').hide();
    });
    $('#login-container').slideDown(1000); 
    $('#home').css({
        display: 'none', 
        opacity: 0 
    }).animate({
        opacity: 1,
        height: "toggle", 
        width: "toggle" 
    }, 2000,function(){
        

    });
    $('.navbar').fadeIn(4000);
});
