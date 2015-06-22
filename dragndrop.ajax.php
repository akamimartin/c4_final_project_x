<?php
require_once '../php-includes/connect.inc.php';
$id = $_GET['id'];
$box = $_GET['box'];


$stmt = $this->db->prepare('UPDATE mini_game_results SET box = :bos )
$stmt->bindParam(':colour', $colour);
$stmt->execute();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC))  {
      $output .= "\t\t\t<div id='".$row["id"]."'>". $row["name"].
       "</div>\n";
    }
      return $output;
}

https://www.youtube.com/watch?v=sByjNR6okao