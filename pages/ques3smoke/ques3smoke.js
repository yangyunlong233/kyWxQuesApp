// pages/ques3smoke/ques3smoke.js
let app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    smokeStatus: '',
    smokeCount: '',
    smokeCut: '',
    smokeCountOptions: [
      '<10支',
      '10~20支',
      '20~40支',
      '>40支',
    ],
    dangerTouch: '',
    reInfection: '',
    edibleCount: '',
    statusOptions: ['从来不吸烟', '以前吸已经戒烟', '现在正在吸烟'],
    tfOptions: ['否', '是'],
    lithiasis: '否',
    lithiasisType1Options: [
      "肾结石","输尿管结石","膀胱结石","肾和输尿管结石","肾和膀胱结石","输尿管和膀胱结石","肾、输尿管和膀胱结石"
    ],
    lithiasisType2Options: [
      "结石经过手术治疗","结石未经过手术治疗"
    ],
    lithiasisType3Options: [
      "<1年","1年-2年",">2年","不清楚"
    ],
    edibleOptions: [
      '从来不吃',
      '偶尔（每周<1次）',
      '每周1次',
      '每周2次或超过2次',
      '每天1次或超过1次',
    ],
  },
  //! 吸烟情况选择事件
  bind_smoke_status_change: function (e) {
    this.setData({
      smokeStatus: e.detail.value
    })
    if (e.detail.value == '从来不吸烟') {
      this.setData({
        smokeCount: '',
        smokeCut: '',
      })
    }
  },
  bind_smoke_count_change: function (e) {
    this.setData({
      smokeCount: e.detail.value
    })
  },
  //! 危险品接触选择事件
  bind_danger_touch_change: function (e) {
    this.setData({
      dangerTouch: e.detail.value
    })
  },
  //! 反复感染选择事件
  bind_re_infection_change: function (e) {
    this.setData({
      reInfection: e.detail.value
    })
  },
  //! 是否有结石病事件
  bind_lithiasis_change: function (e) {
    if (e.detail.value == '否') {
      this.setData({
        lithiasis: e.detail.value,
        lithiasisType1: '',
        lithiasisType2: '',
        lithiasisType3: '',
      })
    } else {
      this.setData({
        lithiasis: e.detail.value
      })
    }
  },
  //! 结石病子选项事件
  bind_lithiasis_type1_change: function (e) {
    this.setData({
      lithiasisType1: e.detail.value
    })
  },
  bind_lithiasis_type2_change: function (e) {
    this.setData({
      lithiasisType2: e.detail.value
    })
  },
  bind_lithiasis_type3_change: function (e) {
    this.setData({
      lithiasisType3: e.detail.value
    })
  },
  //! 服用中药选择事件
  // bind_chinese_medic_change: function (e) {
  //   this.setData({
  //     chineseMedic: e.detail.value
  //   })
  // },
  //! 折耳根选择事件
  bind_edible_count_change: function (e) {
    this.setData({
      edibleCount: e.detail.value
    })
  },
  //! 校验数据并跳转下一页
  verify_to_next: function (e) {
    if (this.data.smokeStatus == '以前吸已经戒烟' && (this.data.smokeCount == '' || this.data.smokeCut == '')) {
      return this.toastCP.toast_show('请完善患者吸烟信息')
    }
    if (this.data.smokeStatus == '现在正在吸烟' && this.data.smokeCount == '') {
      return this.toastCP.toast_show('请完善患者吸烟信息')
    }
    if (this.data.lithiasis == '是' && (!this.data.lithiasisType1 || !this.data.lithiasisType2 || !this.data.lithiasisType3)) {
      return this.toastCP.toast_show('请选择结石病史情况')
    }
    this.save_to_global_handle()
    wx.navigateTo({
      url: `../${e.currentTarget.dataset.topath}/${e.currentTarget.dataset.topath}`
    })
  },
  //! 保存并跳转上一页页事件
  save_to_prev: function (e) {
    this.save_to_global_handle()
    wx.navigateTo({
      url: `../${e.currentTarget.dataset.topath}/${e.currentTarget.dataset.topath}`
    })
  },
  //* 数据重组和保存全局数据操作
  save_to_global_handle: function () {
    let _d = {}
    _d.smokeStatus = this.data.smokeStatus
    _d.smokeCount = this.data.smokeCount
    _d.smokeCut = this.data.smokeCut
    _d.dangerTouch = this.data.dangerTouch
    _d.reInfection = this.data.reInfection
    _d.lithiasis = this.data.lithiasis
    _d.lithiasisType1 = this.data.lithiasisType1
    _d.lithiasisType2 = this.data.lithiasisType2
    _d.lithiasisType3 = this.data.lithiasisType3
    _d.edibleCount = this.data.edibleCount
    app.globalData.smokeData = _d
    // console.log('-----------save', app.globalData.smokeData)
  },
  // input 回调函数
  input_change_fallback: function () {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    //! 获取toast组件
    this.toastCP = this.selectComponent('#toastCP')
    //! 拉取全局数据
    if (app.globalData.smokeData != null) {
      this.setData({
        smokeStatus: app.globalData.smokeData.smokeStatus,
        smokeCount: app.globalData.smokeData.smokeCount,
        smokeCut: app.globalData.smokeData.smokeCut,
        dangerTouch: app.globalData.smokeData.dangerTouch,
        reInfection: app.globalData.smokeData.reInfection,
        lithiasis: app.globalData.smokeData.lithiasis,
        lithiasisType1: app.globalData.smokeData.lithiasisType1,
        lithiasisType2: app.globalData.smokeData.lithiasisType2,
        lithiasisType3: app.globalData.smokeData.lithiasisType3,
        edibleCount: app.globalData.smokeData.edibleCount
      })
    } else { //! 全局没有数据，init data in ready
      this.setData({
        smokeStatus: this.data.statusOptions[0],
        dangerTouch: this.data.tfOptions[0],
        reInfection: this.data.tfOptions[0],
        patientLithiasis: this.data.tfOptions[0],
        edibleCount: this.data.edibleOptions[0]
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},
})
