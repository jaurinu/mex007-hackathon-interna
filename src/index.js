const movies= [
    "Psycho","The Shining","The Exorcist","The Thing from Another World","Night of the Living Dead","Alien","The Omen","Rosemary's Baby","The Birds","Carrie",
    "Kill Bill: Vol. 1","John Wick","Léon: The Professional","Die Hard","In the Line of Fire","Scarface", "Heat","The Fugitive","Fury", "Face/Off",
    "A Shock to the System","Dogtooth","Something's Gotta Give","Everything You Always Wanted to Know About Sex * But Were Afraid to Ask","Mighty Aphrodite","Englishman in L.A: The Movie","Modern Times","Jabberwocky","Little Miss Sunshine",
    "Julie & Julia","La La Land","Carol","The Shape of Water","The Perks of Being a Wallflower","Annie Hall","Call Me by Your Name","Mamma Mia!",
    "The Godfather", "Seven Samurai","Metropolis","Citizen Kane","Dekalog","Three Colors: Blue","City of God","Bicycle Thieves","The Seventh Seal","Waltz with Bashir",
    "Avengers: Infinity War","Billy Elliot","Patch Adams",
    "The Pursuit of Happyness","Men of Honor","Life of Pi","The Green Mile","Life Is Beautiful",
    "Life Is Beautiful","Mean Girls","Bridget Jones's Diary","Captain America: The First Avenger","Rocky",
    "The Notebook","Eat Pray Love","Closer","Eternal Sunshine of the Spotless Mind", "He's Just Not That Into You"];
 const botonFilter = Array.from(document.getElementsByClassName("movie-genre"));
 const browser = document.getElementById("browser");
 const printPoster= document.getElementById("print-poster");
 const  btnn = document.getElementsByClassName('btnn');
 const buttonBackHome = document.getElementById("home");
 const dataAllMovies=[];

 buttonBackHome.addEventListener('click', () => { // Boton para refresh versión mobile (casita)
   location.reload(true);
 })

 const dataMovies = () =>{
 for (let i = 0; i< movies.length; i++) {
 fetch("https://www.omdbapi.com/?t="+ movies[i]+"&apikey=3a93344c")
 .then(response => response.json ())
 .then (data =>{
        dataAllMovies.push(data);
        // printData(dataAllMovies);
    })
 }
 };
 dataMovies();


 const getMoviesGender = (arrayButtons) => {
   arrayButtons.map((buttonType) => {
     buttonType.addEventListener("click", (event) => {
       const buttonType = event.target.id;
       const filteredArrayGender = window.main.filterGenreMovie(dataAllMovies, buttonType);
       printData(filteredArrayGender)
     })
   })
 }
 getMoviesGender(botonFilter);

 const printInformationMovie =(dataAllMovies) => {
   const printerPoster = printPoster;
   printerPoster.innerHTML=" ";
   dataAllMovies.forEach((dataAllMovies) => {
       let poster = `<div class="single-card top">
       <div class="poster">
        <img class="poster-size" src= ${dataAllMovies.Poster}/>
       </div>
<div class="text">

   <p class="titulo"> ${dataAllMovies.Title}</p>
   <br> <br>
   <p class="secciones"> Sinopsis</p>
   <p class="contenidos">
         ${dataAllMovies.Plot}
         </p>
   <p class="secciones"> Créditos y reparto</p>
   <p class="contenidos">

       Director   ${dataAllMovies.Director}
<br>
       Reparto    ${dataAllMovies.Actors}
    </p>

    <p class="secciones"> Calificación</p>
   <p class="contenidos">
   ${dataAllMovies.Ratings[1].Source}, ${dataAllMovies.Ratings[1].Value}
   </p>

</div>
</div>
       `;
       printPoster.insertAdjacentHTML("beforeend",poster)
 })
}


 const printData=(dataAllMovies) => {
    const printerPoster = printPoster;
    printerPoster.innerHTML=" ";
//cambie esta seccion//
    dataAllMovies.forEach((dataAllMovies) => {
        let poster = `<div class ="wrapper btnn" data-toggle="modal" id="${dataAllMovies.Title}" data-target="#miModal${dataAllMovies.Poster}"> <!-- cambie esta linea-->
        <img src=${dataAllMovies.Poster} class="tamaño"/>
        <div class=wrapper-text>
        <p class=gender>${dataAllMovies.Title}</p>
        <p class=gender>${dataAllMovies.Director}</p>
        <p class=gender>${dataAllMovies.Ratings[0].Value}</p>
        </div>
        `;
        printPoster.insertAdjacentHTML("beforeend",poster)
    })
    for (let i = 0; i < btnn.length; i++) {
      btnn[i].addEventListener('click', (event) => {
        const titleId = btnn[i].id;
        const informationMovie = window.main.cardInformation(dataAllMovies , titleId);
        printInformationMovie(informationMovie)
      })
    }
  }


  const filterLetter = () => {
    browser.addEventListener('keyup', () => {
      let searchValueInput = browser.value;
      printData(window.main.filterInput(dataAllMovies, searchValueInput));
    });
  }
  filterLetter();
