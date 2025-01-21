/* const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(formData);
}); 
const jsObjectPlease = Object.fromEntries(formData);
console.log(jsObjectPlease); 

async function getStuff() {
    const response = await fetch('https://randomfox.ca/floof/');
    console.log(response);
    const data = await response.json();
    console.log(data);
    
    img.src = data.image
  }

getStuff() 



/* const form = document.getElementById('form')


// listening for a submit event
// then the callback funciton
form.addEventListener('submit', function(event) {
    // to prevent the page refreshing
    event.preventDefault()
    // FormData is built into Javascript 
    // needs to take a formHTML node as it's argument
    // it's going to construct a new 'FormData' object for us.s
    const formData = new FormData(form)
    // transform it into a normal object

    // 'Hey please create me a normal object from the FormData' 
    const data = Object.fromEntries(formData)


    // our data is going to be a collection of key-value pairs
    // the key comes from the 'name' attribute on the input
    // the value is whatever the user typed in.
    console.log(data)
    // {
    //     userName: 'Sam',
    //     userPassword: 'hunter2'
    // }
}) 


// const array = new Array(3)
// const array2 = ['','',''] */

const form = document.getElementById('form')
const displayElem = document.getElementById('holdUi')

form.addEventListener('submit', function(event) {
    // stops our browser refreshing when submitted
    event.preventDefault()
    const result = new FormData(form)
    // turning my FormData object into a normal object
    const searchTerm = Object.fromEntries(result)
    console.log(searchTerm.query)
    fetchWordDef(searchTerm.query)
})


async function fetchWordDef(word) {
    // get my response object
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${word}`)
    // parse the response.body as JSON
    const data = await response.json()
    generateUI(data[0])
}   



function generateUI(data) {
    displayElem.innerHTML = ''
    console.log(data.meanings[0].definitions[0].definition)

    displayElem.innerText = data.meanings[0].definitions[0].definition
}