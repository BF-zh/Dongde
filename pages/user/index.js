// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: [{
        icon: "/static/hd.png",
        text: "回答",
        url: "/pages/question/index"
      },
      {
        icon: "/static/tw.png",
        text: "提问",
        url:"/pages/putQuestion/index"
      },
      {
        icon: "/static/wz.png",
        text: "文章"
      },
      {
        icon: "/static/sc.png",
        text: "收藏"
      },
      {
        icon: "/static/gz.png",
        text: "关注"
      },
      {
        icon: "/static/xx.png",
        text: "消息"
      },
      {
        icon: "/static/kf.png",
        text: "客服"
      },
      {
        icon: "/static/sz.png",
        text: "设置"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  handleClickMenuItem({
    currentTarget
  }) {
    const {
      menu
    } = currentTarget.dataset
    wx.navigateTo({
      url: menu.url,
      fail() {
        wx.showToast({
          title: '当前页面维护',
        })
      },
      success() {}
    })
  }
})