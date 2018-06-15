;(function ($) {
    var $luenimg=$('.luenimg a');/*轮播*/
   var $hot_boxa=$('.hot_boxa ul li');/*流动图*/
    var $hot_boxb=$('.hot_boxb ul li');/*流动图*/
    var $f1=$('.f1 a');/*mianF1*/
    var $f2=$('.f2 a');/*mianF2*/
    var $f3=$('.f3 a');/*mianF3*/
    var $f4=$('.f4 a');/*mianF4*/
    var $f5=$('.f5 a');/*mianF5*/
    var $f6=$('.f6 a');/*mianF6*/
    var $f7=$('.f7 a');/*mianF7*/
    var $f8=$('.f8 a');/*mianF8*/
    var $f9=$('.f9 a');/*mianF9*/
    var $f10=$('.f10 a');/*mianF10*/
    var $f11=$('.f11 a');/*mianF11*/
    var $f12=$('.f12 a');/*mianF12*/
    var $re=$('.si_img a');/*热门图*/
    var $heng=$('.heng');/*横一图*/
    var $heng_b=$('.heng_b');/*横二图*/
    var $heng_c=$('.heng_c');/*横三图*/
    var $heng_d=$('.heng_d');/*横四图*/
    var $mian_img=$('.mian_img');/*mian的大图*/
    var $mian_img1=$('.mian_img1');/*mian的大图*/
    var $mian_img2=$('.mian_img2');/*mian的大图*/
    var $mian_img3=$('.mian_img3');/*mian的大图*/
    var $mian_img4=$('.mian_img4');/*mian的大图*/
    var $mian_img5=$('.mian_img5');/*mian的大图*/
    var $mian_img6=$('.mian_img6');/*mian的大图*/
    var $mian_img7=$('.mian_img7');/*mian的大图*/
    var $mian_img8=$('.mian_img8');/*mian的大图*/
    var $mian_img9=$('.mian_img9');/*mian的大图*/
    var $mian_img10=$('.mian_img10');/*mian的大图*/
    var $mian_img11=$('.mian_img11');/*mian的大图*/

    $.ajax({
        url:'../../php/luenbo.php',
        dataType:"json"
    }).done(function (indexad) {
         console.log(indexad);
       $.each(indexad.brr,function(index,value){
           $hot_boxa.eq(index).append(`<img src="${value.url}"/>`);

       })
        $.each(indexad.arr,function (index,value) {
            $luenimg.eq(index).append(`<img src="${value.url}"/>`);
        });
        $.each(indexad.brr,function(index,value){
            $hot_boxb.eq(index).append(`<img src="${value.url}"/>`);

        });
        $.each(indexad.crr,function(index,value){
            $f1.eq(index).append(`<img src="${value.url}"/>`);

        })
        $.each(indexad.drr,function(index,value){
            $f2.eq(index).append(`<img src="${value.url}"/>`);

        })
        $.each(indexad.err,function(index,value){
            $f3.eq(index).append(`<img src="${value.url}"/>`);

        })
        $.each(indexad.frr,function(index,value){
            $f4.eq(index).append(`<img src="${value.url}"/>`);

        })
        $.each(indexad.grr,function(index,value){
            $f5.eq(index).append(`<img src="${value.url}"/>`);

        })
        $.each(indexad.hrr,function(index,value){
            $f6.eq(index).append(`<img src="${value.url}"/>`);

        })
        $.each(indexad.krr,function(index,value){
            $f7.eq(index).append(`<img src="${value.url}"/>`);

        })
        $.each(indexad.nrr,function(index,value){
            $f8.eq(index).append(`<img src="${value.url}"/>`);

        })
        $.each(indexad.orr,function(index,value){
            $f9.eq(index).append(`<img src="${value.url}"/>`);

        })
        $.each(indexad.zrr,function(index,value){
            $f10.eq(index).append(`<img src="${value.url}"/>`);

        })
        $.each(indexad.wrr,function(index,value){
            $f11.eq(index).append(`<img src="${value.url}"/>`);

        })
        $.each(indexad.trr,function(index,value){
            $f12.eq(index).append(`<img src="${value.url}"/>`);

        });
        $.each(indexad.re,function(index,value){
            $re.eq(index).append(`<img src="${value.url}"/>`);

        });
        $.each(indexad.heng,function(index,value){
            $heng.append(`<img src="${value.url}"/>`);

        })
        $.each(indexad.hengb,function(index,value){
            $heng_b.append(`<img src="${value.url}"/>`);

        })
        $.each(indexad.hengc,function(index,value){
            $heng_c.append(`<img src="${value.url}"/>`);

        })
        $.each(indexad.hengd,function(index,value){
            $heng_d.append(`<img src="${value.url}"/>`);

        })


        $mian_img.append(`<img src="${indexad.mian_imga[0].url}"/>`);
        $mian_img1.append(`<img src="${indexad.mian_imga[1].url}"/>`);
        $mian_img2.append(`<img src="${indexad.mian_imga[2].url}"/>`);
        $mian_img3.append(`<img src="${indexad.mian_imga[3].url}"/>`);
        $mian_img4.append(`<img src="${indexad.mian_imga[4].url}"/>`);
        $mian_img5.append(`<img src="${indexad.mian_imga[5].url}"/>`);
        $mian_img6.append(`<img src="${indexad.mian_imga[6].url}"/>`);
        $mian_img7.append(`<img src="${indexad.mian_imga[7].url}"/>`);
        $mian_img8.append(`<img src="${indexad.mian_imga[8].url}"/>`);
        $mian_img9.append(`<img src="${indexad.mian_imga[9].url}"/>`);
        $mian_img10.append(`<img src="${indexad.mian_imga[10].url}"/>`);
        $mian_img11.append(`<img src="${indexad.mian_imga[11].url}"/>`);
    })

})(jQuery)

