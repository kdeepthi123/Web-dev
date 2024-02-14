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
    
   }
}

function assignRandom() {
    let row = Math.floor(Math.random() * 4)
    let col = Math.floor(Math.random() * 4)
    if (board[row][col] == 0)  {
        let chance = Math.random();
        if (chance > 0.9)
            board[row][col] = 4;
        else board[row][col] = 2;
    }else {
        try {
            assignRandom();
        } catch {
            console.log("game over");
        }
    }
}