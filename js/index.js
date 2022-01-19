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
    $(me.scrollContent || window).scroll(function() {
      me.statusChange()
    })
    me.BackToTop()
    me.ShowNav()
    me.DivFun()
  },
  floorHeight() {

  },
  statusChange() {

  },
  BackToTop() {

  },
  ShowNav() {

  },
  DivFun() {

  },
}