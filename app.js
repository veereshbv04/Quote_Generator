const quotesDiv = document.querySelector("#quotes");
const btn = document.querySelector("#cat-pic");

const quotesURL = "https://api.kanye.rest/";

// fetch(quotesURL)
// .then(response => response.json())
// .then( quote =>{
//     quotesDiv.innerHTML+= `<p>${quote.quote}</p>`
// })

function clickHandler(){
    fetch(quotesURL)
    .then(function parse(response){
        console.log(response);
        return response.json();
    })
    .then( quote =>{
    quotesDiv.innerHTML= `<p>${quote.quote}</p>`
})
}

btn.addEventListener("click", clickHandler);