function showSlide(){
    $('.x').show();
    $('.nav_menu_list').fadeIn();
    $('.bars').hide();
}

function hideSlide(){
    $('.x').hide();
    $('.nav_menu_list').fadeOut();
    $('.bars').show();
}

$('.bars').bind("click",showSlide);
$('.x').bind("click",hideSlide);
