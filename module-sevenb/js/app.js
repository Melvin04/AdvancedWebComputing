$('#btn').click(function(){
		var input = $('#movie').val();
		if(input == ""){
			alert("Please input the required field!");
		}
			$(function(){




			$('#resultL').html("");
			$('#resultL').append('<p class="text-info"> Result for: ' +input+ '</p>');
			var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
			$.ajax({
				url: url,
				data: {
					q: input,
					apiKey: '3xczrz9gfjqnvktwx9kdq5tn'
				},
					dataType: 'jsonp',
					success: showMovies
			});
			function showMovies(response){
				$('.table-part').remove();
		        $('body').append('<div class="row table-part"><div class="offset1 span10"><table class="table table-bordered"><thead><tr><th><center>Image</th><th><center>Title</th><th><center>SYNOPSIS</th><th><center>DATE</th></tr></thead><tbody></tbody></table></div></div>');

				$('.movie_con').html("");
				for(i=0;i<response.movies.length;i++){
					var movie = response.movies[i];
					var synop = movie.synopsis;
					if(synop == ""){
						synop = '<h3 style="text-align: center;">None</h3>';
			            $('tbody').html($('tbody').html()+'<tr><td class ="thumb"><center><img src="'+movie.posters.detailed+'"></td><td class="title"><center><h4>'+movie.title+'</h4></td><td class="synopsis"><center><h4>'+synop+'</h4></td><td class="year"><center>'+movie.year+'</td>');

					}else{

			            $('tbody').html($('tbody').html()+'<tr><td class ="thumb"><center><img src="'+movie.posters.detailed+'"></td><td class="title"><center><h4>'+movie.title+'</h4></td><td class="synopsis"><center><h4>'+synop+'</h4></td><td class="year"><center>'+movie.year+'</td>');

					}
				}
					var lengthofmov = response.movies.length;
					$('#resultR').html("");
					$('#resultR').append('<p class="text-info">Total result found: '+lengthofmov+'</p>');
			}

			});
			input = $('#movie').val("");
	});
$(document).ready(function(){
	$('#movie').keypress(function(event){
		if(event.which == 13){
		var input = $('#movie').val();
		if(input == ""){
			alert("Please type in the text field!");
		}
			$(function(){




			$('#resultL').html("");
			$('#resultL').append('<p class="text-info">Result for: ' +input+ '</p>');
			var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
			$.ajax({
				url: url,
				data: {
					q: input,
					apiKey: '3xczrz9gfjqnvktwx9kdq5tn'
				},
					dataType: 'jsonp',
					success: showMovies
			});
			function showMovies(response){
                $('.table-part').remove();
		        $('body').append('<div class="row table-part"><div class="offset1 span10"><table class="table table-bordered"><thead><tr><th><center>Image</th><th><center>Title</th><th><center>SYNOPSIS</th><th><center>DATE</th></tr></thead><tbody></tbody></table></div></div>');
				$('.movie_con').html("");
				for(i=0;i<response.movies.length;i++){
					var movie = response.movies[i];
					var synop = movie.synopsis;
					if(synop == ""){
						synop = '<h3 style="text-align: center;">None</h3>';
			            $('tbody').html($('tbody').html()+'<tr><td class ="thumb"><center><img src="'+movie.posters.detailed+'"></td><td class="title"><center><h4>'+movie.title+'</h4></td><td class="synopsis"><center><h4>'+synop+'</h4></td><td class="year"><center>'+movie.year+'</td>');
					}else{



			            $('tbody').html($('tbody').html()+'<tr><td class ="thumb"><center><img src="'+movie.posters.detailed+'"></td><td class="title"><center><h4>'+movie.title+'</h4></td><td class="synopsis"><center><h4>'+synop+'</h4></td><td class="year"><center>'+movie.year+'</td>');

					}
				}
					var lengthofmov = response.movies.length;
					$('#resultR').html("");
					$('#resultR').append('<p class="text-info">Total result found: '+lengthofmov+'</p>');
			}

			});
				
				input = $('#movie').val("");
	}		

	});
	


});