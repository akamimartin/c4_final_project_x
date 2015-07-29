 <?php
 error_reporting(0);
 require('mysql_connect_config.php');
 $sql = "SELECT * FROM answers Where form = $form ";  
  $newarray = [];
if($result = mysqli_query($conn, $sql)){
   if($count=$result->num_rows) {
       echo '<p>', $count, '</p>'; 
          
       while($row = $result->fetch_object()){
           echo $row->answer , '<br>';
           $newarray[] = $row->answer;
    
      }

   }

}
     print_r($newarray);



 
    if ($_GET['ip']):
        $ip = gethostbyname($_GET['ip']);
        echo($ip);
    endif;  
 









 
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