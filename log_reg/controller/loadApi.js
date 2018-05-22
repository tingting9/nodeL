

/**
  by tingting  20180516
  接口
  页面loading时 需要加载数据
**/

var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//连接服务器
var config = require('../config/config');

/**
get请求参数对象req.query
post请求参数对象req.body 
**/     

var loadApi = function(){

    //我的旅游图片 list
    this.getAllImage =function(callback){
        config.getConnection('SELECT adress,title,year,faceImg,listName,images FROM imgall',{},function(data){

            //接口成功
            if(data.code == 0){
                var oResult=data.results;
                var ImgURL='';

                //遍历所有的images
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
            };
            // console.log('-------------',data.results[1].allImg);
            callback&&callback(data);
        });
    };
};

var oWork = new loadApi();
module.exports = oWork;

