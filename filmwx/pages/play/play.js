// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    videoList: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;

    that.setData({
      id: options.id
    });

    wx.request({
      // https://api-m.mtime.cn/Movie/Video.api?pageIndex=1&movieId=     预告片&拍摄花絮,没代理
      url: 'https://api-m.mtime.cn/Movie/Video.api?pageIndex=1&movieId=' + options.id,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log("预告片&拍摄花絮：", res.data.videoList);
        that.setData({
          'videoList': res.data.videoList
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

  }
})