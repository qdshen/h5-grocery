// 安卓正则
export const REG_ANDROID = /Android|Adr/;

// iOS正则
export const REG_IOS = /\(i[^;]+;( U;)? CPU.+Mac OS X/;

// 手机号码
export const REG_PHONE = /^1(2|3|4|5|6|7|8|9)\d{9}$/;

// 传真
export const REG_FAX = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;

// 邮箱
export const REG_EMAIL = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

// 身份证号码
export const REG_IDCARD = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

// 网址
export const REG_URL =
  /^(http|https):\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[/=?%\-&_~`@[\]':+!]*([^<>""])*$/;

// 邮政编码
export const REG_POSTCODE = /^[0-9]{6}$/;

// 统一社会信用代码
export const REG_FAITHCODE = /^[a-zA-Z0-9]{18}$/;

// 车牌
export const REG_CARPLATE =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;

// 金额
export const REG_MONEY = /(^[0-9]{1,}$)|(^[0-9]{1,}[.]{1}[0-9]{1,2}$)/;

// 银行卡号
export const REG_BANKCARD = /^([1-9]{1})(\d{15}|\d{16}|\d{18})$/;

// 汉字姓名
export const REG_CHINESENAME = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
