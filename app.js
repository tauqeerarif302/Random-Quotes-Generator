document.addEventListener("DOMContentLoaded", function(){
    let quote = document.getElementById("quote");
    let author = document.getElementById("author");
    let generate = document.getElementById("generate");
    let getQuote = () =>{
        fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            let rand = Math.floor(Math.random() * data.length);
            quote.textContent = data[rand].text;
            let newAuthor = data[rand].author.replace(', type.fit', '');
            author.textContent = newAuthor;

        })
    }
    
    
    generate.addEventListener("click", getQuote);
    getQuote();
});

