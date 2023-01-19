console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

function renderData(data){
    data.forEach(e =>{
        const img = document.createElement('img')
        img.className = 'image-select'
        img.src = e
        document.querySelector('#dog-image-container').append(img) 
    }) 
}
function challengeOne(){
    fetch(imgUrl)
    .then(response=>response.json())
    .then(data=>renderData(data.message))
}

// challengeOne()

function renderData1(data){
    data.forEach(e =>{
        const li = document.createElement('li')
        li.className = 'dog-select'
        li.textContent = e
        document.querySelector('#dog-breeds').append(li) 
    }) 
}

function challengeTwo(){
    fetch(breedUrl)
    .then(response=>response.json())
    .then(data=>(renderData1(Object.keys(data.message))))
    
}

challengeTwo()

let ul = document.getElementById('#dog-breeds')
console.log(ul)
// li.addEventListener('click',(e)=>{
//     console.log(li)
//     li.target.style.color = 'red';
//     // const style = document.createElement('style');
//     // style.color = 'red'
//     // document.querySelector('#dog-breeds').appendChild(style);
// })

// document.addEventListener('click',(e)=>{
//     const sel = document.querySelector('#breed-dropdown')
//     console.log(sel)
// })