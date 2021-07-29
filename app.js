//html elements
const statusDiv= document.querySelector('.status');
const resetDiv= document.querySelector('.reset');

const cellDivs= document.querySelectorAll('.game-cell');



//gamevariables
let gameIsLive =true;
let xIsNext= true;
let winner= null;


//functions




const checkGameStatus = () => {
  const topLeft=cellDivs[0].classList[2];
  const topMiddle=cellDivs[1].classList[2];
  const topRight=cellDivs[2].classList[2];
  const middleLeft=cellDivs[3].classList[2];
  const middleMiddle=cellDivs[4].classList[2];
  const middleRight=cellDivs[5].classList[2];
  const bottomLeft=cellDivs[6].classList[2];
  const bottomMiddle=cellDivs[7].classList[2];
  const bottomRight=cellDivs[8].classList[2];

//check winner

  if(topLeft && topLeft===topRight && topLeft===topMiddle) {
    gameIsLive=false;
    winner=topLeft;
    if(winner==='x')
    {
      statusDiv.innerHTML= '<span> x has won!</span>';
    }
    else {
      statusDiv.innerHTML=  '<span> o has won! </span>';
    }
  }
  else if (middleLeft && middleLeft===middleRight && middleLeft===middleMiddle) {
    gameIsLive=false;
    winner=middleLeft;
    if(winner==='x')
    {
      statusDiv.innerHTML= '<span> x has won!</span>';
    }
    else {
      statusDiv.innerHTML=  '<span> o has won! </span>';
    }
  }
  else if (bottomLeft && bottomLeft===bottomRight && bottomLeft===bottomMiddle) {
    gameIsLive=false;
    winner=bottomLeft;
    if(winner==='x')
    {
      statusDiv.innerHTML= '<span> x has won!</span>';
    }
    else {
      statusDiv.innerHTML=  '<span> o has won! </span>';
    }
  }
  else if (topLeft && topLeft===middleLeft && topLeft===bottomLeft) {
    gameIsLive=false;
    winner=topLeft;
    if(winner==='x')
    {
      statusDiv.innerHTML= '<span> x has won!</span>';
    }
    else {
      statusDiv.innerHTML=  '<span> o has won! </span>';
    }
  }
  else if (topMiddle && topMiddle===middleMiddle && topMiddle===bottomMiddle) {
    gameIsLive=false;
    winner=topMiddle;
    if(winner==='x')
    {
      statusDiv.innerHTML= '<span> x has won!</span>';
    }
    else {
      statusDiv.innerHTML=  '<span> o has won! </span>';
    }
  }
  else if (topRight && topRight===bottomRight && topRight===middleRight) {
    gameIsLive=false;
    winner=topRight;
    if(winner==='x')
    {
      statusDiv.innerHTML= '<span> x has won!</span>';
    }
    else {
      statusDiv.innerHTML=  '<span> o has won! </span>';
    }
  }
  else if (topLeft && topLeft===middleMiddle && topLeft===bottomRight) {
    gameIsLive=false;
    winner=topLeft;
    if(winner==='x')
    {
      statusDiv.innerHTML= '<span> x has won!</span>';
    }
    else {
      statusDiv.innerHTML=  '<span> o has won! </span>';
    }
  }
  else if (topRight && topRight===middleMiddle && topRight===bottomLeft) {
    gameIsLive=false;
    winner=topRight;
    if(winner==='x')
    {
      statusDiv.innerHTML= '<span> x has won!</span>';
    }
    else {
      statusDiv.innerHTML=  '<span> o has won! </span>';
    }
  }
  else if (topLeft&& topRight &&topMiddle &&middleLeft &&middleMiddle&& middleRight &&bottomLeft &&bottomMiddle&&bottomRight) {
    gameIsLive=false;
    statusDiv.innerHTML=  '<span> its a tie! </span>';
  }
  else {
    xIsNext= !xIsNext;
    if(xIsNext === x)
    {
        statusDiv.innerHTML=  '<span> x is next</span>';
    }
    else {
       statusDiv.innerHTML=  '<span> o is next</span>';
    }
  }

};


//event handlers
const handleReset = (e) => {
  location.reload();
}




const handlCellClick = (e) => {

  const classList= e.target.classList;
  if(!(classList[2]==='x'||classList[2]==='o'))
  {
      if(xIsNext){
        e.target.classList.add('x');
        checkGameStatus();


      }
      else{
        e.target.classList.add('o');
        checkGameStatus();

      }
  }
  else {
    return;
  }

}




//event listeners
resetDiv.addEventListener('click', handleReset);

for(const cellDiv of cellDivs) {
  cellDiv.addEventListener('click', handlCellClick);
}
