<?php 


//define an array
$array=array();

//writing a for loop from 0 to 100

for ($i=1;$i<=100;$i++)
{
	$array[]=rand();
	

}
//print the array

print_r($array);
echo"<hr>";
sort($array);
print_r($array);

?>