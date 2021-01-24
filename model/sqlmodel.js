// 导入mysql模块
var mysql = require('mysql');
// 数据库连接
const dbconfig = require('../config/dbconfig.json')
var connection = mysql.createConnection({
    ...dbconfig
});
//连接mysql
connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log('connect mysql success');
});

// 分类表函数封装
function dbquery(condition) {
    return new Promise((resolve, reject) => {
        connection.query(condition, (err, rows) => {
            if (err) { reject(err) }
            // 返回数据
            resolve(rows)
        })
    })
}
// dbquery暴露全局
module.exports = dbquery;