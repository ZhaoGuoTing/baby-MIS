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

//  <!-- 选项卡  内容区域的 -- >
$('.el_box ul li.tabPanel_Item').eq(0).show(); // 第一个面板 显示
$('.el_box ol li').on('click', function () {
  // 点击时、添加cur样式
  $(this).addClass('cur').siblings().removeClass('cur');
  // 点击时、显示当前对应面板
  $('.el_box ul li.tabPanel_Item').eq($(this).index()).show().siblings().hide();
})


// <!-- 新增宝贝、批量调班、操作编辑 Modal弹窗 Start -->
el_Modal($('#Modal_AddPersonnel'), $('.Modal_AddWrapMask'), $('.Modal_CloseBtn'))
el_Modal($('#Modal_BatchSwitched'), $('.Modal_BatchSwitchedMask'), $('.Modal_CloseBtn'))
el_Modal($('#Modal_EditBaby'), $('.Modal_EditBabyMask'), $('.Modal_CloseBtn'))

  function el_Modal(Modal, Mask, CloseBtn) {
    Modal.on('click', function () {
      Mask.show();
    })
    CloseBtn.on('click', function () {
      Mask.hide();
    })
  }
// <!-- 新增宝贝、批量调班、操作编辑 Modal弹窗 End -->


// <!-- 宝贝管理——在园宝贝 input 下拉框 苹果一班 -->
  $('.el_select').on("click", function (e) {
    $(this).siblings('.el_downMenu').stop().slideToggle(100);
    e.stopPropagation();
    $(document).on("click", function () {
      $('.el_downMenu').slideUp(100);
    });
  });

// <!-- 宝贝管理——在园宝贝 input 下拉框 和宝贝关系 -->
  $('.BabyInput_Wrap input').on('click', function (e) {
    $(this).siblings('.Baby_upMenu').stop().slideToggle(100);
    e.stopPropagation();
    $(document).on("click", function () {
      $('.Baby_upMenu').slideUp(100);
    });
  })

// <!-- 校务管理-发布通知-通知类型和发布范围的选项卡的选项卡 -->
  el_Tab($('.NotificationType_ControlItem'))
  el_Tab($('.Release_ControlItem'))
  el_Tab($('.APP_ReleasePeople_ControlItem'))
  el_Tab($('.template_Right_Item'))
  el_Tab($('.template_Left_Item'))
  el_Tab($('.swiper-slide'))

  function el_Tab(Control) {
    Control.on('click', function () {
      $(this).addClass('cur').siblings().removeClass('cur');
      // Panel.eq($(this).index()).show().siblings().hide();
    })
  }

