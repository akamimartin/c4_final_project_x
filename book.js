
function book1() {
	console.log("in the boo1 function");
}







$(document).ready(function() {
    console.log('page is loading after document ready');
    
     $('.arrow-content').append('.questions-page1-hide');
  
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
                 console.log("inside the arrow onclick");
                 $('#myModal').modal('show')

                  $('input[type=radio]').click(function() {
                  alert($(this).val());
                  });  

             });     
});


          $('#arrow_button1').on("click", function() {
            $('#questions-page1-hide').remove();
            $('.arrow-content').append('.questions-page1-show'); 
        

          });
