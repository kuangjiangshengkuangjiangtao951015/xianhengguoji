;(function($){
	 var $ustname=$('.ustname');
	 var $pass=$('.pass');
	 var $passaa=$('.passaa');
	 var $email=$('.email');
	 var $phone=$('.phone');
	 var $safety=$('.safety');
	 var $yzm_b=$('.yzm_b');
     var $submit_tijiao=$('submit_tijiao');
     var $ustval=$ustname.val();
     var $passval=$pass.val();
     var $passaaval=$passaa.val();
     var $emailval=$email.val();
     var $phoneval=$phone.val();

     /*开关*/
	  var $ustkai=false;
	  var $passkai=false;
	  var $passaakai=false;
	  var $emailkai=false;
	  var $phonei=false;


	 $ustname.on('blur',function(){/*用户名*/
     var reg1 = /^([\u4e00-\u9fa5]|\w){4,20}$/;
	 	 $ustval=$(this).val();
	 	 if($ustval !=''){
	 	 	 if(reg1.test($ustval)){
	 	 	 	$.ajax({
                    type: 'post',
                    url: '../../php/zhuc.php',
                    async: true, //异步
                    //dataType:,//数据类型
                    data: {
                        repeatname: $ustval
                    }
				}).done(function(d){
					console.log(d);
					if(!d){
                        $('span').eq(0).css('color','blue').html('√');
                        $ustkai=true;
					}else{
                        $('span').eq(0).css('color','red').html('用户名已经存在');
                        $ustkai=false;
					}
				});
	 	 	 }else{
	 	 	 		$('span').eq(0).css('color','red').html('内容格式不对');
                   $ustkai=false;
	 	 	 }
	 	 }else{
	 	 	$('span').eq(0).css('color','red').html('内容不能为空');
             $ustkai=false;
	 	 }
	 	  })


	 	 $pass.on('blur',function(){/*设置密码*/

          var reg2 = /^[\w | \W]{6,20}$/;
	 	     $passval=$(this).val();
	 	 if($passval !=''){
	 	 	 if(reg2.test($passval)){
	 	 	 	$('span').eq(1).css('color','blue').html('√');
                 $passkai=true;
	 	 	 	/*判断密码的强弱*/
	 	 	 	        var level=0;//等级
						var num=/\d+/;
						var zimu=/[a-zA-Z]+/;
						var other=/[\W]+/;
						if(num.test( $passval)){
							level++;
						}
	 	 	 	        if(zimu.test( $passval)){
							level++;
						}
	 	 	 	        if(other.test( $passval)){
							level++;
						}

	 	 	 	        switch(level){
	 	 	 	        	case 1:$safety.find('a').css('background','red');break;

	 	 	 	        	case 2:$safety.find('i').css('background','orange');break;

	 	 	 	        	case 3:$safety.find('strong').css('background','lawngreen');break;
	 	 	 	        }

	 	 	 }else{
	 	 	 		$('span').eq(1).css('color','red').html('内容格式不对');
                 $passkai=false;
	 	 	 }
	 	 }else{
	 	 	$('span').eq(1).css('color','red').html('内容不能为空');
             $passkai=false;
	 	 }
	 	});


	 	 $passaa.on('blur',function(){/*确认密码*/
       var reg21= /^\w{6,20}$/;
	 	 $passaaval=$(this).val();
	 	 if($passaaval !=''){
	 	 	 if(reg21.test($passaaval) && $passaaval==$pass.val()){
	 	 	 	$('span').eq(2).css('color','blue').html('√');
                 $passaakai=true;
	 	 	 }else{
	 	 	 		$('span').eq(2).css('color','red').html('两次输入的密码不一致');
                 $passaakai=false;
	 	 	 }
	 	 }else{
	 	 	$('span').eq(2).css('color','red').html('内容不能为空');
             $passaakai=false;
	 	 }
	 	});

	 	 $email.on('blur',function(){/*设置邮箱*/
          var reg3 =/^([\w][\w\-]+)\@([\w][\w\-]+)\.([\w][\w\-]+)$/;
	 	  $emailval=$(this).val();
	 	 if($emailval !=''){
	 	 	 if(reg3.test($emailval)){
	 	 	 	$('span').eq(5).css('color','blue').html('√');
                 $emailkai=true;
	 	 	 }else{
	 	 	 		$('span').eq(5).css('color','red').html('内容格式不对');
                 $emailkai=false;
	 	 	 }
	 	 }else{
	 	 	$('span').eq(5).css('color','red').html('内容不能为空');
             $emailkai=false;
	 	 }
	 	});

	 	$phone.on('blur',function(){/*设置手机号码*/
          var reg4 =/^\d{11}$/;
	 	  $phoneval=$(this).val();
	 	 if($phoneval !=''){
	 	 	 if(reg4.test($phoneval)){
	 	 	 	$('span').eq(6).css('color','blue').html('√');
                 $phonei=true;
	 	 	 }else{
	 	 	 		$('span').eq(6).css('color','red').html('内容格式不对');
                 $phonei=false;
	 	 	 }
	 	 }else{
	 	 	$('span').eq(6).css('color','red').html('内容不能为空');
             $phonei=false;
	 	 }
	 	});
	    $yzm_b.on('click',function(){


	 		function num(){
			var arr=[];
			var str=''
			for (var i=48;i<=57;i++) {
				arr.push(String.fromCharCode(i))
			}
			for(var i=97;i<=122;i++){
				arr.push(String.fromCharCode(i));
			}
			for (var i=0;i<4;i++) {
				var random=parseInt(Math.random()*arr.length);
				if(random>9){
					var bool=Math.random()>0.5?true:false;
					if(bool){
						str+=arr[random].toUpperCase();
					}else{
						str+=arr[random]
					}
				}else{
					str+=arr[random]
				}
			}
			return $yzm_b.html(str);
		}
			num()

	 	});
	    /*提交时判断内容是否完成*/
    $('#form_mian').on('submit',function () {

       if( $ustval==''){
           $('span').eq(0).css('color','red').html('内容不能为空');
           $ustkai=false;
	   }
        if($passval ==''){
            $('span').eq(1).css('color','red').html('内容格式不对');
            $ustkai=false;
        }
        if($passaaval ==''){
            $('span').eq(2).css('color','red').html('两次输入的密码不一致');
            $ustkai=false;
        }
        if($emailval ==''){
            $('span').eq(5).css('color','red').html('内容格式不对');
            $ustkai=false;
        }
        if($phoneval ==''){
            $('span').eq(6).css('color','red').html('内容格式不对');
            $ustkai=false;
        }

	   if (!$ustkai && !$passkai && !$passaakai && !$emailkai && !$phonei){
           return false;
	   }
    })



})(jQuery)
