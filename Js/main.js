
 
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmFiY2RiZDExNjZmZWJkN2NjODI2ZGUwYmU2NDBlZiIsIm5iZiI6MTcyMjk1NDA4MS43ODUwNywic3ViIjoiNjZiMjJlNmFiZmI4MTE0ODRlZmMxZmUyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Sgl6CPT-E2t3aQ3cTtrm-_wOmoE-sZTVPBBYnCn7cdE'
    }
  };
  
 
  const List_movie = document.querySelector ('section');
  const inputmovie = document.querySelector ('#inputmovie');         
  let result = [];

  inputmovie.addEventListener ('keyup', function (e) {
    const search = e.target.value.toLowerCase ();
     const newList = result.filter((movie) =>movie.title.toLowerCase().includes(search) )
     
    })
   
  
  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(response => { console.log (response)
      for (const movie of response.results) {
          const img = document.createElement('img');
          const contain =document.createElement('article');
          const title = document.createElement ('h2');
          const over = document.createElement ('p');
          const date = document.createElement ('p');
          const vote = document.createElement ('p');
          img.src = "https://image.tmdb.org/t/p/original" + movie.poster_path;
          
          
   title.textContent = movie.title;               
   over.textContent =  movie.overview;
   date.textContent = "Release: "+movie.release_date;
   vote.textContent = "Vote: "+movie.vote_count;
   contain.append(title,img,over,date,vote);
   List_movie.appendChild(contain);

   

   img.addEventListener('click', () => {
    if (vote.style.display === 'none') {
    vote.style.display = 'block';
    date.style.display = 'block';
    over.style.display = 'block';
    
   }

    else {
      vote.style.display = 'none';
      date.style.display = 'none';
      over.style.display = 'none';
     
    }





})
     } }
    
    
    )  
    .catch(err => console.error(err));

    
function createList () {
  
}