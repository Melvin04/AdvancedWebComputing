$(function() {
	$('#btn-search').click(function(){
		var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
    var peliks = $("#movieName").val();
        
    $.ajax({
        url: url,
        data: {
            q: peliks,
            apiKey: 'hcrurhsttexasrgfm2y6yahm'
        },
        dataType: 'jsonp',
        success: showMovies
    });
	
    function showMovies(response) {
        console.log(response);
        for (var i=1;i<response.movies.length; i++){
            var movie = response.movies[i];     
            $('body').append('<h3>'+i+'<h3>');    
            $('body').append('<img src="'+movie.posters.thumbnail+'">')
            $('body').append('<h1>'+movie.title+'</h1>');
            $('body').append('<h2>'+movie.year+'<h2>');
            $('body').append('<h3>'+movie.synopsis+'<h3>');
            var lengthofmov = response.movies.length;
                    $('#resultright').html("");
                    $('#resultright').append('<p class="text-info">Total movies found: '+lengthofmov+'</p>');
          }
    }

	});
});