let color1=document.getElementById("color1")
let color2=document.getElementById("color2")

let body=document.querySelector("body")
let variable1=document.getElementById("showoff")

const newf= ()=>{
    body.style.background=`linear-gradient(to bottom,${color1.value},${color2.value})`;
    body.style.backgroundSize="1500px 1000px"
    variable1.innerHTML=`Values of the current colors are ${color1.value} and ${color2.value}`    
}
color1.addEventListener("input",newf);
color2.addEventListener("input",newf);



/*color1.addEventListener("input",()=>{
    body.style.background=`linear-gradient(to right,${color1.value},${color2.value})`
})
color2.addEventListener("input",()=>{
    body.style.background=`linear-gradient(to right,${color1.value},${color2.value})`
})*/
/*let color1=document.getElementById("color1");
let color2=document.getElementById("color2");

let body=document.querySelector("body");

function setGradient(){
  body.style.background='linear-gradient(to right, '
        + color1.value + ', ' + color2.value + ')';
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);*/