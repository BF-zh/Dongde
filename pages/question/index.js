// pages/question/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: {
      activeId: 0,
      tabs: [{
          id: 0,
          text: "已发布"
        },
        {
          id: 1,
          text: "审核中"
        },
        {
          id: 2,
          text: "未通过"
        },
      ]
    },
    question:[
      {
        title:"思维导图的坏处",
        num:0
      },
      {
        title:"土偏方真的可信吗？",
        num:0
      },
      {
        title:"《奥特曼》的原型是什么，作者是怎样构造出这样的人物的",
        num:0
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
  handleBack(){
    wx.navigateBack()
  },
  handleToHome(){
    wx.switchTab({
      url: '/pages/home/index',
    })
  },
  handleClickMenuItem({
    currentTarget
  }) {
    const {
      tab
    } = currentTarget.dataset
    this.setData({
      "tabs.activeId": tab.id
    })
  },
})