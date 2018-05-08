var express = require('express');
var router = express.Router();

// 设计变量和方法
var app =express();
app.locals.title='自定义变量';

/* GET home page. */
router.get('/', function(req, res, next) {
	res.setHeader('content-type', 'text/html;charset=uft8');
  if(req.cookies.user != null){
    console.log(req.cookies.user,'已登录过')
    req.user=req.cookies.user;//已登录
  };
 
  res.render('index', {title: '云朴',supplies: ['mop', 'broom', 'duster'] , userlist:[ {'username':'sun'},{'username':'yy'},{'username':'2312'},{'username':'ghfh'},{'username':'yy'}]});
});
router.get('/ss', function(req, res, next) {
  res.render('error', { title: '错误' });
});
router.get('/send', function(req, res, next) {
  res.send(app.locals.title);
});
router.get('/log', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.render('log', { title: '登录' });
});
router.get('/reg', function(req, res, next) {
    res.render('reg', { title: '注册' });
});


//--------------------------------------------
//本地mongoose库的连接方法

// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise; //创建模型
        
// var conn = mongoose.connect('mongodb://127.0.0.1:27017/yourdb');

// //定义模式
// var User = new mongoose.Schema({
//     name: String,
//     // email: String,
//     age: String
// });
// var myModel = conn.model('user', User);
// //获得数据库中的集合(类似关系数据库中的表)

// /*调试模式是mongoose提供的一个非常实用的功能，用于查看mongoose模块对mongodb操作的日志，一般开发时会打开此功能，以便更好的了解和优化对mongodb的操作。*/
// mongoose.set('debug', true);

//  // GET index listing. 
// router.get('/mongo', function(req, res, next) {

//     myModel.find({}, function (err, user) {
//       console.log(user)
//         res.render('indexMongo',{ title: 'DKSI',user:user});
//         // res.sendFile("http://www.baidu.com")
//     });
// });

// //是否连接成功
// conn.connection.on("error", function (error) {  
//   // console.log("数据库连接失败：" + error); 
// }); 
// conn.connection.on("open", function () {  
//   // console.log("数据库连接成功"); 
// });
//本地mongoose库的连接方法
//-------------------------------------------


module.exports = router;
