const rootStyles = getComputedStyle(document.documentElement);
const themeColor = rootStyles.getPropertyValue("--main-theme-color").trim();

// تنظیم مقدار متا تگ
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
themeColorMeta.setAttribute("content", themeColor);
