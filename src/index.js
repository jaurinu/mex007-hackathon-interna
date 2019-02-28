const movies= [
"tt0054215","tt0081505","tt0070047","tt0044121","tt0063350","tt0078748","tt0075005","tt0063522","tt0056869","tt0074285"],[]


for (let i = 0, l = movies.length; i < l; i++) 
fetch("https://www.omdbapi.com/?i="+ movies[i]+"&apikey=3a93344c")
.then(response => response.json ())
.then (data => {
    
    
    console.log(data)
})

.catch(err => console.log(err))
