let box=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg=document.querySelector(".msg");
let Nwbtn=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msgContainer");
let turn=true;
let count=0;
const winPatern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];
box.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="X";
            box.style.color="red";
            turn=false;
        }else{
            box.innerText="O";
            box.style.color="green";
            turn=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    })
})
 function empty(){
   box.forEach(box=>{
    box.innerText='';
   })
 }
const gameDraw=()=>{
    msg.innerText=`game was a Draw.`;
    msgContainer.classList.remove("hide");
    disablebox();
};
const showWinner=(winner)=>{
    msg.innerText=(` congratulations winner is  "${winner}"`)
    msgContainer.classList.remove("hide");
    disablebox();
}
const disablebox=()=>{
 for(let boxes of box){
    boxes.disabled=true;
 }
}
const enableBox=()=>{
    for(let boxes of box){
        boxes.disabled=false;
        box.innerText="";
    }
}
const newgame=()=>{
turn=true;
box.innerText="";
count=0;
enableBox();
msgContainer.classList.add("hide");
};
const checkWinner=()=>{
for(let pattern of winPatern){
let pos1Val = box[pattern[0]].innerText;
let pos2Val = box[pattern[1]].innerText;
let pos3Val = box[pattern[2]].innerText;
if(pos1Val !=="" &&pos2Val !=="" && pos3Val !=="" ){
    if(pos1Val == pos2Val && pos2Val == pos3Val){
        box.innerText="";
        showWinner(pos1Val);
        return true;

    }
}
}
};
Nwbtn.addEventListener("click",newgame);
reset.addEventListener("click",empty);
Nwbtn.addEventListener("click",empty);




