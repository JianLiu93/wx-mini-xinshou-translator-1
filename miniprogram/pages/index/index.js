// index.js
// const { envList } = require('../../envList.js');
const { translate } = require('../../utils/api.js');
const { formatTime } = require('../../utils/formatTime.js');
const { debounce } = require('../../utils/debounce.js');
const app = getApp();

const maxLength = 20;

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

  onTapClose() {
    this.setData({ query: '', hideClearBtn: true });
  },

  onInput: debounce(function(e) {
    this.setData({ 'query': e.detail.value });
    if(this.data.query.length > 0) {
      this.setData({ 'hideClearBtn': false });
    } else {
      this.setData({ 'hideClearBtn': true });
    }
  }, 500),

  onConfirm: debounce(function() {
    if(!this.data.query) {
      this.setData({'result': ''});
      return;
    }
    translate(this.data.query, {from: 'auto', to: this.data.curLang.lang}
    ).then(res=>{
      this.setData({ 'result': res.trans_result });

      let history = wx.getStorageSync('history') || [];
      history.unshift({ query: this.data.query, result: res.trans_result[0].dst, lang: this.data.curLang });
      history.length = history.length > maxLength ? maxLength : history.length;
      wx.setStorageSync('history', history);
    });
  }, 1000)
});
