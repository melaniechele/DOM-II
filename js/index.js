// Your code goes here
const allPage = document.querySelector("html");

allPage.style.textAlign = "center"
allPage.style.color = 'purple'

window.addEventListener('load', () => {
    allPage.style.backgroundColor = 'lightblue'
    });

//centered logo title to screen to make it look better

const topBack = document.querySelector(".logo-heading");


topBack.addEventListener('mouseenter', () => {
    topBack.style.fontSize = "80px";
});

topBack.addEventListener('mouseleave', () => {
    topBack.style.fontSize = "50px";
});

topBack.addEventListener('dblclick', () => {
alert("Why are you clicking me?!")
});

// nav (no events)
const navPart = document.querySelector(".nav");
navPart.style.padding = '50px';

const navStyle = document.querySelectorAll(".nav-link");

navStyle.forEach((styles) => {
    styles.style.textDecoration = 'none';
    styles.style.padding = '20px';

  });



// image event


window.addEventListener('resize', (e) =>{
    allPage.style.backgroundColor = 'black'
    allPage.style.color = 'orange'
})


document.addEventListener('keydown', (e) => {
    console.log(`${e.code}`)
})

document.addEventListener('select', (e)=>{
    console.log(`${e.code}`)
})

allPage.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});

window.addEventListener('focus', (event) => {
    console.log('here it goes. you-re focusing on something finally!');
});



// window.addEventListener('scroll', (event)=>{
//      // Amount of times scrolled
//     const  timesScrolled = document.documentElement.scrollHeight - window.innerHeight;

//      // Getting the amount of scrollability 
//     const screenHeight = window.scrollY; 

//      // checking if we are at the bottom of page
//     if (screenHeight === timesScrolled ){
//         alert('This is the bottom');
//     }
// })


// created elements to drag event
const divDrag = document.createElement('div');

// adding style to div drag
divDrag.style.border = '1px solid black'
divDrag.style.width = '100px'


//creating paragraph for diva
const para = document.createElement('p');

//added text to drag
para.textContent = "DRAG ME!!!!!"

//adding attribute
para.setAttribute('draggable', true)
para.setAttribute('class', "dropTheBomb")

// grabbing container
const container = document.querySelector('.container')

// appending to container and text created 
container.appendChild(divDrag);
divDrag.appendChild(para);

//created div to drop elevent
const divDrop = document.createElement('div');

//adding attributes 
divDrop.setAttribute('class','dropTheBomb' )


//adding astyle to div grop
divDrop.style.border = '1px solid black'
divDrop.style.width = '150px'
divDrop.style.height = '50px'
divDrop.style.margin = '15px'

//appending to divDrag
container.appendChild(divDrop);

//grabbing ondrag 
/* Events fired on the drag target */
document.ondragstart = function(event) {
    event.dataTransfer.setData("Text", event.target.id);
  };

/* Events fired on the drop target */
document.ondragover = function(event) {
    event.preventDefault();
  };

  document.ondrop = function(event){
    event.preventDefault();
    if ( event.target.className == "dropTheBomb" ) {
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
  }
}
  


