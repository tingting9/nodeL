var mysql = require('mysql');
var connection = {};  

//连接服务

connection.select=function(sql,param,callback){
    var result = null;
    var connection = mysql.createConnection({
	   
	});
	connection.connect();

    connection.query(sql,param,function (err, results, fields) { 
        if (err) { 
            console.log(err); 
        };
        if (results.length == 0) {
            callback({code:'1'});
        }else{
            callback({code:'0',results:results});
        };
      } 
    );
    connection.end(); 
};

exports.getConnection = connection.select;
