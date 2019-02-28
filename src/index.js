const movies= [
"Psycho","The Shining","The Exorcist","The Thing from Another World","Night of the Living Dead","Alien","The Omen","Rosemary's Baby","The Birds","Carrie",
"Kill Bill: Vol. 1","John Wick","Léon: The Professional","Die Hard","In the Line of Fire","Scarface", "Heat","The Fugitive","Fury", "Face/Off",
"Toutes des connes","A Shock to the System","Dogtooth","Trust (1990)","Something's Gotta Give","Everything You Always Wanted to Know About Sex * But Were Afraid to Ask","Mighty Aphrodite","Englishman in L.A: The Movie","Modern Times","Jabberwocky","Little Miss Sunshine",
"Julie & Julia","La La Land","Carol","The Shape of Water","The Perks of Being a Wallflower","Annie Hall","Call Me by Your Name","Mamma Mia!","(500) Days of Summer","Le fabuleux destin d'Amélie Poulain",
"The Godfather", "Seven Samurai","Metropolis","Citizen Kane","Dekalog","Three Colors: Blue","City of God","Bicycle Thieves","The Seventh Seal","Waltz with Bashir",

"Avengers: Infinity War","Billy Elliot","Patch Adams",
"The Pursuit of Happyness","Men of Honor","Life of Pi","The Green Mile","Life Is Beautiful",
"Life Is Beautiful","Mean Girls","Bridget Jones's Diary","Captain America: The First Avenger","Rocky",
"The Notebook","Eat Pray Love","Closer","Eternal Sunshine of the Spotless Mind", "He's Just Not That Into You",];



const area= document.getElementById("poster")

for (let i = 0, l = movies.length; i < l; i++) 
fetch("https://www.omdbapi.com/?t="+ movies[i]+"&apikey=3a93344c")
.then(response => response.json ())
.then ((data) => {
    
    area.innerHTML= `<div>
        <img src="${data.Poster}" />
    </div>`;
    //console.log(data)
})

.catch(err => console.log(err))
