// webpage4.0

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');// 生成html插件
const CleanWebpackPlugin = require('clean-webpack-plugin');// 删除dist中未用到的文件

module.exports = {
  entry: {
     app: './src/index.js',
     print: './src/print.js'
   },  
   plugins: [// 插件配置
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: '管理输出'
    })
   ],
  output: {// 出口
    filename: '[name].bundle.js',// 打包后文件名
    path: path.resolve(__dirname, 'dist'),//打包后静态文件地址， __dirname node全局变量（任何模块里都能用），为当前模块的目录路径。path.resolve() 方法将路径或路径片段的序列解析为绝对路径。
  },
};