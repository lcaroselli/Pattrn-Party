const resetTabs = () => {
  if($('.tab').hasClass('selected-tab')) {
    $('.tab').addClass('unselected-tab');
  };
  $('.tab').removeClass('selected-tab');
};

$('.tab-1').on('click', () => {
  resetTabs();
  $('.tab-1').addClass('selected-tab');
});

$('.tab-2').on('click', () => {
  resetTabs();
  $('.tab-2').addClass('selected-tab');
});

$('.tab-3').on('click', () => {
  resetTabs();
  $('.tab-3').addClass('selected-tab');
});

$('.tab-4').on('click', () => {
  resetTabs();
  $('.tab-4').addClass('selected-tab');
});


//Mobile
$('.tab-1-plus').on('click', () => {
  $('.mobile-1').removeClass('hidden-info')
  $('.mobile-1').addClass('show-info');
});

$('.tab-1-minus').on('click', () => {
  $('.mobile-1').removeClass('show-info')
  $('.mobile-1').addClass('hidden-info');
});

$('.tab-2-plus').on('click', () => {
  $('.mobile-2').removeClass('hidden-info')
  $('.mobile-2').addClass('show-info');
});

$('.tab-2-minus').on('click', () => {
  $('.mobile-2').removeClass('show-info')
  $('.mobile-2').addClass('hidden-info');
});

$('.tab-3-plus').on('click', () => {
  $('.mobile-3').removeClass('hidden-info')
  $('.mobile-3').addClass('show-info');
});

$('.tab-3-minus').on('click', () => {
  $('.mobile-3').removeClass('show-info')
  $('.mobile-3').addClass('hidden-info');
});

$('.tab-4-plus').on('click', () => {
  $('.mobile-4').removeClass('hidden-info')
  $('.mobile-4').addClass('show-info');
});

$('.tab-4-minus').on('click', () => {
  $('.mobile-4').removeClass('show-info')
  $('.mobile-4').addClass('hidden-info');
});
