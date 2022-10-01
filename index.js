const cards=[
    {
        id:"card_0",
        img: "/img/1.111.jpg",
        stars: "stars-num-icon-4-5",
        about: "Star Wars Endor Celebration Plush 3-Pack with 2 Ewoks & C-3PO Soft Doll, Collectibl... ",
        votes: 357,
        price: "$29.99",
        icon: "price-icon"
        
        
    },
    {
        id:"card_1",
        img: "/img/1.222.webp",
        stars: "stars-num-icon-4-5",
        about: "STAR WARS Mandalorian Darksaber Lightsaber Toy with Electronic Lights and Sounds, S... ",
        votes: 3.516,
        price: "$33.99",
        icon: "price-icon"
        
    },
    {
        id:"card_2",
        img: "/img/1.333.jpg",
        stars: "stars-num-icon-4-5",
        about: "Star Wars L0-LA59 (Lola) Droid Toy, OBI-Wan Kenobi Series-Inspired, Interactive Toy... ",
        votes: 116,
        price: "$36.99",
        icon: "price-icon"
    },
    {
        id:"card_3",
        img: "/img/1.444.jpg",
        stars: "stars-num-icon-4-5",
        about: "Star Wars The Black Series Princess Leia (Ewok Village) Toy 6-Inch-Scale Return of ...",
        votes: 118,
        price: "$21.99",
        icon: "price-icon"
    },
    {
        id:"card_4",
        img: "/img/1.555.jpg",
        stars: "stars-num-icon-4-5",
        about: "Star Wars Black Series Helmet Action Figure",
        votes: 2528,
        price: "$194.99",
        icon: "price-icon"
    },
    {
        id:"card_5",
        img: "/img/1.666.jpg",
        stars: "stars-num-icon-4",
        about: "Star Wars Retro Collection Yoda Toy 3.75-inch Scale Star Wars: The Empire..",
        votes: 197,
        price: "$61.34",
        icon: "price-icon"
        
    },
    // {
    //     id:"card_6",
    //     img: "/img/card (6).jpg",
    //     stars: "stars-num-icon-4",
    //     about: "Cleverfy Aromatherapy Shower Steamers - Variety Pack of 6 Shower Bombs. Rose Gold Set:..",
    //     votes: 106,
    //     price: "$19.99",
    //     icon: "price-icon"
    // }   
];

const card = document.querySelector(".carousle_main-all-cards");

function addInnerHtml(arr){
    let cardInfo = ``;
    for(let i=0; i<arr.length; i++){

        let info = `<div id="${arr[i].id}" class="carousle_main-card" >
        <img src="${arr[i].img}" alt="" srcset="">
        <div class="description"><p>${arr[i].about}</p></div>
        <div class="stars-num"><div class="${arr[i].stars}"></div><p>${arr[i].votes}</p></div>
        <div class="card-price">${arr[i].price}<div class="${arr[i].icon}"></div></div>
        </div>`;

        cardInfo += info;
    }
    return cardInfo;
}


const cardInfo=addInnerHtml(cards);
card.innerHTML += cardInfo;

//! added an item to the cart

function clickOn(){   
    let num = document.querySelector("#card-num"); 
    let value= num.innerHTML;
    value++;
    document.querySelector("#card-num").innerHTML = value;
}



