

$(document).ready(function() {
		$(window).scroll(function() { 
            if ($(this).scrollTop() < 400) {
                $('.go-top').hide(); 
            }else{ 
                $('.go-top').show();
            }  
        });

        $('.scrollTo').on('click',function(){
        	$($(this).attr('data-id')).animatescroll();
        });

        $('.menu-right li a').on('click',function(){
        	$($(this).attr('href')).animatescroll();
        });

        $('.showcode .code').on('click',function(){ 
        	var code = $(this).parent().find('.code-data').html(); 
        	var item = $('#showcode'); 
        	item.find('.modal-body').html("<pre class='code'></pre>");
        	item.find('.modal-body pre').text(code);
        	item.modal('show');
        }); 

});