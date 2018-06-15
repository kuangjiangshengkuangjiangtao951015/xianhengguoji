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

    //检测用户名是否存在
    	if(isset($_POST['repeatname']) || isset($_POST['submit'])){
    		$name=@$_POST['repeatname'];
    	}else{
    		exit('非法操作');//不允许直接预览验证页面。
    	}

	//如果result有结果，代码用户名出现重复。
	$result=mysql_query("select * from zhuc where yonghuname='$name'");
     	if(mysql_fetch_array($result)){//满足条件有重复
     		echo true;
     	}else{//没有重复
     		echo false;
     	}
//点击了submit注册按钮。提交注册数据到数据库
   if(isset($_POST['submit'])){
   		$ustname=$_POST['ustname'];//表单的name值获取
   		$password=md5($_POST['pass']);//表单的password值获取
   		$email=$_POST['email'];//表单的email值获取
   		$query="insert zhuc value(default,'$ustname','$password','$email')";
   		mysql_query($query);
        header('location:../src/html/dengl.html');
   	}




?>