/***电梯导航定位***/

function ElevatorNav(config) {
  var me = this;
  me.config = $.extend({
    floorClass: [], // 楼层的class名集合
    NavClass: null, // 电梯菜单的class名
    NavDivClass: null,
    activeClass: 'active',
    toTopClass: null,
    speed: 500,
    scrollContent: null,
    isRemoveAnimation: false,
    offset: 0,
    isAdapt: false,
    autoHidden: false,
    floor: [],
    DiyFun: null
  }, config)
  this.scrollContent = me.config.scrollContent ? $('.' + me.config.scrollContent) : null
  me.init()
}

ElevatorNav.prototype = {
  constructor: ElevatorNav,

  // 初始化
  init() {
    var me = this;
    me.NavDiv = $('.' + me.config.NavDivClass)
    me.NavLi = $('.' + me.config.NavClass)
    me.floorHeight()
    me.statusChange()
    // 监听
    $(me.scrollContent || window).scroll(function () {
      me.statusChange()
    })
    me.BackToTop()
    me.ShowNav()
    me.DivFun()
  },

  // 获取各个楼层的高度
  floorHeight() {
    var me = this
    for (let i = 0; i < me.config.floorClass.length; i++) {
      me.config.floor[i] = $('.' + me.config.floorClass[i]).offset().top
    }
  },
  // 左侧导航样式随定位发生变化
  statusChange() {
    var me = this
    var windowScrollTop = $(me.scrollContent || window).scrollTop();
    for (var j = 0; j < me.config.floor.length; j++) {
      if (windowScrollTop >= me.config.floor[j] - (me.config.offset + 10)) {
        // 如果有多个相同导航
        if (me.NavDiv && me.NavDiv.length > 1) {
          for (var k = 0; k < me.NavDiv.length; k++) {
            $(me.NavDiv[k]).find(me.NavLi).removeClass(me.config.activeClass)
            $(me.NavDiv[k]).find(me.NavLi).eq(j).addClass(me.config.activeClass)
          }
        } else {
          me.NavLi.removeClass(me.config.activeClass)
          me.NavLi.eq(j).addClass(me.config.activeClass)
        }
      }
    }
  },
  // 回到底部
  BackToTop() {
    var me = this;
    $('.' + me.config.topTopClass).on('click', function () {
      $(me.config.scrollContent || 'html, body').animate({scrollTop: 0}, me.config.speed)
    })
  },
  // 滑倒一定位置出现导航栏
  ShowNav() {
    var me = this;
    var f1Top = me.config.floor[0];
    if (me.config.autoHidden == true) {
      if ($(window).scrollTop() >= f1Top) {
        me.NavDiv.show()
      } else {
        me.NavDiv.hide()
      }
      // 监听
      $(window).scroll(function() {
        if ($(window).scrollTop() >= f1Top) {
          me.NavDiv.show()
        } else {
          me.NavDiv.hide()
        }
      })
    }
  },
  DivFun() {

  },
}