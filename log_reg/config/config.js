var mysql = require('mysql');
var connection = {};  

//连接服务

connection.select=function(sql,param,callback){
    var result = null;
    var connection = mysql.createConnection({
	      host:'qdm114284563.my3w.com',
            user:'qdm114284563',
            password:'whfstt1985',
            database:'qdm114284563_db',  //鏁版嵁搴撳悕绉[13;12H port:'3306'
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
