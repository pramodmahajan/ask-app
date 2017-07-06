<!DOCTYPE html>
<html>
<body>

<?php
$number = 123;
$txt = sprintf("With 2 decimals: %1\$.2f
<br>With no decimals: %1\$u",$number);
echo $txt;
?>

</body>
</html>