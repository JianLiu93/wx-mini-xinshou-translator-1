// app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      });
    }
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0]
  },
  globalData: {
    langList: [
      {
        'lang': 'en',
        'tag': '英文',
        'index': 0
      },
      {
        'lang': 'zh',
        'tag': '中文',
        'index': 1
      },
      {
        'lang': 'jp',
        'tag': '日文',
        'index': 2
      },
      {
        'lang': 'kor',
        'tag': '韩文',
        'index': 3
      },
      {
        'lang': 'fra',
        'tag': '法文',
        'index': 4
      },
      {
        'lang': 'de',
        'tag': '德文',
        'index': 5
      },
      {
        'lang': 'ru',
        'tag': '俄文',
        'index': 6
      },
      {
        'lang': 'spa',
        'tag': '西班牙文',
        'index': 7
      },
      {
        'lang': 'ara',
        'tag': '阿拉伯文',
        'index': 8
      },
    ],
    curLang: {}
  }
});
