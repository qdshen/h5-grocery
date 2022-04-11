// 初始化微信分享参数
export interface WxShareInitOptions {
  // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  debug?: boolean;
  // 必填，公众号的唯一标识
  appId?: string;
  // 必填，生成签名的时间戳
  timestamp?: number;
  // 必填，生成签名的随机串
  nonceStr?: string;
  // 必填，签名
  signature?: string;
  // 非必填，js sdk地址
  wxjssdk?: string;
  callback?: () => void;
}

// 设置微信分享参数
export interface WxShareInfo {
  title?: string;
  desc?: string;
  link?: string;
  imgUrl?: string;
  type?: string;
  dataUrl?: string;
}
