// changeLang.js
// const { envList } = require('../../envList.js');
const app = getApp();

Page({
  data: {
    langList: app.globalData.langList,
    curLang: {}
  },

  onShow() {
    this.setData({ curLang: app.globalData.curLang });
  },

  onTapItem(e) {
    let langObj = e.currentTarget.dataset;
    wx.setStorageSync('language', langObj);
    app.globalData.curLang = langObj;
    this.setData({ curLang: langObj });
    wx.switchTab({ url: '/pages/index/index' });
  }
});
