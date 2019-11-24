// pages/sellTicket/sellTicket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    now: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      // https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=     正在售票
      url: 'https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=365',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log("正在售票：", res.data);
        that.setData({
          'now': res.data
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 跳转详情页
   */
  details(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/details/details?id=' + id
    })
  }

})