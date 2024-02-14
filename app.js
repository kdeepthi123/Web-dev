const board=[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]
const boardContainer=document.querySelector(".board");
document.addEventListener("swiped-up",function(e){
    console.log(e.target);
})

function display(){
   let elem = 0;
   for(let row=0;row<4;row++) {
    for(let col=0;col<4;col++){
        if(board[row][col]===0){
            boardContainer.children[elem].style.color="";
            boardContainer.children[elem].innerText="";
            boardContainer.children[elem].style.backgroundColor="";
            elem++;
        }
        else{
            if(board[row][col]>=128){
                boardContainer.children[elem].style.color="white";
            }
            boardContainer.children[elem].innerText=board[row][col];
            boardContainer.children[elem].style.backgroundColor=changeColor(row,col);
elem++;
        }
    }
   }
}

