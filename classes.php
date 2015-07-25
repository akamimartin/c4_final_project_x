 
 <?php
 require('mysql_connect.php');

$sql = "SELECT * FROM users Where name = 'Janet'";
$result = mysqli_query($conn, $sql);
$output = mysqli_fetch_assoc($result);
print_r($output);
  /*$this->db = $db;

 public function box($colour) {
     $output = "";
    $stmt = $this->db->prepare('SELECT * FROM mini_game_results where box = :colour');
    $stmt->bindParam(':colour', $colour);
    $stmt->execute();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC))  {
      $output .= "\t\t\t<div id='".$row["id"]."'>". $row["name"].
       "</div>\n";
    }
      return $output;
} */

?>