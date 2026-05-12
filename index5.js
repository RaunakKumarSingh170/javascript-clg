let  inp=document.querySelector("input")
let  h1=document.querySelector("h1")
inp.addEventListener("input",(e)=>{
    //console.log(e.target.value)
    h1.innerText=e.target.value
})