// < !--侧边栏，下拉菜单-- >
$('#menu dt').on('click', function () {
  $(this).addClass('cur').siblings('dt').removeClass('cur');
  if ($(this).next('dd').is(':visible')) {
    $(this).next('dd').slideUp();
  $(this).find('i').attr('class', 'fa fa-angle-down fa-fw');
  } else {
    $(this).next('dd').slideDown().siblings('dd').slideUp();
    $(this).find('i').attr('class', 'fa fa-angle-up fa-fw');
    $(this).siblings('dt').find('i').attr('class', 'fa fa-angle-down fa-fw');
  }
})

// <!--选择 幼儿园-- >
$('.school').hover(function () {
  /* Stuff to do when the mouse enters the element */
  $('#school_List').show();
}, function () {
  /* Stuff to do when the mouse leaves the element */
  $('#school_List').hide();
});

// <!--导航栏 用户登录-- >
$('.user').on("click", function (e) {
  $('.userList').toggle();
  e.stopPropagation();
  $(document).on("click", function () {
    $('.userList').hide();
  });
});