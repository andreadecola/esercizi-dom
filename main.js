//ESERCIZIO 1
//Lavoriamo sul DOM. Creare 3 paragrafi in HTML e 3 bottoni. 

//Il primo bottone dovrà nascondere i 3 paragrafi e farli ricomparire
//il secondo bottone dovrà cambiare i colori dei paragrafi in maniera casuale
//il terzo bottone dovrà rendere i paragrafi in grassetto e farli tornare come prima.
//PS: Uniamo le conoscenze che abbiamo appreso finora, come sappiamo quando c'è qualcosa di casuale possiamo utilizzare il Math.random().
let titolo = document.querySelector('#title')
let paragrafo = document.querySelectorAll('.paragrafo');
let bottone1 = document.querySelector('#nascondiericompari');
let bottone2 = document.querySelector('#cambiareicolori');
let bottone3 = document.querySelector('#grassetto');


paragrafo.forEach((paragrafo)=>{
    bottone1.addEventListener('click', () =>{
        paragrafo.classList.toggle('display') ;
    })
    bottone2.addEventListener('click',() =>{
        let red = Math.floor(Math.random() *( 255 - 0 +1));
        let green  = Math.floor(Math.random() *( 255 - 0 +1));
        let blue = Math.floor(Math.random() *( 255 - 0 +1));
        paragrafo.style.color =`rgb(${red},${green},${blue})`;
    })
    bottone3.addEventListener('click',()=>{
        paragrafo.classList.toggle('grassetto');
    })
})

//ESERCIZIO 2
//Replicare le card in dinamica con JavaScript, come visto a lezione.
//Create un array di oggetti a vostro piacimento e provare a divertirvi come abbiamo fatto a lezione, se avete tempo provate ad inserire qualche altra feature o funzione in JS.

let lista = [
    {name:'andrea', age: 29, mansione:'backend'},
    {name:'irene', age: 20, mansione:'tecnico di radiologia'},
    {name:'astrubale', age: 28, mansione:'operaio'}
]

let card=document.querySelector('#card');
lista.forEach((studente)=>{
    let div=document.createElement('div');
    div.classList.add('col-12','col-md-4');
    div.innerHTML=`<div class="card">
    <img src="https://picsum.photos/100" class="card-img-top" alt="casuali">
    <div class="card-body">
      <h5 class="card-title">${studente.name}</h5>
      <p class="card-text">${studente.age}</p>
      <p class="card-text">${studente.mansione}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `
    ;
    card.appendChild(div)
})






