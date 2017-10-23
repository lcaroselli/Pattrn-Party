$('.tab').on('click', function() {
  $('.tab').removeClass('selected-tab');
  $('.tab').addClass('unselected-tab');
  $(this).addClass('selected-tab');
})

// //Mobile
$('.plus').on('click', (e) => {
  $(e.target).parent().siblings('.mobile-section').removeClass('hidden-info');
  $(e.target).parent().siblings('.mobile-section').addClass('show-info');
  $(e.target).siblings('.minus').addClass('show-info');
});

$('.minus').on('click', (e) => {
  $(e.target).parent().siblings('.mobile-section').removeClass('show-info');
  $(e.target).parent().siblings('.mobile-section').addClass('hidden-info');
  $(e.target).removeClass('show-info');
});
