<?php
$POST = ['mondaY'=>'1', 'tueY'=>"2's",'wdY'=>'3','id'=>5];
$outside_valid_keys = ['mondaY'=>'monday_field','tueY'=>'tuesday_field','wdY'=>'wednesday_field'];
function clean_and_generate($valid_keys, $post_array_source)
{
$post_array = [];
foreach($valid_keys as $key => $val)
{
  $post_array[$val] = addslashes($post_array_source[$key]);
}
$post_keys = array_keys($post_array);
$post_keys_string = "'".implode("','",$post_keys) ."'";
$post_vals_string = "'".implode("','",$post_array) ."'";
$query = "INSERT INTO table ($post_keys_string) VALUES ($post_vals_string)";
return $query;
}
print(clean_and_generate($outside_valid_keys, $POST));

?>

 