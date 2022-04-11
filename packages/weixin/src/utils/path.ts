// 获取分享页面url
export function getSharePath(path: string) {
  const curUrl = location.href;
  const pathIndex = curUrl.indexOf(path);
  return pathIndex > -1
    ? curUrl.substring(0, pathIndex) + path
    : location.origin;
}

// 从文件路径中获取文件名
export function getFileNameFromPath(path: string) {
  const index = path.search(/[\w+\.]+$/);
  if (index === -1) {
    return '';
  }
  return path.substring(index);
}

function cached(fn: Function): Function {
  const cache = Object.create(null);
  return function (str: string) {
    const hit = cache[str];
    // eslint-disable-next-line no-return-assign
    return hit || (cache[str] = fn(str));
  };
}

// 获取查询字符串
export const getQueryString = cached((name: string) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
});
