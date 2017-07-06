
<?php 


//define an array
$array=array();

//writing a for loop from 0 to 100

for ($i=0;$i<=99;$i++)
{
	$array[]=rand();
	

}
//print the array

print_r($array);
echo"<hr>";
sort($array);
echo"<hr>";
print_r($array);
echo 'biggest:'.sizeof($array[$i]);

?>