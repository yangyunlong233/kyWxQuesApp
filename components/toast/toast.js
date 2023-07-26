// components/toast/toast.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    toast: false,
    toastContent: '',
    timer: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /*
      * @desc toast 显示方法，供父页面调用
      * @params
      *     str     String    toast显示的信息
    */
    toast_show: function (str) {
      clearTimeout(this.data.timer)
      this.setData({
        ['toastContent']: str,
        ['toast']: true,
        ['timer']: setTimeout(() => {
          this.setData({
            ['toast']: false
          })
        }, 3000)
      })
    }
  },
});
