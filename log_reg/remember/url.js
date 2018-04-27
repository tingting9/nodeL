
var http = require('http');
var url = require("url"); 


//http://localhost:4009/pangzi/yunpu/1.html?age=19&name=yunpu&addr=beijing

var server = http.createServer(function(req,res){
	var pathName=url.parse(req.url);//要解析的 URL 字符串。
	console.log(pathName)
	 // Url {
		 //  protocol: null,
		 //  slashes: null,
		 //  auth: null,
		 //  host: null,
		 //  port: null,
		 //  hostname: null,
		 //  hash: null,
		 //  search: '?age=19&name=yunpu&addr=beijing',
		 //  query: 'age=19&name=yunpu&addr=beijing',      如需json格式，url.parse(req.url,true)
		 //  pathname: '/pangzi/yunpu/1.html',
		 //  path: '/pangzi/yunpu/1.html?age=19&name=yunpu&addr=beijing',
		 //  href: '/pangzi/yunpu/1.html?age=19&name=yunpu&addr=beijing'
	 // }

});
server.listen(4009);