
  $(function(){ 
    //注册
    $("#regBotn").click(function(){ 
        var username = $("#username").val().toLowerCase();
        var password = $("#keyWord").val();
        // var password2 = $("#keyWord2").val();
      
        var data = {"username":username,"password":password};
        console.log(data)
        $.ajax({ 
            url:'/users/signup',
            type:'get',
            data: data,
            success: function(data,status){ 
                var code=data.code;
                if(code == 1){ //用户名或密码错误
                    $('.msg').text(data.msg);

                }else if(code==0){//成功
                     // location.href = '/';
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