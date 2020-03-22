var $ = jQuery;
$(document).ready(function(){

$("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});
function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
 
    $.ajax({
        type: "POST",
        url: "f:/WEB/Project/assets/php/process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}
//Smooth Scroll
$("[data-scroll]").on("click", function(event){
	event.preventDefault();
	let elementId=$(this).data("scroll");
	let elementOffset=$(elementId).offset().top;	
$("html, body").animate({
	scrollTop:elementOffset
},1000);
});	


});