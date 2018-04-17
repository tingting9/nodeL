var express = require('express');
var path = require('path');
var app = express();


var index = require('./routes/index');
var users = require('./routes/users');

//解释post、get请求，解析请求参数值
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//cookie
var cookieParser = require('cookie-parser');
app.use(cookieParser());


// view engine setup
app.set('views', path.join(__dirname, 'views'));   //设置模板资源路径
app.set('view engine', 'ejs');                     //设置模板引擎，代表视图后缀名是ejs


app.use('/', index); //模版
app.use('/users', users);//接口


//指定静态资源位置 *托管静态文件 (下面个方法相同)
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname + '/public'));
//访问静态资源地址，http://localhost:3000/images/3.jpg
//_dirname变量获取当前模块文件所在目录的完整绝对路径

module.exports = app;
