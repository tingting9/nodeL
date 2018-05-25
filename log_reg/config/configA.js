var mysql = require('mysql');
var connection = {};  

//连接服务
connection.select=function(sql,param){
	 var promise = new Promise(function(resolve,reject) {//resolve成功,reject失败
        var result = null;
        var connection = mysql.createConnection({
		    host:'qdm114284563.my3w.com',
            user:'qdm114284563',
            password:'whfstt1985',
            database:'qdm114284563_db',  //鏁版嵁搴撳悕绉[13;12H port:'3306'
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