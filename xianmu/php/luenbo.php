<?php
 $conn=mysql_connect('localhost','root');

 mysql_select_db('kuangjiangtao');//数据库名称
 mysql_query('SET NAMES UTF8');//设置编码方式

 $result=mysql_query("select * from luenbo");//轮播图
 $arr=array();
 for($i=0;$i<mysql_num_rows($result);$i++){
     $arr[$i]=mysql_fetch_array($result,MYSQLI_ASSOC);

 }//将数据以数组形式保存

 $liudongtuaa=mysql_query("select * from liudongtu");//流动图
  $liudongtu=array();
  for($i=0;$i<mysql_num_rows($liudongtuaa);$i++){
     $liudongtu[$i]=mysql_fetch_array($liudongtuaa,MYSQLI_ASSOC);

  }//将数据以数组形式保存


  $mianaa=mysql_query("select * from mian");//主题内容图
   $mianf1=array();
   for($i=0;$i<mysql_num_rows($mianaa);$i++){
     $mian[$i]=mysql_fetch_array($mianaa,MYSQLI_ASSOC);

   }//将数据以数组形式保存
    $mianaaa=mysql_query("select * from mian2");//主题内容图
      $mian2=array();
      for($i=0;$i<mysql_num_rows($mianaaa);$i++){
        $mian2[$i]=mysql_fetch_array($mianaaa,MYSQLI_ASSOC);

      }//将数据以数组形式保存
/*f3*/
    $mianaab=mysql_query("select * from mian3");//主题内容图
        $mian3=array();
        for($i=0;$i<mysql_num_rows($mianaab);$i++){
          $mian3[$i]=mysql_fetch_array($mianaab,MYSQLI_ASSOC);

        }//将数据以数组形式保存
/*f4*/
  $mianaac=mysql_query("select * from mian4");//主题内容图
          $mian4=array();
          for($i=0;$i<mysql_num_rows($mianaac);$i++){
            $mian4[$i]=mysql_fetch_array($mianaac,MYSQLI_ASSOC);

          }//将数据以数组形式保存

     /*f5*/
  $mianaad=mysql_query("select * from mian5");//主题内容图
          $mian5=array();
          for($i=0;$i<mysql_num_rows($mianaad);$i++){
            $mian5[$i]=mysql_fetch_array($mianaad,MYSQLI_ASSOC);

         }//将数据以数组形式保存
    $mianaae=mysql_query("select * from mian6");//主题内容图
             $mian6=array();
             for($i=0;$i<mysql_num_rows($mianaae);$i++){
               $mian6[$i]=mysql_fetch_array($mianaae,MYSQLI_ASSOC);

            }//将数据以数组形式保存
    $mianaaf=mysql_query("select * from mian7");//主题内容图
                 $mian7=array();
                 for($i=0;$i<mysql_num_rows($mianaaf);$i++){
                   $mian7[$i]=mysql_fetch_array($mianaaf,MYSQLI_ASSOC);

                }//将数据以数组形式保存
     $mianaan=mysql_query("select * from mian8");//主题内容图
                      $mian8=array();
                      for($i=0;$i<mysql_num_rows($mianaan);$i++){
                        $mian8[$i]=mysql_fetch_array($mianaan,MYSQLI_ASSOC);

                     }//将数据以数组形式保存
     $mianaao=mysql_query("select * from mian9");//主题内容图
                           $mian9=array();
                           for($i=0;$i<mysql_num_rows($mianaao);$i++){
                             $mian9[$i]=mysql_fetch_array($mianaao,MYSQLI_ASSOC);

                          }//将数据以数组形式保存

$mianaaz=mysql_query("select * from mian10");//主题内容图
                           $mian10=array();
                           for($i=0;$i<mysql_num_rows($mianaaz);$i++){
                             $mian10[$i]=mysql_fetch_array($mianaaz,MYSQLI_ASSOC);

                          }//将数据以数组形式保存

  $mianaaw=mysql_query("select * from mian11");//主题内容图
                             $mian11=array();
                             for($i=0;$i<mysql_num_rows($mianaaw);$i++){
                               $mian11[$i]=mysql_fetch_array($mianaaw,MYSQLI_ASSOC);

                            }//将数据以数组形式保存
 $mianaat=mysql_query("select * from mian12");//主题内容图
                             $mian12=array();
                             for($i=0;$i<mysql_num_rows($mianaat);$i++){
                               $mian12[$i]=mysql_fetch_array($mianaat,MYSQLI_ASSOC);

                            }//将数据以数组形式保存
    $remenaa=mysql_query("select * from remen");//热门内容图
     $remen=array();
           for($i=0;$i<mysql_num_rows($remenaa);$i++){
           $remen[$i]=mysql_fetch_array($remenaa,MYSQLI_ASSOC);

              }//将数据以数组形式保存

  $heng_img=mysql_query("select * from heng_img");//热门内容图
       $heng=array();
             for($i=0;$i<mysql_num_rows($heng_img);$i++){
             $heng[$i]=mysql_fetch_array($heng_img,MYSQLI_ASSOC);

                }//将数据以数组形式保存

   $heng_bb=mysql_query("select * from heng_b");//热门内容图
          $heng_b=array();
                for($i=0;$i<mysql_num_rows($heng_bb);$i++){
                $heng_b[$i]=mysql_fetch_array($heng_bb,MYSQLI_ASSOC);

                   }//将数据以数组形式保存
 $heng_cc=mysql_query("select * from heng_c");//热门内容图
           $heng_c=array();
                 for($i=0;$i<mysql_num_rows($heng_cc);$i++){
                 $heng_c[$i]=mysql_fetch_array($heng_cc,MYSQLI_ASSOC);

                    }//将数据以数组形式保存

   $heng_dd=mysql_query("select * from heng_d");//热门内容图
              $heng_d=array();
                    for($i=0;$i<mysql_num_rows($heng_dd);$i++){
                    $heng_d[$i]=mysql_fetch_array($heng_dd,MYSQLI_ASSOC);

                       }//将数据以数组形式保存
 $mian_img=mysql_query("select * from mian_img");//热门内容图
               $mian_imga=array();
                     for($i=0;$i<mysql_num_rows($mian_img);$i++){
                     $mian_imga[$i]=mysql_fetch_array($mian_img,MYSQLI_ASSOC);

                        }//将数据以数组形式保存

  class indata{//将数据接口输出给前端

  }
  $indexad=new indata();
   $indexad->arr=$arr;
   $indexad->brr=$liudongtu;
   $indexad->crr=$mian;
   $indexad->drr=$mian2;
   $indexad->err=$mian3;
   $indexad->frr=$mian4;
   $indexad->grr=$mian5;
   $indexad->hrr=$mian6;
   $indexad->krr=$mian7;
   $indexad->nrr=$mian8;
   $indexad->orr=$mian9;
   $indexad->zrr=$mian10;
   $indexad->wrr=$mian11;
   $indexad->trr=$mian12;
   $indexad->re=$remen;
   $indexad->heng=$heng;
   $indexad->hengb=$heng_b;
   $indexad->hengc=$heng_c;
   $indexad->hengd=$heng_d;
   $indexad->mian_imga=$mian_imga;



   echo json_encode($indexad);



?>