 <?php
 // error_reporting(0);
 require('mysql_connect_config.php');
 $sql = "SELECT * FROM answers Where form = '1' ";  
  $newarray = [];
  $result = mysqli_query($conn, $sql);
  if($result){
     while ($row = mysqli_fetch_assoc($result)) {
        $newarray =$row['answer'];
        $output = json_encode($newarray);
      
        print_r($output);
  }

     
   // if($count=$result->num_rows) {
   //     echo '<p>', $count, '</p>'; 
          
      //  while($row = mysqli_fetch_assoc($result)){
      //      $all= $row; 
      // }


   }
    

?> 