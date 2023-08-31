function showSlide(){
    $('.x').show();
    $('.nav_menu_list').fadeIn();
    $('.nav_menu_button').hide();
    $('.bars').hide();
}

function hideSlide(){
    $('.x').hide();
    $('.nav_menu_list').fadeOut();
    $('.nav_menu_button').show();
    $('.bars').show();
}

$('.bars').bind("click",showSlide);
$('.x').bind("click",hideSlide);
