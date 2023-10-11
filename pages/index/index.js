// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    canStart: false
  },
  // 事件处理函数
  start_to_ques: function () {
    if (this.data.canStart == true) {
      wx.navigateTo({
        url: '../ques1patient/ques1patient'
      })
    } else {
      wx.showToast({
        title: '请先阅读并同意用户协议及隐私政策',
        icon: 'none',
        duration: 2000
      })
    }
  },
  //! 隐私协议及用户协议
  user_privacy_page: function () {
    wx.navigateTo({
      url: '../user-privacy/user-privacy'
    })
  },
  user_services_page: function () {
    wx.navigateTo({
      url: '../user-services/user-services'
    })
  },
  user_checked: function (e) {
    if (e.detail.value == 'checked') {
      this.setData({
        canStart: true
      })
    } else {
      this.setData({
        canStart: false
      })
    }
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
