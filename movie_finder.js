const API_URL = "http://www.omdbapi.com/?apikey=c95eb28b&s=";
  const API_URL_SEARCH = "http://www.omdbapi.com/?apikey=c95eb28b&i=";  

var searchinput = document.getElementById("search_input");
var card = document.getElementsByClassName("movie-cards")[0];

document.getElementByIdClassName("search")[0].addEventListener('click',function()
  {console.log(searchinput.value);
  const query = searchinput.value;
	if(query){
		 getMovies(API_URL+query);
	}
});

     async function getMovies(url){
     	const response  = await fetch(url);
     	const Data = await response.json();
     	console.log(Data);
     	showMovies(Data.Search);
    }
  
  function showMovies(movies){
  	card.innerhtml="";
  	movies.forEach(async function (movie){
  		const movieData = await fetch (API_URL_SEARCH + movie.imdbID);
  		const movieDataobj =  await movieData.json();
  		movie_display(movieDataobj);
  	});
  }

  function movie_display(imovie){
  	const movieElement = document.createElement("div");
  	movieElement.classList.add("movie-card");
  	movieElement.innerHTML= 
  	<div class ="card">
  	<img src  = "${imovie.poster}" alt = "Poster" width = "300px"heigth="300px"/>
  	<br>
  	<div class = "movie-description">
    <span class="movie-title><b>Title</b><span class ="value">${movie.Title}</span></span>
    <span class="movie-title><b>Title</b><span class ="value">${movie.imdbRating}</span></span>
    <span class="movie-title><b>Title</b><span class ="value">${movie.Director}</span></span>
    <span class="movie-title><b>Title</b><span class ="value">${movie.Released}</span></span>
    <span class="movie-title><b>Title</b><span class ="value">${movie.Genre}</span></span>
  	</div>
  	</div>
;
  card.appendChild(movieElement);
}