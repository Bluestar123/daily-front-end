module.exports = {
  title: '每日前端',
  description: '我的个人网站',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }],
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[
      {text: '前端日常', link: '/foo/' },
      {text: '算法刷一刷', link: '/algorithm/'},
      {text: 'Github', link: 'https://baidu.com'}      
    ],
	sidebar: {
      '/foo/': [{
			title: 'foo',
			collapsable: false, 
			children: [
				{ title: 'items01', path:'/foo/one'},
				{ title: 'items02', path:'/foo/two'}
			]
	  }]
    },
    sidebarDepth: 1,
  }
};