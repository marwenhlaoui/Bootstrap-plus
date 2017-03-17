

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
        	item.find('.modal-body pre').text(cleanSource(code));
        	item.modal('show');
        }); 

         function cleanSource(html) {
            html = html.replace(/×/g, "&times;")
                       .replace(/«/g, "&laquo;")
                       .replace(/»/g, "&raquo;")
                       .replace(/←/g, "&larr;")
                       .replace(/→/g, "&rarr;");

            var lines = html.split(/\n/);

            lines.shift();
            lines.splice(-1, 1);

            var indentSize = lines[0].length - lines[0].trim().length,
                re = new RegExp(" {" + indentSize + "}");

            lines = lines.map(function(line){
              if (line.match(re)) {
                line = line.substring(indentSize);
              }

              return line;
            });

            lines = lines.join("\n");

            return lines;
          }

});