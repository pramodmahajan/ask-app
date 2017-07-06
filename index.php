<?php  
function set_count($file_name ='custom.txt')
{
if(file_exists($file_name))
{
$handle = fopen($file_name,'r');
$count=(int)fread($handle,'20');
echo gettype($count);die();
$count=fread($handle,'20')+1;
$handle = fopen($file_name,'r');
fwrite($handle,$count);
fclose($handle);
}
 else{

$handle = fopen($file_name,'w+');
$count = 1;
fwrite($handle,$count);
fclose($handle);

 }
 

}

set_count();
include 'demo1.php';

?>