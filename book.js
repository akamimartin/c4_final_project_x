
function book1() {
	console.log("in the boo1 function");
}







$(document).ready(function() {
    console.log('page is loading');

    	var paragraphs = $('.content').find('p');

    	$.each(paragraphs, function(){
    		var p = $(this);
    		var text = p.text().trim();

    		console.log(text);
    	
	    	var newText = text.replace(/([^ |^\n]+)([ |\n|]+|$)/gi, " $1");
	    	var textArr = newText.split(" ");

	    	console.log("textArr : ", textArr);

	    	var newTextElements = '<span class="txt-con"> '+textArr.join('</span><span class="txt-con"> ')+'</span>';

	    	p.html(newTextElements);
    	});

    	$('body').on('click', '.txt-con', function(){
    		var elm = $(this);
    		var value = elm.html();
    		console.log("you just clicked on : ", value);
    	});   
});