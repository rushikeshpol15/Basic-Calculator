let str="";
let display=document.getElementById("calculation");
let buttons=document.querySelectorAll(".btn");

buttons.forEach((button)=>{

    button.addEventListener("click",(e)=>{
        if(button.innerHTML==="AC")
        {
            str="";
            display.value=str;
        }
        else if(button.innerHTML==="x")
        {
            str=str+'*';
            display.value=str;
        }
        else if(button.innerHTML==="=")
        {
            str=eval(str);
            display.value=str;
        }
        else{
            str=str+button.innerHTML;
            display.value=str;
        }
          
        
    })
})