<?php
 $conn=mysql_connect('localhost','root');

 mysql_select_db('kuangjiangtao');//数据库名称
 mysql_query('SET NAMES UTF8');//设置编码方式

 $result=mysql_query("select * from luenbo");//轮播图
 $arr=array();
 for($i=0;$i<mysql_num_rows($result);$i++){
     $arr[$i]=mysql_fetch_array($result,MYSQLI_ASSOC);





 ?>