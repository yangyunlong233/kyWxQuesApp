data = {
  patientData: { // 患者信息
    patientMobile: "18988288888", // 患者手机号
    patientName: "周树人", // 患者姓名
    patientNation: "汉族", // 民族
    patientAge: 32, // 患者年龄
    patientGender: "男", // 患者性别
    patientIDCard: "530103198503333333", // 患者身份证号
    patientProfession: "商业", // 职业
    patientRegion: "云南省,昆明市,五华区", // 居住地
    patientRegionDetail: "sss", // 居住地详细街道/村镇
    hospitalName: "昆明医科大学第二附属医院", // 就诊医院
    hospitalNo: 203002034222, // 医院登记号(住院号/门诊号)
    patientSymptom: "血尿", // 目前最明显症状
    patientIllness: "输尿管肿瘤", // 目前诊断疾病
  },
  familyData: { // 家族史数据
    familyLv1IllnessHistory: "是", // 一级亲属是否患有膀胱癌、输尿管癌、肾盂癌
    familyLv2IllnessHistory: "是", // 二级亲属是否患有膀胱癌、输尿管癌、肾盂癌
    familyOtherIllness: "是", // 一级亲属和二级亲属是否患有其他恶性肿瘤
    familyOtherIllnessName: "sss", // 一级亲属和二级亲属所患其他恶性肿瘤名称
    patientOtherIllness: "否", // 患者本人是否患有其他恶性肿瘤
    patientOtherIllnessName: "", // 患者本人所患其他恶性肿瘤名称
  },
  smokeData: {
    smokeStatus: "以前吸已经戒烟", // 患者目前吸烟状况
    smokeCount: "1", // 抽烟量(每天/包)
    smokeCut: "2", // 戒烟多长时间(月)
    dangerTouch: "否", // 是否会长期接触工业化学产品
    chineseMedic: "是", // 是否长期服用中药
    reInfection: "否", // 是否反复发生尿路感染
    edibleCount: "偶尔（每周<1次）", // 使用鱼腥草(折耳根)频率
  },
  cureData: { // 治疗方案数据
    cure1: "保留膀胱的治疗", // 膀胱癌治疗方案
    cure2: "保留肾脏和输尿管的治疗" // 输尿管癌或肾盂癌治疗方案
  },
}