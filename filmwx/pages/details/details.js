// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    details: {},
    type: null,
    comment: {}
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
      // https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=     影片详情,没代理
      url: 'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=' + options.id,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log("影片详情", res.data);
        that.setData({
          'details': res.data,
          'type': res.data.data.basic.type.join('/')
        });
      }
    });

    wx.request({
      // https://ticket-api-m.mtime.cn/movie/hotComment.api?movieId=    影片评论,没代理
      url: 'https://ticket-api-m.mtime.cn/movie/hotComment.api?movieId=' + options.id,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log("影片评论", res.data.data);
        that.setData({
          'comment': res.data.data
        });
      }
    });
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
   * 跳转播放页
   */
  play(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/play/play?id=' + id
    })
  },
  
  /**
   * 跳转播放页
   */
  stills(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/stills/stills?id=' + id
    })
  }

})