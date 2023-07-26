// pages/ques2family/ques2family.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    familyLv1IllnessHistory: "",
    familyLv2IllnessHistory: "",
    familyOtherIllness: "",
    familyOtherIllnessName: "",
    patientOtherIllness: "",
    patientOtherIllnessName: "",
    illnessOptions: ["否", "是"],
  },
  //! 家族一级亲属病史选择事件
  bind_f_Lv1_illness_history_change: function (e) {
    this.setData({
      familyLv1IllnessHistory: e.detail.value,
    })
  },
  //! 家族二级亲属病史选择事件
  bind_f_Lv2_illness_history_change: function (e) {
    this.setData({
      familyLv2IllnessHistory: e.detail.value,
    })
  },
  //! 家族其他病史选择事件
  bind_f_other_illness_change: function (e) {
    this.setData({
      familyOtherIllness: e.detail.value,
    });
  },
  //! 本人其他病史选择事件
  bind_p_other_illness_change: function (e) {
    this.setData({
      patientOtherIllness: e.detail.value,
    })
  },
  //! 校验数据并到下一页
  verify_to_next: function (e) {
    if (this.data.familyOtherIllness == '是' && this.data.familyOtherIllnessName == '') {
      return this.toastCP.toast_show('请填写亲属历史所患恶性肿瘤病名')
    }
    if (this.data.patientOtherIllness == '是' && this.data.patientOtherIllnessName == '') {
      return this.toastCP.toast_show('请填写本人历史所患恶性肿瘤病名')
    }
    this.save_to_global_handle()
  },
  //! 返回上一页
  save_to_prev: function (e) {
    this.save_to_global_handle()
    wx.navigateTo({
      url: `../${e.currentTarget.dataset.topath}/${e.currentTarget.dataset.topath}`
    })
  },
  //* 数据重组和保存全局数据操作
  save_to_global_handle: function () {
    let _d = {}
    _d.familyLv1IllnessHistory = this.data.familyLv1IllnessHistory
    _d.familyLv2IllnessHistory = this.data.familyLv2IllnessHistory
    _d.familyOtherIllness = this.data.familyOtherIllness
    _d.familyOtherIllnessName = this.data.familyOtherIllnessName
    _d.patientOtherIllness = this.data.patientOtherIllness
    _d.patientOtherIllnessName = this.data.patientOtherIllnessName
    app.globalData.familyData = _d
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    //! 获取toast组件
    this.toastCP = this.selectComponent('#toastCP')
    //! 初始化数据
    this.setData({
      familyLv1IllnessHistory: this.data.illnessOptions[0],
      familyLv2IllnessHistory: this.data.illnessOptions[0],
      familyOtherIllness: this.data.illnessOptions[0],
      patientOtherIllness: this.data.illnessOptions[0],
    })
    //! 全局数据拉取
    if (app.globalData.familyData != null) {
      // console.log('has')
      this.setData({
        familyLv1IllnessHistory: app.globalData.familyData.familyLv1IllnessHistory,
        familyLv2IllnessHistory: app.globalData.familyData.familyLv2IllnessHistory,
        familyOtherIllness: app.globalData.familyData.familyOtherIllness,
        familyOtherIllnessName: app.globalData.familyData.familyOtherIllnessName,
        patientOtherIllness: app.globalData.familyData.patientOtherIllness,
        patientOtherIllnessName: app.globalData.familyData.patientOtherIllnessName,
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},
})
