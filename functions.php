<?php
function user_registered($name,$email)
{

file_put_contents('details_user.php' ,"$name:$email\n",FILE_APPEND );

}
function old($key)
{

if(!empty($_REQUEST[$key])){

	return $_REQUEST[$key];
}
}
function valid_email($email){

return filter_var($email,FILTER_VALIDATE_EMAIL);


}


function get_registered_users($path='mailing_list.php'){


       $users=file($path);

       if(count($users))
       {
          return array_map(function($user){
          $bits=explode(':',$user);

          print_r($bits);

          






          },$users);




       }


       print_r(explode(':',$users[0]));



}





?>