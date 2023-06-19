// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTab:false,
    navTabs: {
      activeId: 0,
      tabs: [{
          id: 0,
          text: "热门"
        },
        {
          id: 1,
          text: "生活"
        },
        {
          id: 2,
          text: "爱好"
        },
        {
          id: 3,
          text: "爱好"
        },
        {
          id: 4,
          text: "数码"
        },
        {
          id: 5,
          text: "农牧"
        },
        {
          id: 6,
          text: "宠物"
        },
        {
          id: 8,
          text: "美妆"
        },
        {
          id: 9,
          text: "美食"
        },
        {
          id: 10,
          text: "旅游"
        },
        {
          id: 11,
          text: "汽车"
        },
        {
          id: 12,
          text: "法律"
        },
        {
          id: 13,
          text: "金融"
        },
        {
          id: 14,
          text: "游戏"
        },
        {
          id: 15,
          text: "母婴"
        },
        {
          id: 16,
          text: "健康"
        },
        {
          id: 17,
          text: "运动"
        },
      ]
    },
    articleList: [
      {
      nickName: "浅谈文学社",
      avatar: "/static/tx1.jpeg",
      time: "2022-04-20",
      info: "Huawei - Mate 30 5G",
      title: "闰月几年一次",
      content: "每三年要国一个月，每五年国两个月，每十九年闰七个月。国月不固定在某一个月，按照历法规则，会随机出现在二月到十月之间，这几",
      img: "/static/img1.jpeg",
      tags: ["＃国月时间","＃月规律","＃闰月"],
    },
      {
      nickName: "做梦都在减脂路上",
      avatar: "/static/tx2.jpeg",
      time: "2022-04-20",
      info: "Vivo -iQoo Neo 5",
      title: "古法金是999的纯金吗",
      content: "古法金不是999的纯金，与999的纯金相比较，古法金的纯度不是很高。古法金是采用古老的铸金工艺打造的黄金，这种制作工艺涉",
      img: "/static/img2.jpeg",
      tags: ["#古法金","#黄金","#饰品"],
    },
      {
      nickName: "天南海北的车友",
      avatar: "/static/tx2.jpeg",
      time: "2022-04-20",
      info: "Xiaomi - Redmi K40",
      title: "行车记录仪sd卡满了怎么清理",
      content: "行车记录仪SD卡满了清理的方法比较多。以在电脑上清理为例：1.取出内存卡，插在读卡器上后接入电脑，读取SD卡中的视频。2",
      img: "/static/img2.jpeg",
      tags: ["#行车记录仪清理","#行车记录仪内存卡"],
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
      tab
    } = currentTarget.dataset
    this.setData({
      "navTabs.activeId": tab.id
    })
    console.log(tab);
  },
  handleShowMenu(){
    const {showTab} =this.data
    this.setData({showTab:!showTab})
  }
})