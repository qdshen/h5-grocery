[toc]

### 背景

作为一个拥有多年工作经验的前端开发者来说，接触的微信 H5 和小程序相关的项目数不胜数。这里面涉及很多微信 API 的封装和调用，例如微信浏览器环境检测、小程序 axios 请求适配器、微信分享功能等。以前都是将代码拷来拷去，这样存在一些缺点，拷贝的过程有可能导致代码片段丢失，也无形中增加了工作量，不符合可复用性的终极理解。

这时我就在想，经常用的东西何不造一个库将这么多年的经验封藏，作为以后开发中的利器，也见证了自己成长的脚印。千呼万唤始出来，@grocery/weixin 这就诞生了。

### 介绍

@grocery/weixin 是 grocery 系列中的一员，grocery 可以翻译成杂货铺，理解成多年开发经验沉淀的宝库或许更为确切。从名字可以看出，weixin 这一系列，是宝库中关于微信开发相关的经验积累。

### 安装

Npm

```
npm install @grocery/weixin --save
```

Yarn

```
yarn add @grocery/weixin -S
```

### 目录结构

- lib ts 构建对应的 js 代码
- src
  - env 微信环境检测
  - miniprogram 微信小程序相关能力封装
  - share 微信分享相关能力封装
  - types 类型声明文件
  - utils 工具函数
- index.ts 入口文件

### 引入

所有模块统一暴露在根目录下，引入示例如下：

```
import { isWeChat, WxShare } from '@grocery/weixin';
```

### 使用文档

一、微信环境检测

```
isWeChat(): boolean     // 是否是微信环境
isWeChatPc(): boolean   // 是否是PC端微信环境
isWechatMp(): boolean   // 判断是否在小程序环境中
isQQ(): boolean         // 是否是QQ环境
```

二、微信小程序相关能力封装

```
todo
```

三、微信分享相关能力封装

```
WxShare.init(WxShareInitOptions);   // 初始化微信分享
WxShare.setShareInfo(WxShareInfo);  // 设置分享信息
```

微信分享设置教学（仅作参考）

```
import { isWeChat, WxShare } from '@grocery/weixin';

created() {
  this.initWxShare();
}

initWxShare() {
    // 非微信场景，则不请求微信签名
    // 微信签名的使用场景 1. 微信分享 2. 微信开放标签
    if (!isWeChat()) {
      return;
    }

    // 微信内直调服务端接口，查询微信签名
    qryWeChatSignature(location.href.replace(location.hash, ''))
      .then(({ data: { data: shareConfig } }) => {
        if (!shareConfig) {
          return;
        }

        const { appId, nonceStr, timestamp, signature } = shareConfig;

        const meetPath = getSharePath('/meet');
        const paramActId = getQueryString('aid') || '';
        const shareUrl =
          `${meetPath}/index.html?ent=${StatActSource.WechatWebShare}` +
          (paramActId ? `&aid=${paramActId}` : '');
        const shareImgUrl = `${meetPath}/img/` + getFileNameFromPath(shareimg);

        WxShare.init({
          appId,
          nonceStr,
          timestamp,
          signature,
          callback: () => {
            WxShare.setShareInfo({
              title: '看见词曲计划--词曲作品征集大赛·结果揭晓',
              desc: '每一首好的词曲，都应该被看见',
              link: shareUrl,
              imgUrl: shareImgUrl,
            });
          },
        });
      })
      .catch(() => {
        // 微信内查询签名失败
      });
  }
```

四、工具函数

```
loadScript(url, callback);  // 加载脚本文件
getSharePath(path);         // 获取分享页面url
getFileNameFromPath(path);  // 从文件路径中获取文件名
getQueryString(name);       // 获取查询字符串
```

### 微信分享的兼容性问题

todo
