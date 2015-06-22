
function book1() {
	console.log("in the boo1 function");
}







$(document).ready(function() {
    console.log('page is loading after document ready');
      $("#form1").hide();
     
      // $('.form_container1').addClass('.form1'); 
 

    
     	var paragraphs = $('.content').find('p');
    	$.each(paragraphs, function(){
    		var p = $(this);
    		var text = p.text().trim();

    		console.log(text);
    	
	    	var newText = text.replace(/([^ |^\n]+)([ |\n|]+|$)/gi, " $1");
	    	var textArr = newText.split(" ");

	    	console.log("textArr : ", textArr);

	    	var newTextElements = '<span class="txt-con"> '
                  +textArr.join('</span><span class="txt-con"> ')+'</span>';

	    	p.html(newTextElements);
    	});

    	$('body').on('click', '.txt-con', function(){
            console.log("insdie body onclidk");
    		var elm = $(this);
    		var value = elm.html();
            var msg = new SpeechSynthesisUtterance(value);
            window.speechSynthesis.speak(msg);
    		console.log("you just clicked on : ", value);
    	});   
 
            $('#arrow_button1').on('click',  function(){
              //$('.form_container1').removeClass('.hide_form1'); 
               $("#form1").show();
               $('.form_container1').addClass('questions'); 
                 console.log("inside the arrow onclick");
         
            });  

           $('.box').droppable({
             drop: function(event, ui) {
                  var id = $(ui.draggable).attr('id');
                  var toy = $(ui.draggable).attr('html');
                  var box = $(this).attr('id');
                  $.ajax({
                       url: 'ajax/dragndrop.ajax.php',
                       type: 'GET',
                       data: {
                          'id' : id,
                          'box' : box
                       },
                  });
              }
          });

 });  

            
 

 
 
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

