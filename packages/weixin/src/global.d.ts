declare let wx: any;
declare let mqq: {
  data: any;
};

interface Window {
  // 代理层接口请求地址
  apiBaseUrl: string;
  // 水滴埋点全局对象
  _wa: any;

  wx?: any;

  mqq?: any;

  defaulActID?: string;

  wxBaseReqUrl: string;

  // 微信小程序全局变量  ios
  __wxjs_environment?: string;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.mp4';
