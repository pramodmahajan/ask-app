<?php

require 'functions.php';

if($_SERVER['REQUEST_METHOD']=='POST')
{
$name=$_POST['name'];
$email=$_POST['email'];

if(empty($name)|| empty($email) || !valid_email($email))
{

$status="plese provide data correctly";
}
else
{
user_registered($name,$email);


}

}
require'email_template.php';

?>