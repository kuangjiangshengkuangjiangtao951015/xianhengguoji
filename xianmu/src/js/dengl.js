;(function(){
    function addCookie(key, value, day) {
        var date = new Date(); //创建日期对象
        date.setDate(date.getDate() + day);
        document.cookie = key + '=' + encodeURI(value) + ';expires=' + date;
    }
    $('.butt').on('click',function(){
         $.ajax({
             type:'post',
             url:'../../php/dengl.php',
             data:{
                 ustna:$('#username').val(),
                 passab:$('#password').val(),
             }
         }).done(function(dd){
             if(dd){
                 $('.butt').attr('href','index.html');
             }else {
                  $('#error').css('color','red').html('你输入的用户不存在'),
                 $('.butt').attr('href','##');
             }
         })
    })



})()














