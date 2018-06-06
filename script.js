// Accordion Tabs
$('.tab').on('click', function() {
  $('.tab').removeClass('active');
  $('.accordion-content').removeClass('active-tab');
  $('.tab').addClass('nonactive');

  $(this).removeClass('nonactive');
  $(this).addClass('active');
  $('.tab span').text('+');
  $(this).find('span').text('-');
  $(this).next().addClass('active-tab');
})


// Navbar Menu
/*$('.menu-btn').on('click', function() {
  $('.nav-links-search').toggleClass('drop-down');
  $('nav').toggleClass('move-btn');
})*/
