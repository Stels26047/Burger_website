function showSlide(){
    $('.x').show();
    $('.nav_menu_list').fadeIn();
    $('.hero_list-title').hide();
    $('.nav_menu_button').hide();
    $('.bars').hide();
}

function hideSlide(){
    $('.x').hide();
    $('.nav_menu_list').fadeOut();
    $('.hero_list-title').show();
    $('.nav_menu_button').show();
    $('.bars').show();
}

$('.bars').bind("click",showSlide);
$('.x').bind("click",hideSlide);
