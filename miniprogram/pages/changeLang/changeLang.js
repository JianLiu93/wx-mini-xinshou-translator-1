// changeLang.js
// const app = getApp()
const { envList } = require('../../envList.js');
const app = getApp();

Page({
  data: {
    languageList: app.globalData.langList,
    curLang: {}
  },

  onShow: function() {
    this.setData({ curLang: app.globalData.curLang })
  },
  onTapItem: function(e) {
    let langObj = e.currentTarget.dataset;
    wx.setStorageSync('language', langObj);
    app.globalData.curLang = langObj;
    this.setData({ curLang: langObj });
    wx.switchTab({ url: '/pages/index/index' });
  }
});
