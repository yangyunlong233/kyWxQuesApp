// pages/finished/finished.js
let app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {},
  back_to_index: function (e) {
    wx.navigateTo({
      url: `../${e.currentTarget.dataset.topath}/${e.currentTarget.dataset.topath}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

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
})
