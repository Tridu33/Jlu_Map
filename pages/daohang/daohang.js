var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop:0,
    isChecked:true,
    isSpread:true,
    img: "/image/o.png",
    didian:[{
      imageo:"http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/TgN65VOIrZFPboBwsqs1eOmr2I0f3z8.AhH7qkBwc.g!/r/dAgBAAAAAAAA",
      wenzi:"日新楼",
      id:"日新楼",
      image: "/image/r.png"
    },
    {
      imageo: "http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/218pQdzPcxoTSTVLaIPWGB5P7D2nxlLJ2wx1bWfkATw!/r/dDIBAAAAAAAA",
      wenzi: "清湖",
      id:"清湖",
      image: "/image/r.png"
      
    },
    {
      imageo: "http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/bDqF6hhyTapx4DijyKKSGquLzjkLjml1INdns1DAtuE!/r/dEQBAAAAAAAA",
      wenzi: "五月花广场",
      id: "五月花广场",
      image: "/image/r.png"
    },
    {
      imageo: "http://r.photo.store.qq.com/psb?/V12jCv3P1JX1Bf/TlO.LPQO5RTbG4KPmBJxV36diiTQ6V221Cd1O1tXJj4!/r/dJEAAAAAAAAA",
      wenzi: "鼎新图书馆",
      id: "鼎新图书馆",
      image:"/image/r.png"
    }
    ],
    markers:[
    {
      iconPath: "/image/n.png",
      id: 0,
        // title:'日新楼',
        latitude: 43.827758,
        longitude: 125.283105, 

      
    },
    {
      iconPath: "/image/n.png",
      id: 1,
    // title:'清湖',
      latitude: 43.827658,
      longitude: 125.277605, 
      
    },
    {
        iconPath: "/image/n.png",
        id: 12,
        // title:'五月花',
      latitude: 43.830558,
      longitude: 125.151305, 
        

    },
    {
        iconPath: "/image/n.png",
        id:13,
        // title: "鼎新图书馆",
      latitude: 43.827758,
      longitude: 125.283105, 
        
    }]
    // ifShow:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  change:function(e){
    var that = this;
    that.setData({ isChecked: !that.data.isChecked});
    if(that.data.isSpread === true){
      that.setData({
        isSpread:false
      })
    }
    else{
      that.setData({isSpread:true})
    }
    if(that.data.img=="/image/l.png"){
      that.setData({img:"/image/o.png"})

    }
    else{
      that.setData({ img: "/image/l.png"})

    }
    
  },
  markertap(e){
    console.log(e)
    var that=this;
    var markerId = e.markerId;
    
    var didian = that.data.didian;
    for (var i = 0; i < didian.length;i++){
      if(didian[i].display){
        didian[i].display=false;
      }
    }
    that.setData({didian:didian})
    var data ={};
    data['didian['+markerId+'].display']=true;
    that.setData(data);
    // 当点击相应的marker时下面相应的元素就会显示出来
    that.setData({scrollTop:markerId*56})
    
    // 改变marker的颜色
    var id = e.markerId,
    data = that.data.markers;
    //用于存储处理过的数据
    let markers = [];
    data.forEach(m=>{
      //如果当前id为当前点击的标记的id那么显示高亮的图片
        markers.push({
          iconPath:m.id == id?"/image/m.png":"/image/n.png",
          id:m.id,
          latitude:m.latitude,
          longitude:m.longitude
        })
    });
    that.setData({
      markers:markers
    })
  },
  tiaozhuan:function(e){
    console.log(e)
    var that = this;
    var index = e.currentTarget.dataset.index;
    wx.openLocation({
      latitude: that.data.markers[index].latitude,
      longitude: that.data.markers[index].longitude,
      name: that.data.didian[index].id
    })
  }
  

})