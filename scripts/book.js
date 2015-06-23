
function book1() {
	console.log("in the boo1 function");
}


var wordx = ''




$(document).ready(function() {
    console.log('page is loading after document ready');
      $("#form1").hide();
      $("#drop-box").hide();
     
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
        wordx =value;
    	});   
 
            $('#arrow_button1').on('click',  function(){
              //$('.form_container1').removeClass('.hide_form1'); 
               $("#form1").show();
               $('.form_container1').addClass('questions'); 
                 console.log("inside the arrow onclick");
               $("#drop-box").show();
               $('.box-container1').addClass('page1-box');   
         
               
              /*   $('span').draggable({
                    helper: 'clone',
                    stop: function(event, ui){
                      console.log("ui =",ui.helper[0]);
                      var new_element = $(ui.helper[0]).cl
                      one();
                      $("#drop-box").append(new_element);
                    },
                  });
                  
                 $('#drop-box').droppable({
                  //helper: 'clone'
                 }) */

  $(function () {
    var html = "<h1>In transit</h1>";
        $('span').draggable({
            containment: 'document',
            helper: 'clone'//function(){ return $(html); }
        });
    $("#drop-box").droppable({
        drop: function (event, ui) {
            $(ui.draggable).clone().appendTo(this);
            //$(ui.draggable).remove();
        }
    });
});

















       
                /*  $('#drop-box').droppable();  
                 $( "#droppable-2" ).droppable({
            drop: function( event, ui ) {
               $( this )
               .addClass( "ui-state-highlight" )
               .find( "p" )
               .html( "Dropped!" );
            }
         });


               /*$('li').draggable({
                    containment:'document', 
                    revert: true,
                    start: function(){
                         list_contents = $(list).text();
                    },
                });
          
                $('#list').droppable({ 
                    hoverClass: 'border', 
                    accept: '.item',
                    drop: function() {
                      alert('dropped', list_contents);
                      $('#list').append(list_contents, '<br>');
                    }
                });  */








            });  





 });  

            
 

 


