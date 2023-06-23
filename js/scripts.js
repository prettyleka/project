const counterUp = window.counterUp.default

const el = document.querySelectorAll( '.counter' )

el.forEach(element => {
    counterUp(element)
});


$(function() {
    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
    });
});

$(function() {
    $("#signupButton").click(function(){
        $("#signupModal").modal("show");
    });
});

$(function() {
    $("#contact-cat").click(function(){
        $("#telephoneModal-cat").modal("show");
    });
});
$(function() {
    $("#contact-cat1").click(function(){
        $("#telephoneModal-cat").modal("show");
    });
});
$(function() {
    $("#contact-cat2").click(function(){
        $("#telephoneModal-cat").modal("show");
    });
});
$(function() {
    $("#contact-dog").click(function(){
        $("#telephoneModal-dog").modal("show");
    });
});
$(function() {
    $("#contact-dog1").click(function(){
        $("#telephoneModal-dog").modal("show");
    });
});
$(function() {
    $("#contact-dog2").click(function(){
        $("#telephoneModal-dog").modal("show");
    });
});