// index.js
// const app = getApp()
const app = getApp();
const { envList } = require('../../envList.js');

Page({
  data: {
    query: '',
    hideClearBtn: true,
    result: [],
    curLang: {}
  },

  onLoad(options) {
    console.log('loading options');
    console.log(options);
    if(options.query) {
      this.setData({ query: options.query });
    }
  },

  onShow() {
    if (this.data.curLang.lang !== app.globalData.curLang.lang) {
      this.setData({ curLang: app.globalData.curLang });
      this.onConfirm();
    }
  },

  onInput(e) {
    this.setData({ 'query': e.detail.value });
    if(this.data.query.length > 0) {
      this.setData({ 'hideClearBtn': false });
    } else {
      this.setData({ 'hideClearBtn': true });
    }
    console.log('input');
  },

  onTapClose() {
    this.setData({ query: '', hideClearBtn: true });
  },

  onConfirm() {
    if(!this.data.query) return;
    // translate(this.data.query, {from: 'auto', to: this.data.curLang.lang}).then(res=>{
    //   this.setData({'result': res.trans_result})

    //   let history = wx.getStorageSync('history')||[]
    //   history.unshift({ query: this.data.query, result: res.trans_result[0].dst})
    //   history.length = history.length > 10 ? 10 : history.length
    //   wx.setStorageSync('history', history)
    // })
  }
});
