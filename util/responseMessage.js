let responseMessage = {
    abnormal:{errcode:1005,message:"参数有误，请确认参数"},

    argsfail:{errcode:1007,message:"网络异常，请稍后再试"},

    success:{errcode:1000,"message":"删除成功"},

    fail:{errcode:1003,"message":"删除失败"},

    addsuess:{errcode:1002,message:"添加成功"},

    addfail:{errcode:1009,message:"添加失败"},

    editsuess:{errcode:1006,message:"编辑成功"},

    editfail:{errcode:1011,message:"编辑失败"}
}
module.exports = responseMessage;