// variables

const container = document.querySelector(".grid-container");
const ChoiceBtn = document.querySelector(".choice");
const ColorBtn = document.querySelector(".color");
const RainbowBtn = document.querySelector(".rainbow");
const BackgroundBtn = document.querySelector(".background");
const ClearBtn = document.querySelector(".clear");

//grid container

for(let i = 1; i <= 256; i++) {
 
        const square = document.createElement("div");
        square.addEventListener("mouseover" , function(){
            square.style.backgroundColor = "black";
        })
        square.style.width = "40px";
        square.style.height = "40px";
        container.appendChild(square);

}

// event listeners

ClearBtn.addEventListener("click", function(){
    window.location.reload();
});

BackgroundBtn