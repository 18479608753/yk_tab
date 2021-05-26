const mysql = require('mysql');
var mysqlConnect= {}; 

var pool = mysql.createPool({
    connectLimit:10,
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "node_work"
});

mysqlConnect.sql=function (query,callback) {
    if(!query){
        callback();
        return;
    }
    pool.query(query,function (err,rows,fields) {
       if(err){
           callback(err,null);
           return;
       }
       callback(null,rows,fields);
    });
};
mysqlConnect.sqlparam=function (query,param,callback) {
    if(!query){
        callback();
        return;
    }
    pool.query(query,function (err,rows,fields) {
       if(err){
           callback(err,null);
           return;
       }
       callback(null,rows,fields);
    });
};
module.exports = mysqlConnect;
