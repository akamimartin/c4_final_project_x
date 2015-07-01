
function book1() {
	console.log("in the boo1 function");
}


var wordx = ''

function speaker_object(){
  this.word_queue = [];
  this.utterance = null;
  this.add_word = function(word){
    //add word to the word queue
    this.word_queue.push(word);
    console.log('added word '+word);
  }
  this.speak_next_word = function(){
    //perform the speech of the first word in the word_queue
    if(this.word_queue.length<1){
      return;
    }
    var word = this.word_queue.shift();
    console.log("saying "+word);
    this.utterance = new SpeechSynthesisUtterance(word);
    var _this = this;
    this.utterance.onstart = function(event){
      _this.speak_next_word();
    }
    window.speechSynthesis.speak(this.utterance);
  }
  this.speak = function(){
    this.speak_next_word();
  }
}
var janet = new speaker_object();










$(document).ready(function() {

// Set up!
/*var a_canvas = document.getElementById("a");
var context = a_canvas.getContext("2d");
 
// Draw the face
context.fillStyle = "yellow";
context.beginPath();
context.arc(95, 100, 40, 0, 2*Math.PI);
context.closePath();
context.fill();
context.lineWidth = 2;
context.stroke();
context.fillStyle = "black";
 
// Draw the left eye
context.beginPath();
context.arc(75, 90, 5, 0, 2*Math.PI);
context.closePath();
context.fill();
 
 
// Draw the right eye
context.beginPath();
context.arc(114, 90, 5, 0, 2*Math.PI);
context.closePath();
context.fill();
 
// Draw the mouth
context.beginPath();
context.arc(95, 105, 26, Math.PI, 2*Math.PI, true);
context.closePath();
context.fill(); */
 

































  //janet.add_word('Welcome to the Scary Cave');
  janet.speak();
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
            //console.log("insdie body onclidk");
    		var elm = $(this);
    		var value = elm.html();
        janet.add_word(value);
        janet.speak();
    		//console.log("you just clicked on : ", value);
        wordx =value;
    	});   
 
            $('#arrow_button1').on('click',  function(){
              //$('.form_container1').removeClass('.hide_form1'); 
                 $("#form1").show();
                 $('.form_container1').addClass('questions'); 
                   //console.log("inside the arrow onclick");
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









       
                /*  $('#drop-box').droppable();  
                 $( "#droppable-2" ).droppable({
            drop: function( event, ui ) {
               $( this )
               .addClass( "ui-state-highlight" )
               .find( "p" )
               .html( "Dropped!" );
            }
         });

                    $('li').draggable({
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

$('.blink').on('click', function () {
    $('.lidT').animate({
        top: '-40'
    }, 500).delay(200).animate({
        top: '-80'
    });
    $('.lidB').animate({
        bottom: '-40'
    }, 500).delay(200).animate({
        bottom: '-80'
    });
});

$('.look').on('click', function () {
    $('.pup').animate({
        'left': '80'
    }, 500).delay(200).animate({
        'left': '0'
    }, 700).delay(200).animate({
        left: 40
    });
});

$('.both').on('click', function () {
    $('.lidT').animate({
        top: '-40'
    }, 500).delay(200).animate({
        top: '-80'
    });
    $('.lidB').animate({
        bottom: '-40'
    }, 500).delay(200).animate({
        bottom: '-80'
    });
    $('.pup').delay(900).animate({
        'left': '80'
    }, 500).delay(200).animate({
        'left': '0'
    }, 700).delay(200).animate({
        left: 40
    });
});

$('.scared').on('click', function () {
    $('.lidT').animate({
        top: '-100'
    }, 800).delay(200).animate({
        top: '-40'
    }, 500).delay(200).animate({
        top: '-80'
    });
    $('.lidB').animate({
        bottom: '-100'
    }, 800).delay(200).animate({
        bottom: '-40'
    }, 500).delay(200).animate({
        bottom: '-80'
    });
    $('.pup').animate({
        'height': '50',
        'width': '50',
        top: '25',
        left: '25'
    }, 500).delay(1000).animate({
        'height': '20',
        'width': '20',
        top: '40',
        left: '40'
    });
    //$('.smile').addClass('rotate');
});



 });  

            
 

 

