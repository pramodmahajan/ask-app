<!DOCTYPE html>
<html>
<head>
	<title>my website</title>
<body style = background-color:none>


<style>
.notice{
font-style: italic;
color:blue;
}

</style>


</head>

<body>

<form action='email1.php' method="post">
<?php
 if(isset($status)) 
  ?>
<div class="notice">
<?php

echo $status ;
?>	
 <br>
 </div>
 --><label for ="name">name:</label>
<input type="text" name="name"><br><br>


<label for ="email">email:</label>
<input type="text" name="email"><br><br>


<label for ="submit">submit</label>
<input type="submit" value="submit">

</form>
</body>
</html>