const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  //写了下面这个部分，就实现了按需加载，再也不需要再每个页面里面都引入“antd/dist/antd.css”啦
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    libraryDirectory: "es",
    style: true, //这里一定要写true，css和less都不行哦
  }),
  //引入less
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@brand-primary": "#1cae82",
      // "@primary-color": "#1cae82",
    }, //自定义主题
  })
);