;(function ($) {/*轮播图*/
      var $boxlunbo=$('#luenbo_img');
      var $xiaoyuan=$('.xiaoyuan li');
      var $datu=$('.luenimg a')
      var num=0;/*自定义索引*/
      var temp=null;/*定时器*/
    $xiaoyuan.on('click',function () {/*点击下面li时*/
         num=$(this).index();
         num_sy();

    });
     temp=setInterval(function () {
          num++;
          if (num>$datu.length-1){
              num=0;
          }
          num_sy();
     },2000)
    $boxlunbo.hover(function(){/*鼠标滑过时*/
        clearInterval(temp);/*关闭*/
    },function(){/*鼠标离开时*/
        temp=setInterval(function () {/*开启*/
            num++;
            if (num>$datu.length-1){
                num=0;
            }
            num_sy();
        },2000)
    });
    function num_sy() {
        $xiaoyuan.eq(num).addClass('se').siblings('.xiaoyuan li').removeClass('se');/*颜色*/
        $datu.eq(num).css({'display':'block'}).siblings('.luenimg a').css({'display':'none'});/*大图*/
    };


  ;(function(){/*流动图效果*/
          function Log() {
              var temp=null
              var that=this;
              this.Odiv=$('.hot_ceng > div');
              this.index=0;
              this.beforeIndex=1920;
              this.init=function () {
                temp=setInterval(function () {
                    that.index++;
                    that.beforeIndex--;
                    if(that.index>1920){
                       that.index=-1190;
                    }
                    if(that.beforeIndex<-1920){
                        that.beforeIndex=1190;
                    }
                    that.Odiv.eq(0).css('left',-that.index);
                    that.Odiv.eq(1).css('left',that.beforeIndex);

                },10)
              }
              $('.hot_ceng').hover(function(){
                  clearInterval(temp);
              },function(){
                  temp=setInterval(function () {
                      that.index++;
                      that.beforeIndex--;
                      if(that.index>1920){
                          that.index=-1190;
                      }
                      if(that.beforeIndex<-1920){
                          that.beforeIndex=1190;
                      }
                      that.Odiv.eq(0).css('left',-that.index);
                      that.Odiv.eq(1).css('left',that.beforeIndex);

                  },10)


              })
          }
          new Log().init();







    })()
    ;(function(){/*楼梯效果*/
        var $louti=$('#stairs_left');/*楼梯*/
        var $louceng=$('#mian h3');/*楼层*/

        /*1先得到滚动条滚到一定的值显示楼梯*/
        $(window).on('scroll',function(){
            var $scrolltop = $(this).scrollTop();
            if ($scrolltop>800){
                $louti.show();
            }else{
                $louti.hide();
            };
            $louceng.each(function(index,){/*楼层跟楼梯*/
                var $top=$(this).offset().top;
               if($top>$scrolltop){

                   $('#stairs_left ul li').removeClass('yanse');

                   $('#stairs_left ul li').eq($(this).index('#mian h3')).addClass('yanse');
                   return false;
               }
            })
        });
        /*点击右边的li进行楼层的跳转*/
      $('#stairs_left li').on('click',function () {
          /*获取每一次楼层的top值*/
          var $top=$louceng.eq($(this).index()).offset().top;
          /* console.log($top);*/
         $('html,body').animate({/*/!*做兼容赋值*!/*/
              scrollTop: $top
          })
      });
    })()

   ;(function () {/*右边楼梯效果*/
          var $louti_r=$('#stairs_right ul li');

          $('.QQa').hover(function(){
              $louti_r.eq($(this).index()).css('text-align','right').animate({
                  width:'150px'
              }).siblings('#stairs_right ul li').animate({
                 width:'54px'
              })
          },function(){
              $louti_r.eq($(this).index()).css('text-align','right').animate({
                  width:'54px'

              }).siblings('#stairs_right ul li').animate({
                  width:'54px'
              })
          })
          
          
          $('.QQb').hover(function(){
            $(this).css('text-align','right').animate({
                  width:'150px',
                  background:'red'
              }).siblings('#stairs_right ul li').animate({
                 width:'54px'
              })
          },function(){
            $(this).css('text-align','right').animate({
                  width:'54px'

              }).siblings('#stairs_right ul li').animate({
                  width:'54px'
              })
          }) 
         
    })()
  ;(function(){/*回到顶部*/
      var $huidaodingbi=$('.huidaodingbu');

        $(window).on('scroll',function() {
            var $scrolltop = $(this).scrollTop();

            if ($scrolltop > 800) {
                $huidaodingbi.show();
            } else {
                $huidaodingbi.hide();
            };
            $huidaodingbi.on('click',function(){/*点击回到顶部*/
                $scrolltop=0;
            })

        })

    })();





})(jQuery)




























