// 是否是微信环境
export function isWeChat(): boolean {
  return !!navigator.userAgent.match(/MicroMessenger\/([\d.]+)/i);
}

// 是否是PC端微信环境
export function isWeChatPc(): boolean {
  return !!navigator.userAgent.match(/WindowsWechat/i);
}

// 判断是否在小程序环境中
export const isWechatMp = () => {
  return (
    isWeChat() &&
    (navigator.userAgent.match(/miniprogram/i) ||
      window.__wxjs_environment === 'miniprogram')
  );
};

// 是否是QQ环境
export function isQQ(): boolean {
  return !!navigator.userAgent.match(/QQ\/([\d.]+)/);
}
