// pages/ques4cure/ques4cure.js
let app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    cure1: "",
    cure2: "",
    cure1Options: ["切除膀胱+尿流改道", "保留膀胱的治疗"],
    cure2Options: ["切除肾脏和输尿管", "保留肾脏和输尿管的治疗"],
  },
  //! 治疗方案1选择事件
  bind_cure_1_change: function (e) {
    this.setData({
      cure1: e.detail.value
    })
  },
  //! 治疗方案2选择事件
  bind_cure_2_change: function (e) {
    this.setData({
      cure2: e.detail.value
    })
  },
  //! 完成并提交数据，跳转到完成页
  submit_to_finished: function (e) {
    this.save_to_global_handle()
    console.log('app.global', app.globalData)
    let _requestPersonal = {
      patientName          : app.globalData.patientData.patientName,
      patientIDCard        : app.globalData.patientData.patientIDCard,
      patientGender        : app.globalData.patientData.patientGender,
      patientAge           : app.globalData.patientData.patientAge,
      patientMobile        : app.globalData.patientData.patientMobile,
      hospitalName         : app.globalData.patientData.hospitalName,
      hospitalNo           : app.globalData.patientData.hospitalNo,
      patientProfession    : app.globalData.patientData.patientProfession,
      patientNation        : app.globalData.patientData.patientNation,
      patientRegion        : app.globalData.patientData.patientRegion,
      patientRegionDetail  : app.globalData.patientData.patientRegionDetail,
      patientEducation     : app.globalData.patientData.patientEducation,
      patientProof         : app.globalData.patientData.patientProof,
      patientLithiasis     : app.globalData.patientData.patientLithiasis,
      patientLithiasisType1: app.globalData.patientData.patientLithiasisType1,
      patientLithiasisType2: app.globalData.patientData.patientLithiasisType2,
      patientSymptom       : app.globalData.patientData.patientSymptom,
      patientIllness       : app.globalData.patientData.patientIllness,
    }
    let _requestQues = {
      family: {
        familyLv1IllnessHistory: app.globalData.familyData.familyLv1IllnessHistory,
        familyLv2IllnessHistory: app.globalData.familyData.familyLv2IllnessHistory,
        familyOtherIllness     : app.globalData.familyData.familyOtherIllness,
        familyOtherIllnessName : app.globalData.familyData.familyOtherIllnessName,
        patientOtherIllness    : app.globalData.familyData.patientOtherIllness,
        patientOtherIllnessName: app.globalData.familyData.patientOtherIllnessName,
      },
      smokeandothers: {
        smokeStatus            : app.globalData.smokeData.smokeStatus,
        smokeCount             : app.globalData.smokeData.smokeCount,
        smokeCut               : app.globalData.smokeData.smokeCut,
        dangerTouch            : app.globalData.smokeData.dangerTouch,
        reInfection            : app.globalData.smokeData.reInfection,
        chineseMedic           : app.globalData.smokeData.chineseMedic,
        edibleCount            : app.globalData.smokeData.edibleCount,
      },
      cure: {
        cure1                  : app.globalData.cureData.cure1,
        cure2                  : app.globalData.cureData.cure2,
      }
    }
    wx.request({
      url: 'https://km2api.luoui.com/api/question/new',
      method: 'POST',
      data: {
        uuid: app.globalData.patientData.patientIDCard,
        askType: 'urine',
        manInfo: JSON.stringify(_requestPersonal),
        quesInfo: JSON.stringify(_requestQues),
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success (res) {
        console.log(res)
      }
    })
    wx.navigateTo({
      url: `../${e.currentTarget.dataset.topath}/${e.currentTarget.dataset.topath}`
    })
  },
  //! 完成并提交数据，跳转到完成页
  save_to_prev: function (e) {
    this.save_to_global_handle()
    wx.navigateTo({
      url: `../${e.currentTarget.dataset.topath}/${e.currentTarget.dataset.topath}`
    })
  },
  //* 数据重组和保存全局数据操作
  save_to_global_handle: function () {
    let _d = {}
    _d.cure1 = this.data.cure1
    _d.cure2 = this.data.cure2
    app.globalData.cureData = _d
    console.log('-----------save', app.globalData.cureData)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    //! 拉取全局数据
    if (app.globalData.cureData != null) {
      this.setData({
        cure1: app.globalData.cureData.cure1,
        cure2: app.globalData.cureData.cure2,
      })
    } else { //! 全局没有数据，init data in ready
      this.setData({
        cure1: this.data.cure1Options[0],
        cure2: this.data.cure2Options[0],
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},
})
