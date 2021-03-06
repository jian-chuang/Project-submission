let listController = {};
// let mockdata = require('../mockData/mock-list.json')
const dbquery = require("../model/sqlmodel");
const { success, fail } = require("../util/responseMessage");

listController.list = (req,res)=>{
    res.render("list.html")
}
// 数据渲染
listController.getlist = async (req,res)=>{
    let {page,limit:pagesize} = req.query;
    let offest = (page - 1) * pagesize;
    // 分页
    let sql = `select * from article limit ${offest},${pagesize}`;
    // 查询总数据的条数
    let sql2 = `select count(*) as count from article`;
    // 分页sql语句调用
    let promise = dbquery(sql);
    // 查询总数据条数sql语句调用；返回结果是数组[],数组中的值是一个对象
    let promise2 = dbquery(sql2);
    // 封装promise函数，串型变并型
    let result = await Promise.all([promise,promise2]);
    let data = result[0];
    let count = result[1][0].count
    let response = {
        code:0,
        count:count,
        data:data,
        msg:''
    }
    res.json(response)
    // res.json(mockdata)
}
// 数据删除操作
listController.artDel = async (req,res)=>{
    let {art_id} = req.body;
    console.log(art_id);
    let sql = `delete from article where art_id = ${art_id}`
    let result = await dbquery(sql)
    if(result.affectedRows){
        res.json(success)
    }else{
        res.json(fail)
    }
}
module.exports = listController