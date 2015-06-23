 <?PHP
 
require_once('mysql_connect.php');
require_once 'classes.php';
$display = new Display($db);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Scary Cave</title>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Tangerine">
    <script src="scripts/book.js"></script>
    <script src="scripts/dragndrop.js"></script>
</head>

<body>

<h1> drag and drop game</h1>
 <?php $colours = array('orange','blue', 'green','red');
  foreach ($colours as $colour) {
       echo "\t\t<div class='box' id '". $colour . "'>\n" .
        $display->box($colour) . "\t\t</div>\n";
        } ?>

  </body>
</html>
