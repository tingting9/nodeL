
  $(function(){ 
    //我的图片
    $(window).load(function() {
      //全部年份列表
      $('#imgAll').on('click','.boxPhList',function(event){
         var oYear = $(this).index();
         location.href = '/everyYear?oYear='+oYear;

      });//某年的月份列表
      $('#imgAllDiv').on('click','.imgLiDiv span',function(event){
        var oYear = $('.getYear').attr('data-id')-1;
        var oMonth = $(this).attr('data-month');
        location.href = '/imagePage?oYear='+oYear+'&&oMont='+oMonth;

      });

      var $container = $('#masonry');
      $container.imagesLoaded(function() {
          $container.masonry({
              itemSelector: '.imgSrc',
              gutter: 5,
              isAnimated: true
          });
       });

	     // $.ajax({ 
      //       url:'/users/publicA',
      //       type:'get',
      //       data: {},
      //       success: function(data,status){ 
      //           var code=data.code;
      //           if(code == 1){ //用户名或密码错误
      //               $('.errMsg').text(data.msg);


      //           }else if(code==0){//成功
      //           	// console.log(data.msg);
      //            //    console.log(data);
               
      //           };
      //       },
      //       error: function(data,status){ 
      //           if(status == 'error'){ 
      //               // location.href = 'log';
      //           }
      //       }
      //   });
	});
   
});
