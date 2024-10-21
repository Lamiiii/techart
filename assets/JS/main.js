let next = document.querySelector("#Next");

let back = document.querySelector("#Back");

let img = document.querySelector("#img");
let images = [
  "../img/img1.jpg",
  "../img/img2.jpg",
  "../img/img3.jpg",
  "../img/img4.jpg",
  "../img/img5.jpg",
];
let num = 0;


next.addEventListener("click", function () {
  num++;
  if (num >= images.length) {
    num = 0;
    img.src = images[num];
  } else {
    img.src = images[num];
  }
});


console.log(next);


back.addEventListener("click", function () {
  num--;
  if (num < 0) {
    num = images.length - 1;
    img.src = images[num];
  } else {
    img.src = images[num];
  }
});



let phone1 = document.querySelector("#phone1"); 
let phone2 = document.querySelector("#phone2"); 
let phone3 = document.querySelector("#phone3"); 
let phone4 = document.querySelector("#phone4"); 

let Next = document.querySelector("#next");
let Back = document.querySelector("#back");


let sets = [
    [
        "../img/sec1.jpg",
        
        "../img/sec2.jpg",
        "../img/sec3.jpg",
        "../img/sec4.jpeg"
    ],
    [
        "../img/sec5.jpg", 
        "../img/sec6.jpg",
        "../img/sec7.jpg",
        "../img/sec10.jpg"
    ],
    [
        "../img/sec9.jpg",
        "../img/sec10.jpg",
        "../img/sec14.jpg",
        "../img/sec12.jpg"
    ],
    [
        "../img/sec10.jpg",
        "../img/sec12.jpg",
        "../img/sec13.jpeg",
        "../img/sec14.jpg"
    ]

];

let setIndex = 0;

function updateImages() {
    phone1.src = sets[setIndex][0];
    phone2.src = sets[setIndex][1];
    phone3.src = sets[setIndex][2];
    phone4.src = sets[setIndex][3];
}



Next.addEventListener("click", function() {
    setIndex++; 
    if (setIndex >= sets.length) {
        setIndex = 0;
    }
    updateImages(); 
});


Back.addEventListener("click", function() {
    setIndex--; 
    if (setIndex < 0) { 
        setIndex = sets.length - 1;
    }
    updateImages(); 
});



let buttons=document.querySelectorAll(".button")

buttons.forEach((button)=>{
  button.addEventListener("mouseenter",function(){
    let image=button.closest(".overflow-hidden").querySelector(".img")
    image.style.transition="transform 1s ease-in"
    image.style.transform="scale(1.2)"
  })
  button.addEventListener("mouseleave", function() {
    let image = button.closest('.overflow-hidden').querySelector('.img');
     image.style.transform = "scale(1)"; // Reset the scale
   });
})






let images1 = document.querySelector(".rig1");
let images2 = document.querySelector(".rig2");
let images3 = document.querySelector(".rig3");
let images4 = document.querySelector(".rig4");
let sonraki = document.querySelector("#sonraki"); 
let evvelki = document.querySelector("#evvelki"); 

let Sett = [
  [
    "../img/image1.jpg",
    "../img/image2.jpg",
    "../img/image3.jpg",
    "../img/image4.jpg",
  ],
  [
    "../img/image5.jpg",
    "../img/image6.jpg",
    "../img/image7.jpg",
    "../img/image8.jpg",
  ],
  [
    "../img/image9.jpg",
    "../img/image10.jpeg",
    "../img/image11.jpg",
    "../img/image12.jpg",
  ],
  [
    "../img/image13.jpg",
    "../img/image14.jpeg",
    "../img/image15.jpg",
    "../img/image16.jpg",
  ],
];

let numbers=0;

function differentImage(){
  images1.src=Sett[numbers][0];
  images2.src=Sett[numbers][1];
  images3.src=Sett[numbers][2];
  images4.src=Sett[numbers][3];
}

evvelki.addEventListener("click",function(){
  numbers++
  if(numbers>=Sett.length){
    numbers=0
  }
  differentImage()
})

sonraki.addEventListener("click",function(){
 numbers--
 if(numbers<0){
 numbers=Sett.length-1
 }
 differentImage()
})

differentImage()




// let device = document.querySelector("#device"); 
// let device2 = document.querySelector("#device2"); 
// let device3 = document.querySelector("#device3"); 
// let device4 = document.querySelector("#device4"); 

// let Nexts = document.querySelector("#nexts");
// let Backs = document.querySelector("#backs");


// let Dataa = [
//     [
//         "../img/sec1.jpg",
        
//         "../img/sec2.jpg",
//         "../img/sec3.jpg",
//         "../img/sec4.jpeg"
//     ],
//     [
//         "../img/sec5.jpg", 
//         "../img/sec6.jpg",
//         "../img/sec7.jpg",
//         "../img/sec10.jpg"
//     ],
//     [
//         "../img/sec9.jpg",
//         "../img/sec10.jpg",
//         "../img/sec14.jpg",
//         "../img/sec12.jpg"
//     ],
//     [
//         "../img/sec10.jpg",
//         "../img/sec12.jpg",
//         "../img/sec13.jpeg",
//         "../img/sec14.jpg"
//     ]

// ];

// let Index = 0;

// function updateImages() {
//     device.src = Dataa[Index][0];
//     device2.src = Dataa[Index][1];
//     device3.src = Dataa[Index][2];
//     device4.src = Dataa[Index][3];
// }



// Nexts.addEventListener("click", function() {
//     setIndex++; 
//     if (setIndex >= sets.length) {
//         setIndex = 0;
//     }
//     updateImages(); 
// });


// Backs.addEventListener("click", function() {
//     setIndex--; 
//     if (setIndex < 0) { 
//         setIndex = sets.length - 1;
//     }
//     updateImages(); 
// });





  