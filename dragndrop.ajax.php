<?php
 <?PHP
 
require_once('mysql_connect.php');
 
$id = $_GET['id'];
$box = $_GET['box'];


$stmt = $db->prepare("UPDATE mini_game_results SET box = :box WHERE id = :id" );
$stmt->bindParam(':id', $id);
$stmt->bindParam(':box', $box);
$stmt->execute();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC))  {
      $output .= "\t\t\t<div id='".$row["id"]."'>". $row["name"].
       "</div>\n";
    }
      return $output;
}

