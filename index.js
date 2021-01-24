const express = require('express');
let app = express();
const path = require('path')
// 引入路由模块
const router = require("./router/router.js")


// 模块引擎导入
const artTemplate = require('art-template');
const express_template = require('express-art-template');

//配置模板的路径
app.set('views', __dirname + '/views/');
//设置express_template模板引擎的静态文件扩展名为.html
app.engine('html', express_template);
//使用模板引擎扩展名为html
app.set('view engine', 'html');

// 静态资源托管，中间件
app.use('/public', express.static(path.join(__dirname, "public")))
// 接收post请求数据,中间件
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// 调用路由接口
app.use(router)

// 服务器端口
app.listen(3000, () => {
    console.log("sever is running at port 3000");
})