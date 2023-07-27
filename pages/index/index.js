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
    setTimeout(() => {
      app.globalData.patientData = null
      app.globalData.familyData = null
      app.globalData.smokeData = null
      app.globalData.cureData = null
    }, 1000)
  },
})
