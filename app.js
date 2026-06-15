let userScore = 0;
let compScore=0;
 
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const comscorepara = document.querySelector("#comp-score");



const showwinner=(userwin,userchoice,comchoice) => {
    if(userwin)
    {
       userScore++;
       userscorepara.innerText = userScore;
        msg.innerText = `You win! ${userchoice} beats ${comchoice}`;
msg.style.backgroundColor="Green"
        
    }
    else{
compScore++
comscorepara.innerText=compScore;
           msg.innerText = `You lose!${comchoice} beats ${userchoice}`;
           msg.style.backgroundColor="red";
        
    }
};



const playgame= (userchoice) =>{

    const comchoice = gencompchoice ();
   
    
    if (userchoice=== comchoice){

    gamedraw();
}
else { let userwin =true;
    if(userchoice==="rock"){
        userwin = comchoice === "paper" ? false:true;
    } else if(userchoice==="paper"){
        userwin = comchoice==="scissor" ? false:true;
    }
    else{
        userwin=comchoice==="rock" ? false:true;
    }
    showwinner(userwin,userchoice,comchoice)
}

    
};
const gencompchoice = ()=>{
    const option = ["rock","paper","scissor"];
   const randomindx= Math.floor( Math.random()*3);
   return option [randomindx]

}
const gamedraw =()=>{
    console.log("game was draw");
            msg.innerText="Game was draw";

}
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
const userchoice = choice.getAttribute("id");
playgame(userchoice);
    });
});
