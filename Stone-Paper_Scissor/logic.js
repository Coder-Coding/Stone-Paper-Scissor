let userscore=0; //variable to store the score of user win.
let compscore=0; //variable to store the score of computer win.

const choices=document.querySelectorAll(".choice"); //getting choice dive in choices object ((all)).
let msgg = document.querySelector("#msg"); //getting message paragrah.

let userscorepara = document.querySelector("#user-score"); //gettiing score paragraph of user.
let compchoicepara = document.querySelector("#computer-score"); //gettiing score paragraph of computer.

//this function will generate the computer choice
const gencomputerchoice = ()=>{
    const option = ["rock","paper","scissor"];
    const randomidx = Math.floor(Math.random()*3); // match floor will get ride of decimal points
                                                //math random will generate random decimal number and (random*3 will give 2.89~ in 0-2 range)
                                                //and this will give us number and this no. we will use for our array as an index.
    return option[randomidx];
};

//this will show the draw condition on the screen.
const draw = ()=>{
    msgg.innerText="The game is a Draw!";
    msgg.style.backgroundColor="gray";
}

//this will show the winner or loser on screen in the play game box.
const showwinner= (userWin,userchoice,compchoice)=>{
    if(userWin){
        msgg.innerText=`You-Win! ${userchoice} beats ${compchoice}`;
        msgg.style.backgroundColor="green";
        userscore++;
        userscorepara.innerText=userscore;
    }
    else{
        msgg.innerText=`You lose! ${compchoice} beats ${userchoice}`;
        msgg.style.backgroundColor="red";
        compscore++;
        compchoicepara.innerText=compscore;
    }
}

//this will decide the winner or loser.
const playgame=(userchoice)=>{
    //generate computer choice.
    const compchoice = gencomputerchoice();
    if(compchoice === userchoice){
        //draw
        draw();
    }
    else{
        let userWin =true;
        if(userchoice === "rock"){
            userWin = compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userWin = compchoice === "scissor"?false:true;
        }
        else{//userchoice = scissor
            userWin = compchoice === "rock"?fale:true;
        }
        showwinner(userWin,userchoice,compchoice);
    }
};

//this will get our div box one by and we will add event on it.
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        // console.log("clicked",userchoice);
        playgame(userchoice);
    });
});