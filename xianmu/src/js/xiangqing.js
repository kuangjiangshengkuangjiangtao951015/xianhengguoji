;(function(){
      var $zbox=$('.wrap');
      var $xbox=$('#spic');
      var $dabox=$('#bf');
      var $xf=$('#sf');
      var $datu=$('#bpic');
      var $listli=$('#list li');

      $xbox.hover(function(){
          $dabox.css('visibility','visible')/*大放*/
          $xf.css('visibility','visible')/*小放*/
          $xf.css({/*小放宽高*/
              width:$xbox.width()*$dabox.width()/$datu.width(),
              height:$xbox.height()*$dabox.height()/$datu.height(),
          });
          var $aa=$dabox.width()/$xf.width()
           /*小放跟随鼠标*/
          $(this).on('mousemove',function(ev){
              var $left=ev.pageX-$zbox.offset().left-$xf.width()/2;
              var $top=ev.pageY-$zbox.offset().top-$xf.height()/2;
              if ($left<0){/*左边*/
                  $left=0;
              }
              if ($top<0){/*上面*/
                  $top=0;
              }
              if ($left>$xbox.width()-$xf.width()){/*右边*/
                  $left=$xbox.width()-$xf.width();
              }
              if ($top>$xbox.height()-$xf.height()){/*右边*/
                  $top=$xbox.height()-$xf.height();
              }
             $xf.css({
                 left:$left,
                  top:$top
             });
              $datu.css({
                  left:-$left*$aa,
                  top:-$top*$aa
              });
          })
      },function(){
          $dabox.css('visibility','hidden')/*大放*/
          $xf.css('visibility','hidden')/*大放*/
      })
      /*点击li 小盒子大放大镜显示li的内容*/
    $listli.on('click',function(){
         var $xli=$(this).find('img').attr('src');
           $xbox.find('img').attr('src',$xli);
           $dabox.find('img').attr('src',$xli);
    })
    ;(function(){
        var sibarr=[];/*放cookie的地方*/
        var numarr=[];/*数字*/
        function getcookievalue() {
            if (getCookie('cartsid')) {//cartsid：cookie里面id的名称
                sidarr = getCookie('cartsid').split(',');//cookie转数组
            }
            if (getCookie('cartsid')) {//cartsid：cookie里面id的名称
                numarr = getCookie('cartsid').split(',');//cookie转数组
            }
        }
        $('.tiao_shopping').on('click',function(){
            var sid=$(this).parents('#spic').find('img').attr('sid');
            getcookievalue();
            if($.inArray(sid,sibarr)!=-1){/*当前的sid是否存在*/

            }
        })


    })()




})()