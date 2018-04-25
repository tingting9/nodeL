var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//连接服务器
var config = require('../config/config');
var configB = require('../config/configB');
// var session = require('cookie-session');
console.log(config)
//get请求参数对象 :',req.query/post请求参数对象 :',req.body 
router.route('/signup')
	//登录 
    .post(function(req, res) {
	    var username = req.body.username;
	    var password = req.body.keyword;
	  	
	  	var results = configB.getConnection('SELECT * FROM register where regName = "'+username+'";')
	  	console.log(results);
	    // config.getConnection('SELECT * FROM register where regName = "'+username+'";').then(function(data) {
	    // 	if (data.code == 1) {
     //                res.json({code:'1',msg:'没有该用户'});
     //        } ;
     //        if(data.code==0){
     //        	var oKey=data.results[0].keyword;
     //        	var oName=data.results[0].regName;

     //        	if(oKey == password && oName == username){
            		
     //        		//存cookie
     //        		res.cookie("user", {username: username}, {maxAge: 600000 , httpOnly: false});
            		
     //        		res.json({code:'0',msg:'登录成功'});
     //        	}else if(oName == username){
     //        		res.json({code:'1',msg:'密码错误'});
     //                res.location('/')
     //        	};
     //        };
	    //     res.end();
	    // }).catch(function(err){})
	})
	//注册
	.get(function(req, res) {
        var username = req.query.username; 
	    var password = req.query.password;
	    var dataInf= {"regName":username,"keyword":password};

		 config.getConnection('insert into register set ?',dataInf).then(function(data) {
		 	if(data.code==0){
		 		res.json({code:'0',msg:'注册成功'});
		 	}else if(data.code==1){
		 		res.json({code:'1',msg:'注册失败'});
		 	}
		 	res.end();
	    }).catch(function(err){})

  	})


module.exports = router;

