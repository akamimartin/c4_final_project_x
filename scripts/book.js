
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


function change_pic (){
  $.ajax({
    url: 'page2.html',
    method: 'POST',
    dataType: 'html',
    success: function(response){
      console.log(response)
      $('#container').html(response);
    }
  })
}

function show_form2 (){
  $.ajax({
    url: 'form2.html',
    method: 'POST',
    dataType: 'html',
    success: function(response){
      console.log("AAAAAAAAAAAAAAAAAin success")
      console.log(response)
      $('#form1').show();
      $('#form1').html(response);
    }
  })
}


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
     $('.pup').animate({
        'height': '30',
        'width': '30',
        top: '8',
        left: '10'
    }, 500).delay(1000).animate({
        'height': '20',
        'width': '20',
        top: '10',
        left: '10'
    });
   $('.pup').animate({
        'height': '30',
        'width': '30',
        top: '10',
        left: '28'
    }, 500).delay(1000).animate({
        'height': '20',
        'width': '20',
        top: '14',
        left: '16'
    });


   
};


         
function welcome_msg() {
  console.log('1111111111 in welcome_msg');
  var welcomeMsg =[],
     welcomeMsg = ["welcome","to", "the","scary","cave","this story","uses","words",  "with", "A",
                     "and", "ends", "with", "E", "examples" , "are",
                       "cake","rake","bake","made"];
 
  var i;
   var test = welcomeMsg.length;
   for (i = 0; i < test; i++) {
        new_word.add_word(welcomeMsg[i]);
        new_word.speak();
        if(i <= 16){
              $('.smile').slideUp(300).delay(350).slideDown(300);
        }; 
      
   };

 };
  

$(document).ready(function() {
    scared_look();
    welcome_msg();
    $('body').on('click','#form_button',function(){
       //$("#form1").hide();
       //$("#drop-box").hide();
       // change_pic();
        var newarray = [];
        //This ajax call gets the answers from the answers table
       $.ajax({
               type: "POST",
               url: "classes.php",
               success: function(msg){
                 //$('#resultform').html(msg);
                  console.log('aaaaaajaxxxx', msg);
                  var textArr1 = msg.replace('""', '","');
                  
                   textArr1 = textArr1.replace('""', '","');
                 
                   textArr1 = textArr1.replace('""', '","');
                  
                   textArr1 = textArr1.replace('""', '","'); 
                                 
                   textArr1 = textArr1.replace('""', '","');
                   
                   textArr1 = textArr1.replace('""', '","');
                  textArr1 = textArr1.replace('" ', ''); 
                   textArr1 = textArr1.replace(' "', ''); 
                  
                  var newarray = textArr1.split('","');
                  // newarray.push(textArr1);
 
                  console.log('bbbbbbbbb newarray', newarray);
                   
                    console.log('ccccccc newarray[0]', newarray[0]);
                   console.log('ccccccc newarray[1]', newarray[1]);
                      console.log('ccccccc newarray[2]', newarray[2]);
                    console.log('ccccccc newarray[3]', newarray[3]);
                      console.log('ccccccc newarray[4]', newarray[4]);
                       console.log('ccccccc newarray[5]', newarray[5]);
                      console.log('ccccccc newarray[6]', newarray[6]);
                         var answer1 ="";
       var answer=[];
       var forma = 'form1-';

      
answer[0] = $('input[name="form1-0"]:checked', '#form1').val(); 
answer[1] = $('input[name="form1-1"]:checked', '#form1').val(); 
answer[2] = $('input[name="form1-2"]:checked', '#form1').val(); 
answer[3] = $('input[name="form1-3"]:checked', '#form1').val(); 
answer[4] = $('input[name="form1-4"]:checked', '#form1').val(); 
answer[5] = $('input[name="form1-5"]:checked', '#form1').val(); 
answer[6] = $('input[name="form1-6"]:checked', '#form1').val(); 

console.log('aaaaaaaaaaaaaa0', answer[0]);
console.log('aaaaaaaaaaaaaa1', answer[1]);
console.log('aaaaaaaaaaaaaa2', answer[2]);
console.log('aaaaaaaaaaaaaa3', answer[3]);
console.log('aaaaaaaaaaaaaa4', answer[4]);
console.log('aaaaaaaaaaaaaa5', answer[5]);
console.log('aaaaaaaaaaaaaa6', answer[6]);
 
           /*loops through the form answers for form1 and does a comparison with 
             what the user enters and displays message next to the question.  */ 
              for(var i=0; i <= 7; i++) {
                  if(newarray[i] == answer[i]){
                    console.log('do they match', newarray, answer);
                    forma  = '#form1-' + i;
                    console.log('fodddddd',forma);
                     $(forma).append("Good Job!");

                   }else{

                      console.log("after the else");
                     forma  = '#form1-' + i;
                    $(forma).append("Please try again");
                   }
               } 
 

           }
    });
  
 })

     $('body').on('click','#arrow_button2',function(){
      console.log("SSSSSSSSSSSSSSSSSSSSin thearrow2");
     show_form2();
        $('#form1').addClass('questions'); 
        change_form2();
     })


 /*$('body').on('click','#form_button2',function(){
       $("#form1").hide();
       $("#drop-box").hide();
       change_pic();
      
     }) */




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
             $('#form1 input').on('change', function() {
                   console.log('sssssssssssssinside of form1')
                     
 
                    
                    $form = 1;
                         // Ajax Call
                    }); //event handler
                }); //document.ready

                /*if($test == 'map') {
                  console.log("this is a map" , $test);
                } */
             });


                 $("#drop-box").show();
             
 
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

  
