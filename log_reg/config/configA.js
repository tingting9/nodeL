var mysql = require('mysql');
var connection = {};  

//连接服务
connection.select=function(sql,param){
	 var promise = new Promise(function(resolve,reject) {//resolve成功,reject失败
        var result = null;
        var connection = mysql.createConnection({
		   
		});
		connection.connect();
        connection.query(sql, param,function (err, results, fields) { 
            if (err) { 
                reject(err); 
            };

            if (results.length == 0) {
                resolve({code:'1'});
            }else{
                resolve({code:'0',results:results});
            };
          } 
        );
        connection.end(); 
    })
    return promise; 
};

exports.getConnection = connection.select;