
export default {
    title: 'WEB空间站', //站点标题
    themeConfig: {
        siteTitle: "WEB空间站",
        plugins: ['autobar'],
        sidebar: [
            {
              text: "工具",
              items: [
                {
                  text: "首页",
                  link: "pages/index",
                },
                {
                  text: "网站导航",
                  link: "pages/nav/index",
                },
            
              ],
            },
      
          ],
      },
}