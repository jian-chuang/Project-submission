const express = require("express");
var router = express.Router();
const SortController = require("../controller/SortController.js")
const indexController = require('../controller/indexController.js')
const listController = require('../controller/listController')
// 主页接口
router.get('/index',indexController.index)
// 定向重制主页接口
router.get('/',indexController.root)
// 文章列表接口
router.get("/list",listController.list)
// 文章分类接口
router.get('/sort',SortController.sort)
// 文章分类数据接口
router.get("/getsort",SortController.getsort)
// 文章分类删除数据接口
router.post('/deleSort',SortController.deleSort)
// 文章分类自定义添加分类接口
router.get('/addSort',SortController.addSort)
// 文章分类增加数据接口
router.post('/increase',SortController.increase)



// 文章分类编辑页面接口
router.get('/edit',SortController.edit)
//文章分类编辑获取渲染数据接口
router.get('/getEdit',SortController.getEdit)

// 文章分类编辑更新数据接口
router.post('/upDate',SortController.upDate)



// 全局暴露
module.exports = router;