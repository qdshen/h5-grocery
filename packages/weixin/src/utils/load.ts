// 加载脚本文件
export function loadScript(url: string, callback?: () => void) {
  // 兼容服务端渲染模式
  if (!window) return;
  const scriptElem = document.createElement('script');
  if (callback) {
    scriptElem.onload = callback;
  }

  scriptElem.async = true;
  scriptElem.src = url;
  document.head.appendChild(scriptElem);
}
