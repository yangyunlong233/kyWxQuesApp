// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
  },
  // 事件处理函数
  start_to_ques: function () {
    wx.navigateTo({
      url: '../ques1patient/ques1patient'
    })
  },
  onLoad() {
  },
})
