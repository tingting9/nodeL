var mysql = require('mysql');
var connection = {};  

//连接服务
        var result = null;
        var connection = mysql.createConnection({
		    host:'qdm114284563.my3w.com',
		    user:'qdm114284563',
		    password:'whfstt1985',
		    database:'qdm114284563_db',  //数据库名称
		    port:'3306'
		});
		connection.connect();
        var sql ='SELECT * FROM register where regName = "'+username+'";';
        connection.query(sql, {},function (err, results, fields) { 
            if (err) { 
                console.log(err); 
            };

            if (results.length == 0) {
                 console.log({code:'1'});
            }else{
                 console.log({code:'0',results:results});
            };
          } 
        );
        connection.end(); 


