
  $(function(){ 
    //登陆
    $("#btn_log").click(function(){ 
        var username = $("#username").val().toLowerCase();
        var password = $("#keyword").val();
        var data = {"username":username,"keyword":password};
        $.ajax({ 
            url:'/users/signup',
            type:'post',
            data: data,
            success: function(data,status){ 
                var code=data.code;
                if(code == 1){ //用户名或密码错误
                    $('.msg').text(data.msg);

                }else if(code==0){//成功
                     // location.href = '/';
                    $('.msg').text(data.msg);
                };
            },
            error: function(data,status){ 
                if(status == 'error'){ 
                    // location.href = 'log';
                }
            }
        });
    });
});




























