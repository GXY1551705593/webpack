const path = require("path")  // nodejs 核心模块，专门用来处理路径问题

module.exports = {
    // 入口,指示webpack从哪个文件开始打包
    entry: "./src/main.js",
    // 输出, 指示webpack打包完的文件输出到哪里去，如何命名等
    output: {
        path: path.resolve(__dirname,'dist') ,
        filename: 'main.js', // 文件名
    },
    // 加载器，webpack本身只能处理js、json等资源，其他资源需要借助loader,webpack才能解析
    module: {
        rules: [

        ],
    },
    // 插件，拓展webpack的功能
    plugins: [

    ],
    // 模式，主要有两种模式：
        // 开发模式： development; 生产模式：production
    mode: 'development'
}