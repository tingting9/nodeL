var express = require('express');
var router = express.Router(); // 产生实例对象
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

	  	config.getConnection('SELECT * FROM register where regName = "'+username+'" and keyword = "'+password+'";',{},function(data){
            console.log(data)
	  		if (data.code == 1) {
                    res.json({code:'1',msg:'用户名错误或者密码错误'});
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
        config.getConnection('SELECT * FROM register where regName = "'+username+'";',{},function(data){;
            
            if(data.code==1){//用户名 没有重名
                config.getConnection('insert into register set ?;',dataInf,function(data){
                    if(data.code==0){
                        res.cookie("user", {username: username}, {maxAge: 100000 , httpOnly: false});
                        res.json({code:'0',msg:'注册成功'});
                        
                    }else if(data.code==1){
                        res.json({code:'1',msg:'注册失败'});

                    };
                });
            }else if(data.code==0){ //用户名 已存在
                res.json({code:'1',msg:'用户名已存在'});
            };
        })
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
    .get(function(req,res){//获取图片  我的图片页 yearList
        config.getConnection('SELECT adress,title,year,faceImg,listName,images,id  FROM imgall',{},function(data){
            if(data.code == 1){
                res.json({code:'1',msg:'没有相关内容'});

            }else if(data.code == 0){
              
                var oResult=data.results;
                var ImgURL='';
              
                //遍历所有的images 转换格式
                for(var i=0;i<oResult.length;i++){
                    var oIdata=oResult[i].images;
                    var oYear=oResult[i].year;
                    var allImg=[];

                    //如有图片
                    if(oIdata!=null){
                        var oData=JSON.parse(oIdata);//images已转成json
                     
                        //遍历当前images  生面url
                        for(var j=0;j<oData.length;j++){
                            var oUrl= oData[j][0];
                            var oNum= oData[j][1];
                            var ImgURL=[];
                            for(var v=1;v<=oNum;v++){
                                var oString='http://www.sun1985.com/phongTour/'+oYear+'/'+oUrl+'/'+v+'.jpg';
                                ImgURL.push(oString);
                            };   
                            allImg.push(ImgURL);

                        };
                        //存储生成的url 为arr
                        oResult[i].allImg=allImg;
                    };

                    //遍历地名
                    var oIdataName=oResult[i].listName;
                    var oDataName=JSON.parse(oIdataName);//images已转成json
                    oResult[i].listName=oDataName;
                };
                
                res.json({code:'0',msg:'查询成功',result:data.results})
            };
        });
    });

module.exports = router;

