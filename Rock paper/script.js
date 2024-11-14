let userscore=0;
let compscore=0;

const msg_box=document.getElementById(".msg-container");

const choices=document.querySelectorAll(".choice");

const msg=document.getElementById("msg");

let user_score=document.getElementById("user-score");
let comp_score=document.getElementById("comp-score");

//// computer choice...........
const compchoice=()=>{
    const options=["rock","paper","scissor"];;
     let ran_num=Math.floor(Math.random()*3 );
     return options[ran_num];
}

const show_winner=(userwin,user_choice,computer_choice)=>{
  if(userwin){
    console.log("you win");
    userscore++;
    msg.innerText=" YOU WIN !!";
    user_score.innerText=userscore;
    create_image();
  }
  else {
  console.log("computer win ");
  compscore++;
  msg.innerText=" COMPUTER WIN !!"
  comp_score.innerText=compscore;
  // msg.style.color="red";
  create_thumb();
  }
}

////.......reset button 

const reset_btn=()=>{
  compscore=0;
  userscore=0;
  user_score.innerText="0";
  comp_score.innerText="0";

}





//play game main function .............

const play_game=(user_choice)=>
{
  console.log("your choice",user_choice);
  const computer_choice=compchoice();
  console.log("computer choiice =",computer_choice);

  if(user_choice==computer_choice){
    console.log("game has drawn");
    msg.innerText="DRAWW ..."
  }

  else
  {
    let userwin=true;
    if(user_choice==="rock")
    {
        userwin=computer_choice==="paper"?true:false;
    }
    else if(user_choice==="paper")
    { 
        userwin=computer_choice==="scissor"?false:true;
    }

    else
    {
        userwin=computer_choice==="rock"?false:true;
    }
    show_winner(userwin,user_choice,computer_choice);
  }

  
};
  


choices.forEach((choice)=>
{
    console.log(choice);

    choice.addEventListener("click",()=>{
        const user_choice=choice.getAttribute("id");
        // console.log("choice was clicked",user_choice);

        play_game(user_choice);
    });
});


const create_image=()=>{
  const img_element=document.createElement("img");
  img_element.src="./thumbsup.png";
  img_element.alt="image ";
  document.getElementById("image").appendChild(img_element);
  
  setTimeout( function remove_image(){
    document.getElementById("image").removeChild(img_element);
  }, 1500)
  

}


 const create_thumb=()=>{
  const img_element=document.createElement("img");
  img_element.src="./thumbsdown.png";
  img_element.alt="image";
  document.getElementById("thumb").appendChild(img_element);
  img_element.style.height="220px";
  img_element.style.width="220px";

  setTimeout( function remove_image(){
    document.getElementById("thumb").removeChild(img_element);
  }, 1500)

 }