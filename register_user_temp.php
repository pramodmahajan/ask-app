<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

<h1>
my mailing list

</h1>
<?php
if($registered_users)
{
    foreach($registered_users as $user)

    {
        list($name,$email)=$user;


       echo "<li>$name:<a href =mailto:email>$email</a></li>";


    }

}
else 
	echo "no registered user";
?>



</body>
</html>