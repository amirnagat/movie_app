
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e65da03b5bmsh17fef234819a948p15c174jsnd0f8c32a3add",
    "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  },
};
let input = document.querySelector("input");
let body = document.body;
let allMovies = document.createElement("div");
let movie = document.createElement("div");
body.append(allMovies);
movie.classList.add("row");
allMovies.append(movie);

fetch("https://movies-app1.p.rapidapi.com/api/movies", options)
  .then((response) => response.json())
  .then(function (response) {
    showData(response.results);
    input.addEventListener("keyup",function(){
		movie.innerHTML = "";
		let inputVal = input.value.trim();
		let filterIt = response.results.filter(function (movie) {
		   return movie.titleOriginal.toLowerCase().includes(inputVal.toLowerCase());
		});
		// showData(filterIt);
	  showData(filterIt);
	});
  });


function showData(arrTitle) {
  arrTitle.forEach(function (title, index) {
    allMovies.style.cssText = `  overflow-x: hidden;`;
    movie.innerHTML += `<div class="warp col-3 justify-content-center align-items-baseline d-flex flex-column ">
		<img class="w-75" src=${title.image} width:20px;  alt="#"> 
		<p class="text-white">Movie:${title.titleOriginal}</p>
		<p class="text-white">year:${title.year}</p>
		<p class="text-white">rate:${title.rating}</p>
		<a href="${title.embedUrls[3].url}" target="_blank">${title.titleOriginal}</a>
		</div>`;
  });
} 
