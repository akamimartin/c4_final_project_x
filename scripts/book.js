
function book1() {
	console.log("in the boo1 function");
}


var wordx = ''

function speaker_object(){
   console.log('2222222222 in speaker_object');
  this.word_queue = [];
  this.utterance = null;
  this.add_word = function(word){

    //add word to the word queue
    this.word_queue.push(word);
    console.log('added word ',word);
      console.log('this.word_queue =" ', this.word_queue);
  }
  this.speak_next_word = function(){
    //perform the speech of the first word in the word_queue
    if(this.word_queue.length<1){
      return;
    }
    var word = this.word_queue.shift();
 
    this.utterance = new SpeechSynthesisUtterance(word);
    var _this = this;
    this.utterance.onstart = function(event){
      _this.speak_next_word();
       //$('.smile').toggle( "fast", "swing", 1000 );
       /*$('.smile').slideUp(300).delay(300).slideDown(300);
        console.log('ttttttttt', 'after .smile after utterance'); */
    }
    window.speechSynthesis.speak(this.utterance);

  }
  this.speak = function(){
    this.speak_next_word();
  }
}
var new_word = new speaker_object();

function scared_look(){
 $('.lidT').animate({
        top: '-120'
    }, 600).delay(200).animate({
        top: '-30'
    }, 300).delay(200).animate({
        top: '-120'
    });
    $('.lidB').animate({
        bottom: '-120'
    }, 600).delay(200).animate({
        bottom: '-40'
    }, 300).delay(200).animate({
        bottom: '-130'
    });
    $('.pup').animate({
        'height': '30',
        'width': '30',
        top: '10',
        left: '8'
    }, 500).delay(1000).animate({
        'height': '20',
        'width': '20',
        top: '14',
        left: '16'
    });
   
};



 
function welcome_msg() {
  console.log('1111111111 in welcome_msg');
  var welcomeMsg =[]
     welcomeMsg = ["welcome","to","the","scary","cave","this","story","has","words","with","the",
                    "long","a","sound","with","a","at","the","beginning","and","e","at","the","end", 
                    "of","a","word","examples","of","the","long","a","sound", "cake","rake","bake","made"];
 
  var i;
   var test = welcomeMsg.length;
   for (i = 0; i <39; i++) {
        new_word.add_word(welcomeMsg[i]);
        new_word.speak();
        if(i <= 28){
              $('.smile').slideUp(300).delay(350).slideDown(300);
        }; 
      
   };

 };
  

$(document).ready(function() {
  scared_look();
  welcome_msg();

  console.log('page is loading after document ready');
  $("#form1").hide();
  $("#drop-box").hide();
          
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
        new_word.add_word(value);
        new_word.speak();
    		//console.log("you just clicked on : ", value);
        wordx =value;
    	});   
 
            $('#arrow_button1').on('click',  function(){
              //$('.form_container1').removeClass('.hide_form1'); 
                 $("#form1").show();
                 $('.form_container1').addClass('questions'); 
                   //console.log("inside the arrow onclick");
                 $("#drop-box").show();
                // $('.box-container1').addClass('page1-box'); 
                // $('.face_container').addClass('add_face');
            
               
               // $(".add_face").fadeIn(3000);
              //$(".add_face").fadeOut(3000);

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

 });  




//$(".face_container").fadeOut(3000);

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
        top: '-120'
    }, 600).delay(200).animate({
        top: '-30'
    }, 300).delay(200).animate({
        top: '-120'
    });
    $('.lidB').animate({
        bottom: '-120'
    }, 600).delay(200).animate({
        bottom: '-40'
    }, 300).delay(200).animate({
        bottom: '-130'
    });
    $('.pup').animate({
        'height': '30',
        'width': '30',
        top: '10',
        left: '8'
    }, 500).delay(1000).animate({
        'height': '20',
        'width': '20',
        top: '14',
        left: '16'
    });
    $('.smile').slideToggle(); 
    //$('.smile').addClass('rotate');
});


$('.scared').on('click', function () {
    //$('.smile').slideUp(1000).delay(1000).slideDown(1000);
     $('.smile').slideToggle(); 
      console.log("seeeeeeeeeeeeeeesssssssmile" );
     
     
    });


 });  
