var express = require('express');
var router = express.Router();
var db=require('./class/db')
/* GET home page. */
//增删改
router.get('/',(req,res)=>{
  db.SqlParams("select * from user_tab order by id desc ",(err,rows)=>{
  console.log(err),
   console.log(rows)
   res.render('index',{Date:rows})
 })
  res.render('index.html');
});
 router.get('/add',(req,res)=>{
   res.render('add');
 });
 router.post('/add',(req,res)=>{
 db.sqlparam("insert into user_tab( account,name,password)vaule(?,?,?)",[
    req.body.account,
    req.body.name,
    req.body.password
 ]
 ,(res,rows)=>{
   console.log(err),
   console.log(row),
   res.redirect("/index")
 });
})

//登录
router.get('/login', function(req, res, next) {
  var response = {
    "name":req.query.name,
    "password":req.query.password,
};
var selectSQL = "select account,password from user where account = '"+req.query.account+"' and password = '"+req.query.password+"'";
//var selectSQL = "select password from user where account='"+req.query.account+"'";
var  addSqlParams = [req.query.account,req.query.password];
   connection.query(selectSQL,function (err, result) {
     if(err){
      console.log('[login ERROR] - ',err.message);
      return;
     }
     //console.log(result);
     if(result=='')
     {
         console.log("帐号密码错误");
         res.end("0");//如果登录失败就给客户端返回0，
     }
     else
     {
         console.log("OK");
         res.end("1");//如果登录成就给客户端返回1
     }
});
console.log(response);
//res.end(JSON.stringify(response));
})

app.get('/register.html', function (req, res) {
res.sendFile( __dirname + "/" + "register.html" );
})
  res.render('login.html');
//主要功能
router.get('/login/htai', function(req, res, next){
  res.render('htai.html')

});
module.exports = router;
