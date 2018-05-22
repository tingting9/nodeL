var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//连接服务器
var config = require('../config/config');

/**
get请求参数对象req.query
post请求参数对象req.body 
**/     

router.route('/signup')
	//登录 
    .post(function(req, res) {
	    var username = req.body.username;
	    var password = req.body.keyword;
	  	config.getConnection('SELECT * FROM register where regName = "'+username+'";',{},function(data){

	  		if (data.code == 1) {
                    res.json({code:'1',msg:'没有该用户'});
            } ;
            if(data.code==0){
            	var oKey=data.results[0].keyword;
            	var oName=data.results[0].regName;

            	if(oKey == password && oName == username){
            		//存cookie
            		res.cookie("user", {username: username}, {maxAge: 1000000 , httpOnly: false});
            		res.json({code:'0',msg:'登录成功'});

            	}else if(oName == username){
            		res.json({code:'1',msg:'密码错误'});
                    
            	};
            };
	        res.end();
	  	});
	})
	//注册
	.get(function(req, res) {
        var username = req.query.username; 
	    var password = req.query.password;
	    var dataInf= {"regName":username,"keyword":password};

        config.getConnection('insert into register set ?;',dataInf,function(data){
            if(data.code==0){
                res.cookie("user", {username: username}, {maxAge: 100000 , httpOnly: false});
                res.json({code:'0',msg:'注册成功'});
                
            }else if(data.code==1){
                res.json({code:'1',msg:'注册失败'});

            };
        });
  	});

router.route('/publicA')
    //查询数据
    .post(function(req,res){
        var oAdress = req.body.oFrom;
        var oYear = req.body.year;

        config.getConnection('SELECT * FROM imgall where  adress  = "'+oAdress+'" and year = "'+oYear+'"',{},function(data){
            if(data.code == 1){
                res.json({code:'1',msg:'没有相关内容'});
            }else if(data.code == 0){
                res.json({code:'0',msg:'查询成功',result:data.results})
            }
        });
    })
    .get(function(req,res){//获取图片  我的图片页 allimage
        config.getConnection('SELECT adress,title,year,faceImg,listName,images  FROM imgall',{},function(data){
            if(data.code == 1){
                res.json({code:'1',msg:'没有相关内容'});

            }else if(data.code == 0){
                res.json({code:'0',msg:'查询成功',result:data.results})
            };
        });
    });

module.exports = router;

