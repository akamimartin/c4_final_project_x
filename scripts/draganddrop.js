
$(document).ready(function(){
    $('.box').draggable({
    	 helper: 'clone'
    	});


      $('.box').droppable({
      	     drop: function(event, ui) {
              tolerance: 'touch',
                  var id = $(ui.draggable).attr('id');
                  var name = $(ui.draggable).html();
                  var box = $(this).attr('id');
                  $.ajax({
                       url: 'dragndrop.ajax.php',
                       type: 'GET',
                       data: {
                          'id' : id,
                          'box' : box
                       },
                        'success': function() {
                             $(ui.draggable).remove();
                             $('#' + box).append('<div id="'+ id + '">' + toy + '</div>');
                             $('div#' + id).draggable({
                               helper: 'clone'
                          });
                             $(this.css('min-height', 'auto');
                           

                       }  


                  });
              }
       });

 });





  
