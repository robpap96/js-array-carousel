"use strict";

//creo array dei percorsi delle immagini
const images = [
    '<img src="img/01.jpg">',
    '<img src="img/02.jpg">',
    '<img src="img/03.jpg">',
    '<img src="img/04.jpg">',
    '<img src="img/05.jpg">'
];

const chevronUp = '<i class="fa-solid fa-chevron-up"></i>';
const chevronDown = '<i class="fa-solid fa-chevron-down"></i>';

//creo le variabili che mi servono
let active = 0;
const container = document.querySelector('.container');

//creo ed inserisco il div items
const element = document.createElement('div');
element.classList.add('items');
container.append(element);

//selezione items
const items = document.querySelector('.items');

//creo ed inserisco il div prev dentro items
const prev = document.createElement('div');
prev.classList.add('prev');
items.append(prev);
document.querySelector('.prev').innerHTML = chevronUp;


//creo ed inserisco il div next dentro items
const next = document.createElement('div');
next.classList.add('next');
items.append(next);
document.querySelector('.next').innerHTML = chevronDown;



//creo il ciclo che inserisce i div nel container con le rispettive immagini
for(let i=0; i<images.length; i++) {
    const item = document.createElement('div');
    item.classList.add('item');
    item.id = i;
    items.append(item);
    document.getElementById(i).innerHTML = images[i];
}

