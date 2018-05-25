
  $(function(){ 
    //登陆
    $('.logBtn').on('click keydown','.btn_log',function(event){
        var username = $("#username").val().toLowerCase();
        var password = $("#keyword").val();
        var lastPage = $("#btn_log").attr('data-lastPage');//来源

        console.log(lastPage)
        var data = {"username":username,"keyword":password};

        if(username=='' || password==''){
            $(".msg").text('用户名或密码不能为空');
            return false
        };

        $.ajax({ 
            url:'/users/signup',
            type:'post',
            data: data,
            success: function(data,status){ 
                var code=data.code;
                if(code == 1){ //用户名或密码错误
                    $('.msg').text(data.msg);


                }else if(code==0){//成功
                    $('.msg').text(data.msg);
                    location.href = '/'+lastPage;
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




























