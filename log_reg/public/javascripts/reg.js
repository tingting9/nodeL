
  $(function(){ 
    //注册
    $("#regBotn").click(function(){ 
        var username = $("#username").val().toLowerCase();
        var password = $("#keyWord").val();
        // var password2 = $("#keyWord2").val();
        var data = {"username":username,"password":password};
        
        $.ajax({ 
            url:'/users/signup',
            type:'get',
            data: data,
            success: function(data,status){ 
                var code=data.code;
                if(code == 1){ //用户名或密码错误
                    $('.msg').text(data.msg);

                }else if(code==0){//成功
                     location.href = '/';
                };
            },
            error: function(data,status){ 
                if(status == 'error'){ 
                    // location.href = 'log';
                }
            }
        });
    });
    $('.boxTest p').click(function(event) {
        var oFrom = '山西';
        var oYear = 2011;
        var data = {'oFrom':oFrom,'year':oYear};
  
        $.ajax({
            url:'/users/publicA',
            type:'post',
            data:data,
            success:function(data,status){
                // var oImg=data.result[0].image.split('","');
                //     oImg=oImg[0];
                var oImg=data.result[0].faceImg;
               $('img').attr({src: oImg});
            },
            error:function(data,status){

            }

        })
        /* Act on the event */
    });;
});