// history.js
// const { envList } = require('../../envList.js');
const app = getApp();

Page({
  data: {
    history: []
  },

  onShow() {
    this.setData({ history: wx.getStorageSync('history') });
  },

  onTapItem(e) {
    let langObj = e.currentTarget.dataset.lang;
    wx.setStorageSync('language', langObj);
    app.globalData.curLang = langObj;
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.query}`
    });
  },

  onDelete() {
    wx.setStorageSync('history', []);
    this.onShow();
  }

});
