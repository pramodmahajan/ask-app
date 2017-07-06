
<!DOCTYPE html>
<html>
<head>
<script language="JavaScript">
monthArray = new Array(12);
monthArray[1]="January";
monthArray[2]="February";
monthArray[3]="March";
monthArray[4]="April";
monthArray[5]="May";
monthArray[6]="June";
monthArray[7]="July";
monthArray[8]="Auguest";
monthArray[9]="September";
monthArray[10]="October";
monthArray[11]="November";
monthArray[12]="December";
var user_month = 0;
var user_day = 0;
var user_year = 0;
user_month = prompt("Enter the month as a number",0);
user_day = prompt("Enter the day",0);
user_year = prompt("Enter the year",0);
document.write("The date is " + monthArray[user_month] +"    "+ user_day+ "     " + user_year);
</script>

</head>
<body>
<h1>hello world</h1>

</body>
</html>