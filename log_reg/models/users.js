var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var getApi = require('../controller/loadApi');

//我的旅游图片 接口
var oData=function(){

    this.loadImg=function(req,res){
        var name='';
        if(req.cookies.user != null){
            name=req.cookies.user;
        };

        getApi.getAllImage(function(data){
            if(data.code == 0){//成功
                    res.render('allImage',{user:name.username,title: '我在旅游',list:data.results});
            }else if(data.code == 1){ //失败
                    res.render('allImage',{user:userName,title: '我在旅游'});
            };
            
        });
       
    };
};
var od= new oData();
module.exports = od;

