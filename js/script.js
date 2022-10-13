/* Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript. */

//Inseriamo le immagini in un array

const listImage = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];
console.log(listImage );
//Elementi pagina html
const itemsContainer = document.querySelector(".container-images");
console.log(itemsContainer);
//Creiamo un ciclo for per selezionare singolarmente le immagini
for (let i = 0; i < listImage.length; i++){
    //creo una variabile da richimare
    const singleImg = listImage[i];
    //Inserisco le immagini nel dom
    const elementImg = 
        `<div class="items">
            <img src="${singleImg}" alt="">
        </div>`;
    console.log(elementImg);

    //output pagina
    itemsContainer.innerHTML += elementImg;
}
// Settare lo stato di partenza dello slider
const items = document.getElementsByClassName("items");
//variabile posizione
let sliderPosition = 0;
items[sliderPosition].classList.add("active");

//Settare freccia next
const nextBtn = document.querySelector(".bottom-chev");
const prevBtn = document.querySelector(".top-chev");


//Event
nextBtn.addEventListener("click", function(){
        
        if (sliderPosition < (items.length - 1)){

        items[sliderPosition].classList.remove("active");
        
        sliderPosition = sliderPosition + 1;

        items[sliderPosition].classList.add("active");
        } else {
            items[sliderPosition].classList.remove("active");
            sliderPosition = 0;
            items[sliderPosition].classList.add("active");
        }
    
       
   

})



//Settare freccia prev indietro


//event
prevBtn.addEventListener("click", function(){
    if(sliderPosition > 0){
        items[sliderPosition].classList.remove("active");
        sliderPosition--;

        items[sliderPosition].classList.add("active");

        
    } else {
        items[sliderPosition].classList.remove("active");
        sliderPosition = items.length - 1;
        items[sliderPosition].classList.add("active");
    }
    
})


