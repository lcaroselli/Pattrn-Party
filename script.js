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
