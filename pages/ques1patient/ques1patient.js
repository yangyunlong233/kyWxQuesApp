// pages/ques1patient/ques1patient.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    patientName: '',
    patientIDCard: '',
    patientGender: '',
    patientAge: '',
    patientMobile: '',
    hospitalName: '昆明医科大学第二附属医院',
    hospitalNo: '',
    patientProfession: '',
    patientNation: '汉族',
    patientRegion: ['云南省', '昆明市', '五华区'], // 5.患者基础信息：地区
    patientRegionDetail: '城镇（县及县级以上城市区域）',
    patientEducation: '',
    patientProof: '',
    patientLithiasis: '否',
    patientLithiasisType1: '',
    patientLithiasisType2: '',
    patientSymptom: '',
    patientIllness: '',
    genderOptions: ['男', '女'],
    professionOptions: [
      "商业","行政","教师","医护","农民","园林","化肥或杀虫剂生产","科研","电子产品","纺织","制药","橡胶或皮革生产","油漆或染料生产","金属加工","矿产","机械维修或电工","房屋装修","理发师","司机","数字媒体","写作和绘画","舞蹈","音乐","运动员","其他"
    ],
    nationOptions: [
      '汉族',
      '蒙古族',
      '回族',
      '藏族',
      '维吾尔族',
      '苗族',
      '彝族',
      '壮族',
      '白族',
      '哈尼族',
      '傣族',
      '布依族',
      '朝鲜族',
      '满族',
      '侗族',
      '纳西族',
      '景颇族',
      '瑶族',
      '黎族',
      '傈僳族',
      '佤族',
      '布朗族',
      '怒族',
      '阿昌族',
      '普米族',
      '土家族',
      '哈萨克族',
      '畲族',
      '高山族',
      '拉祜族',
      '水族',
      '东乡族',
      '柯尔克孜族',
      '土族',
      '达斡尔族',
      '仫佬族',
      '羌族',
      '撒拉族',
      '毛难族',
      '仡佬族',
      '锡伯族',
      '塔吉克族',
      '乌孜别克族',
      '俄罗斯族',
      '鄂温克族',
      '崩龙族',
      '保安族',
      '裕固族',
      '京族',
      '塔塔尔族',
      '独龙族',
      '鄂伦春族',
      '赫哲族',
      '门巴族',
      '珞巴族',
      '基诺族',
    ],
    regionDetailOptions: [
      '城镇（县及县级以上城市区域）',
      '农村'
    ],
    educationOptions: [
      "小学及以下","初中","高中","中专","大专","大学本科","硕士","博士"
    ],
    proofOptions: [
      "<1万","1-3万","3-6万","6-9万","9-20万","20万以上"
    ],
    lithiasisOptions: ['否', '是'],
    lithiasisType1Options: [
      "肾结石","输尿管结石","膀胱结石","肾和输尿管结石","肾和膀胱结石","输尿管和膀胱结石","都存在"
    ],
    lithiasisType2Options: [
      "结石经过手术治疗","结石未经过手术治疗"
    ],
    symptomOptions: [
      '无症状', '血尿', '腰痛', '尿频尿急', '排尿困难', '尿痛', '盆腔疼痛', '骨痛'
    ],
    illnessOptions: [
      '膀胱肿瘤', '输尿管肿瘤', '肾盂肿瘤'
    ]
  },
  //! 性别选择事件
  bind_gender_change: function (e) {
    this.setData({
      patientGender: e.detail.value
    })
  },
  //! 职业选择事件
  bind_profession_change: function (e) {
    this.setData({
      patientProfession: this.data.professionOptions[e.detail.value]
    })
  },
  //! 民族选择事件
  bind_nation_change: function (e) {
    this.setData({
      patientNation: this.data.nationOptions[e.detail.value]
    })
  },
  //! 地区选择事件
  bind_region_change: function (e) {
    this.setData({
      patientRegion: e.detail.value
    })
  },
  //! 村镇选择事件
  bind_region_detail_change: function (e) {
    this.setData({
      patientRegionDetail: e.detail.value
    })
  },
  //! 教育程度选择事件
  bind_education_change: function (e) {
    this.setData({
      patientEducation: this.data.educationOptions[e.detail.value]
    })
  },
  //! 收入选择事件
  bind_proof_change: function (e) {
    this.setData({
      patientProof: this.data.proofOptions[e.detail.value]
    })
  },
  //! 是否有结石病事件
  bind_lithiasis_change: function (e) {
    if (e.detail.value == '否') {
      this.setData({
        patientLithiasis: e.detail.value,
        patientLithiasisType1: '',
        patientLithiasisType2: '',
      })
    } else {
      this.setData({
        patientLithiasis: e.detail.value
      })
    }
  },
  //! 结石病子选项事件
  bind_lithiasis_type1_change: function (e) {
    this.setData({
      patientLithiasisType1: e.detail.value
    })
  },
  bind_lithiasis_type2_change: function (e) {
    this.setData({
      patientLithiasisType2: e.detail.value
    })
  },
  //! 症状选择事件
  bind_symptom_change: function (e) {
    this.setData({
      patientSymptom: e.detail.value
    })
  },
  //! 怀疑疾病选择事件
  bind_illness_change: function (e) {
    this.setData({
      patientIllness: e.detail.value
    })
  },
  //! 验证填写并且下一步
  verify_to_next: function (e) {
    if (!this.data.patientName) {
      return this.toastCP.toast_show('请填写患者姓名')
    }
    if (!this.data.patientIDCard) {
      return this.toastCP.toast_show('请填写患者身份证号')
    }
    if (!this.data.patientAge) {
      return this.toastCP.toast_show('请填写患者年龄')
    }
    if (!this.data.patientMobile) {
      return this.toastCP.toast_show('请填写患者手机号')
    }
    if (!this.data.patientMobile) {
      return this.toastCP.toast_show('请填写患者手机号')
    }
    if (!this.data.hospitalName) {
      return this.toastCP.toast_show('请填写患者就诊医院名')
    }
    if (!this.data.hospitalNo) {
      return this.toastCP.toast_show('请填写患者就诊医院登记号（住院号或门诊号）')
    }
    if (!this.data.patientProfession) {
      return this.toastCP.toast_show('请选择患者职业')
    }
    if (!this.data.patientEducation) {
      return this.toastCP.toast_show('请选择教育程度')
    }
    if (!this.data.patientProof) {
      return this.toastCP.toast_show('请选择收入类型')
    }
    if (this.data.patientLithiasis == '是' && (!this.data.patientLithiasisType1 || !this.data.patientLithiasisType2)) {
      return this.toastCP.toast_show('请选择结石病史情况')
    }
    // 组装患者信息
    let _patientData = {}
    _patientData.patientName = this.data.patientName
    _patientData.patientIDCard = this.data.patientIDCard
    _patientData.patientGender = this.data.patientGender
    _patientData.patientAge = this.data.patientAge
    _patientData.patientMobile = this.data.patientMobile
    _patientData.hospitalName = this.data.hospitalName
    _patientData.hospitalNo = this.data.hospitalNo
    _patientData.patientProfession = this.data.patientProfession
    _patientData.patientNation = this.data.patientNation
    _patientData.patientRegion = this.data.patientRegion
    _patientData.patientRegionDetail = this.data.patientRegionDetail
    _patientData.patientEducation = this.data.patientEducation
    _patientData.patientProof = this.data.patientProof
    _patientData.patientLithiasis = this.data.patientLithiasis
    _patientData.patientLithiasisType1 = this.data.patientLithiasisType1
    _patientData.patientLithiasisType2 = this.data.patientLithiasisType2
    _patientData.patientSymptom = this.data.patientSymptom
    _patientData.patientIllness = this.data.patientIllness
    // console.log(_patientData)
    // 患者信息存到全局数据中
    app.globalData.patientData = _patientData
    // console.log('app.globalData.patientData', app.globalData.patientData)
    wx.navigateTo({
      url: `../${e.currentTarget.dataset.topath}/${e.currentTarget.dataset.topath}`
    })
  },
  // input 回调函数
  input_change_fallback: function () {},
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
    //! 是否有全局数据
    if (app.globalData.patientData != null) {
      // console.log('app.globalData.patientData', app.globalData.patientData)
      this.setData({
        patientName: app.globalData.patientData.patientName,
        patientIDCard: app.globalData.patientData.patientIDCard,
        patientGender: app.globalData.patientData.patientGender,
        patientAge: app.globalData.patientData.patientAge,
        patientMobile: app.globalData.patientData.patientMobile,
        hospitalName: app.globalData.patientData.hospitalName,
        hospitalNo: app.globalData.patientData.hospitalNo,
        patientProfession: app.globalData.patientData.patientProfession,
        patientNation: app.globalData.patientData.patientNation,
        patientRegion: app.globalData.patientData.patientRegion,
        patientRegionDetail: app.globalData.patientData.patientRegionDetail,
        patientEducation: app.globalData.patientData.patientEducation,
        patientProof: app.globalData.patientData.patientProof,
        patientLithiasis: app.globalData.patientData.patientLithiasis,
        patientLithiasisType1: app.globalData.patientData.patientLithiasisType1,
        patientLithiasisType2: app.globalData.patientData.patientLithiasisType2,
        patientSymptom: app.globalData.patientData.patientSymptom,
        patientIllness: app.globalData.patientData.patientIllness,
      })
    } else {
      //! 默认值填充
      this.setData({
        patientGender: this.data.genderOptions[0],
        patientSymptom: this.data.symptomOptions[0],
        patientIllness: this.data.illnessOptions[0]
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},
})
