 
public function box($colour) {
     $output = "";
    $stmt = $this->db->prepare('SELECT * FROM mini_game_results')
    $stmt->bindParam(':colour', $colour);
    $stmt->execute();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC))  {
      $output .= "\t\t\t<div id='".$row["id"]."'>". $row["name"].
       "</div>\n";
    }
      return $output;
}