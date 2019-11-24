// pages/stills/stills.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    imageTypes: {},
    images: {},
    imageList: {},
    cur: 0,
    enlarge: false,
    enlargeImg: null
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
      // https://api-m.mtime.cn/Movie/ImageAll.api?movieId=     剧照
      url: 'https://api-m.mtime.cn/Movie/ImageAll.api?movieId=' + options.id,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log("剧照：", res.data);
        that.setData({
          'imageTypes': res.data.imageTypes,
          'images': res.data.images,
          'imageList': res.data.images
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
   * 切换类型
   */
  switchTab(e) {
    let that = this;
    let index = e.currentTarget.dataset.index;
    let type = e.currentTarget.dataset.type;

    let images = that.data.images
    let imageList = that.data.imageList
    that.setData({
      cur: index
    });

    that.setData({
      images: imageList.filter(v => type == v.type)
    });

    if (type < 0) {
      that.setData({
        images: imageList
      });
    }
  },

  /**
   * 放大图片
   */
  enlarge(e) {
    let img = e.currentTarget.dataset.img;
    this.setData({
      enlarge: true,
      enlargeImg: img
    });
    console.log('放大图片', img);
  },

  /**
   * 缩小图片
   */
  narrow() {
    this.setData({
      enlarge: false
    });
    console.log('缩小图片');
  }

})