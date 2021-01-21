
const express = require('express');
let app = express();
const path = require('path');
const sqlUtil = require("./util/sql-util");
const { success, fail, abnormal, argsfail } = require('./util/responseMessage.js')





// 模块引擎导入
const artTemplate = require('art-template');
const express_template = require('express-art-template');
const { response } = require('express');
// 模板引擎配置
//配置模板的路径
app.set('views', __dirname + '/views/');
//设置express_template模板引擎的静态文件扩展名为.html
app.engine('html', express_template);
//使用模板引擎扩展名为html
app.set('view engine', 'html');

// 静态资源托管，中间件
app.use('/public', express.static(path.join(__dirname, "public")))

// 接收post请求数据
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/index', (req, res) => {
    // res.sendFile(path.join(__dirname,'views/index.html'))
    res.render('index.html')
})
app.get("/", (req, res) => {
    res.redirect("/index")
})
// 分类页面
app.get('/classifys', (req, res) => {
    // res.sendFile(path.join(__dirname,'views/classify.html'))
    res.render('classify.html')
})
// 列表页面
app.get("/list", (req, res) => {
    // res.sendFile(path.join(__dirname,'views/listadd.html'))
    res.render("listadd.html")
})


// 获取数据库分类表的数据
app.get('/getsort', async (req, res) => {
    // 数据库查询
    let sql = 'select * from sort order by sorts asc';
    let data = await sqlUtil(sql);
    res.json(data)
})
// 接收客户端删除请求数据，校验并返回给客户端
app.post('/deleSort', async (req, res) => {
    let { Cat_id } = req.body;
    if (!{ Cat_id }) {
        res.json(argsfail)
    } else {
        // 这里的id指的是数据库中的id
        id = parseInt({ Cat_id });
        let sql = `delete from sort where id = ${Cat_id}`;
        let result;
        let response;
        try {
            result = await sqlUtil(sql);
            if (result.affectedRows) {
                response = success;
            } else {
                response = fail;
            }
        } catch (err) {
            response = abnormal;
        }
        res.json(response)

    }

})
app.listen(3000, () => {
    console.log("sever is running at port 3000");
})