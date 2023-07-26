// pages/ques3smoke/ques3smoke.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    smokeStatus: '',
    smokeCount: '',
    smokeCut: '',
    dangerTouch: '',
    reInfection: '',
    chineseMedic: '',
    edibleCount: '',
    cure1: '',
    cure2: '',
    statusOptions: ['从来不吸烟', '以前吸已经戒烟', '现在正在吸烟'],
    tfOptions: ['是', '否'],
    edibleOptions: [
      '从来不吃',
      '偶尔（每周<1次）',
      '每周1次',
      '每周2次或超过2次',
      '每天1次或超过1次',
    ],
    cure1Options: [
      '切除膀胱+尿流改道',
      '保留膀胱的治疗'
    ],
    cure2Options: [
      '切除肾脏和输尿管',
      '保留肾脏和输尿管的治疗'
    ]
  },
  //! 吸烟情况选择事件
  bind_smoke_status_change: function (e) {
    this.setData({
      smokeStatus: this.data.statusOptions[e.detail.value]
    })
  },
  //! 危险品接触选择事件
  bind_danger_touch_change: function (e) {
    this.setData({
      dangerTouch: this.data.tfOptions[e.detail.value]
    })
  },
  //! 反复感染选择事件
  bind_re_infection_change: function (e) {
    this.setData({
      reInfection: this.data.tfOptions[e.detail.value]
    })
  },
  //! 服用中药选择事件
  bind_chinese_medic_change: function (e) {
    this.setData({
      chineseMedic: this.data.tfOptions[e.detail.value]
    })
  },
  //! 折耳根选择事件
  bind_edible_count_change: function (e) {
    this.setData({
      edibleCount: this.data.tfOptions[e.detail.value]
    })
  },
  //! 治疗方案1选择事件
  bind_cure_1_change: function (e) {
    this.setData({
      cure1: this.data.tfOptions[e.detail.value]
    })
  },
  //! 治疗方案2选择事件
  bind_cure_2_change: function (e) {
    this.setData({
      cure2: this.data.tfOptions[e.detail.value]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    //! init data in ready
    this.setData({
      smokeStatus: this.data.statusOptions[0],
      dangerTouch: this.data.tfOptions[0],
      reInfection: this.data.tfOptions[0],
      chineseMedic: this.data.tfOptions[0],
      edibleCount: this.data.edibleOptions[0],
      cure1: this.data.cure1Options[0],
      cure2: this.data.cure2Options[0],
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},
})
