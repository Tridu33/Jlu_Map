//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '吉大导览',
    userInfo: {},
    appInfo: {
      logoUrl: '../../image/jlu.jpg',
      title: '吉大导览'
    },
    jlu_places: {
      name: "日新楼",
      comment: "堕落的奢靡楼。",
      imagePath: "/image/rixinloulouceng.jpg"
    }
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../location/location'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    that.setData({
      appInfo: this.data.appInfo
    })
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    //   that.update()
    // })
  }
})
