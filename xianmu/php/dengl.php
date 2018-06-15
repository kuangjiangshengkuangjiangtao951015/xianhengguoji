<?php
  header('content-type:text/html;charset=utf-8');
   /*连接数据库*/
   define('LOCAL','localhost');
   define('ROOt','root');
    $chong=@mysql_connect('localhost','root');
    if(!$chong){
       die('数据库连接失败'.mysql_error);
     }
      mysql_select_db('kuangjiangtao');//数据库名称
      mysql_query('SET NAMES UTF8');//设置编码方式

   $ustna=$_POST['ustna'];
   $passab=md5($_POST['passab']);






  $result=mysql_query("select * from zhuc where yonghuname='$ustna' and yonghupass='$passab' ");
 	if(mysql_fetch_array($result)){//有值，登陆通过
 		echo true;
 	}else{
 		echo false;
 	}




?>