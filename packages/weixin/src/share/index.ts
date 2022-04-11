import { isQQ, isWeChat } from '../env';
import { WxShareInfo, WxShareInitOptions } from '../types';
import { loadScript } from '../utils';

// 微信 JS SDK脚本
const wxApi = 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js';
// QQ JS SDK脚本
const qqApi = '//open.mobile.qq.com/sdk/qqapi.js?_bid=152';

let readyCallback: (() => void) | undefined;

class WxShare {
  // 初始化微信分享
  static init(options: WxShareInitOptions = {}) {
    readyCallback = options.callback;
    if (isWeChat()) {
      initWeChat(options);
    }
    if (isQQ()) {
      initQQ();
    }
  }

  // 设置分享信息
  static setShareInfo({
    title,
    desc,
    link,
    imgUrl,
    type,
    dataUrl,
  }: WxShareInfo = {}) {
    if (wx) {
      const payload = {
        title,
        desc,
        link,
        imgUrl,
        type,
        dataUrl,
      };

      wx.onMenuShareTimeline({
        title,
        link,
        imgUrl,
        type,
        dataUrl,
      });
      wx.onMenuShareAppMessage(payload);
      wx.onMenuShareQQ(payload);
      wx.onMenuShareWeibo(payload);
      wx.onMenuShareQZone(payload);
    }
    if (window.mqq && mqq.data) {
      mqq.data.setShareInfo({
        share_url: link,
        title,
        desc,
        image_url: imgUrl,
      });
    }
  }
}

// 初始化QQ SDK
function initQQ() {
  loadScript(qqApi, () => readyCallback && readyCallback());
}

// 初始化微信 SDK
function initWeChat(options: WxShareInitOptions = {}) {
  const { appId, timestamp, nonceStr, signature } = options;
  loadScript(options.wxjssdk || wxApi, () => {
    wx.config({
      debug: options.debug || false,
      appId,
      timestamp,
      nonceStr,
      signature,
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
      ],
      // 开启小程序
      openTagList: ['wx-open-launch-weapp'],
    });

    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，
    // 所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。
    // 对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    wx.ready(() => readyCallback && readyCallback());
  });
}

export default WxShare;
