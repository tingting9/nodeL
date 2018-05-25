var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var getApi = require('../controller/loadApi');
var url = require("url"); 

//我的旅游图片 接口
var oData=function(){

    //我的旅游图片  列表页
    this.loadImg=function(req,res){
        var pathName=url.parse(req.url,true);
        var oYear = pathName.query.oYear;
        var oMont = pathName.query.oMont;
        
        var name='';
        if(req.cookies.user != null){
            name=req.cookies.user;
        };

        getApi.getAllImage(function(data){
            if(data.code == 0){//成功
               
                if(oYear !=null && oMont == null){  
                    //某年的全部月份列表
                    res.render('everyYear',{user:name.username,title: '我在旅游',list:data.results[oYear]});

                }else if(oYear !=null && oMont != null){
                    //某年某次旅行的列表
                    res.render('imagePage',{user:name.username,title:'月份',list:data.results[oYear],oMont:oMont});

                }else{
                    //进入全部年份列表
                    res.render('yearList',{user:name.username,title: '旅游年份',list:data.results});

                };

            }else if(data.code == 1){ //失败
                res.render('allImage',{user:userName,title: '我在旅游'});
            };
            
        });
       
    };
};
var od= new oData();
module.exports = od;

