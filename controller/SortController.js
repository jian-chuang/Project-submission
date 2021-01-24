// 引入数据库封装模块
const dbquery = require("../model/sqlmodel");
const {success,fail,abnormal, argsfail,addsuess,addfail,editsuess, editfail} = require("../util/responseMessage");
const { response } = require("express");

let SortController = {};
// 文章分类网页接口
SortController.sort = (req,res)=>{
    res.render("classify.html")
}

// 文章分类数据获取接口
SortController.getsort = async (req,res)=>{
    let sql = "select * from sort order by sorts asc" 
    let data = await dbquery(sql)
    res.json(data)
}

// 文章分类数据删除操作接口
SortController.deleSort = async (req,res)=>{
    let {deleId} = req.body
    if(!deleId){
        // 参数有误
        res.json(abnormal)
    }else{
        id = parseInt(deleId)
        let sql = `delete from sort where id = ${deleId}`;
        let response;
        let result;
        try{
            result = await dbquery(sql);
            if(result.affectedRows){
                // 成功
                res.json(success)
            }else{
                // 失败
                res.json(fail)
            }
        }catch(err){
            // 异常
            response = argsfail;
        }
        res.json(response)
    }
}

// 文章分类自定添加页面接口
SortController.addSort = (req,res)=>{
    res.render('add-classify.html')
}

// 文章分类数据库添加数据接口
SortController.increase = async (req,res)=>{
    let {sort_name,sorts,date} = req.body;
    let sql = `insert into sort (sort_name,sorts,sort_date)values('${sort_name}','${sorts}','${date}')`
    let data = await dbquery(sql)
    if(data.affectedRows){
        res.json(addsuess);
    }else{
        res.json(addfail)
    }
}

// 文章分类编辑操作网页接口
SortController.edit = (req,res)=>{
    res.render('edit-classify.html')
}

// 文章分类编辑获取渲染数据方法
SortController.getEdit = async(req,res)=>{
    let {cat_id} = req.query;
    if(!cat_id){
        res.json(abnormal)
    }else{
        let sql = `select * from sort where id = ${cat_id}`;
        try{
            let data = await dbquery(sql)
            if(data.length){
                // 设置属性传到客户端方便去做判断
                data[0].errcode = 1006;
                res.json(data[0])
            }else{
                res.json(editfail)
            }
        }catch{
            res.json(editfail)
        }

    }
}


// 文章分类编辑按钮更新数据接口
SortController.upDate = async (req,res)=>{
    let {sort_name,sorts,date,catId} = req.body;
    let sql = `update sort set sort_name='${sort_name}',sorts='${sorts}',sort_date='${date}' where id='${catId}'`
    let data = await dbquery(sql)
    let response;
    try{
        if(data.affectedRows){
            res.json(editsuess)
        }else{
            res.json(editfail)
        }
    }catch{
        response = argsfail;
    }
    res.json(response)
}





module.exports = SortController