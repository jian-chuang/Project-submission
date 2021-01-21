// 服务器返回的所有信息定义为一个常量，好维护
const responseMessage = {
    argsfail:{ errcode: '1004', 'message': '参数出错' },
    success:{ errcode: '1000', 'message': '删除成功' },
    fail:{ errcode: '1002', 'message': '删除失败，稍后重试' },
    abnormal:{ errcode: '1004', 'message': '服务器繁忙，稍后重试' }
}