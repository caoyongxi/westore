import create from '../../utils/create'
import store from '../../store/index'

//获取应用实例
const app = getApp()

create.Page(store, {
  // **重要
  // use里面声明的数据，用于在试图渲染，如果不声明，视图则不会显示
  use: [
    'motto',
    'userInfo',
    'hasUserInfo',
    'canIUse',
    'newProp'  // use里面声明的数据，用于在试图渲染，如果不声明，则不会显示
  ],
  computed: {
    reverseMotto() {
      // debugger this 即是store
      return this.motto.split('').reverse().join('')
    }
  },
  data: {
    maydata: 'maydata'  // 如果含有data，则use声明的数据以$.* 来获取数据
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // debugger
    if (app.globalData.userInfo) {
      this.store.data.userInfo = app.globalData.userInfo
      this.store.data.hasUserInfo = true

    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.store.data.userInfo = res.userInfo
        this.store.data.hasUserInfo = true
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.store.data.userInfo = res.userInfo
          this.store.data.hasUserInfo = true
        }
      })
    }

    // setTimeout(() => {
    //   debugger
    //   this.store.data.logs.push('abc')
    //   this.store.data.motto = '123456'
    // }, 1000)

    // setTimeout(() => {
    //   this.store.data.motto = 'abcdefg'
    // }, 2000)

    setTimeout(() => {
      debugger
      this.store.set(this.store.data, 'newProp', 'newPropVal')
    }, 3000)


    // const handler = function (evt) {
    //   console.log(evt)
    // }
    // store.onChange(handler)

    //store.offChange(handler)

  },
  getUserInfo: function (e) {
    debugger
    this.store.data.userInfo = e.detail.userInfo
    this.store.data.hasUserInfo = true

  }
})
