// Wait for the Dom to finish loading before running the game
// Get the button elements and assign the evenetlisteners to it

document.addEventListener("DOMContentLoaded", function() {
   let buttons=document.getElementsByTagName("button");
   for(let button of buttons)
   {
      button.addEventListener("click",function(){
        if(this.getAttribute(data-type)=="submit")
            alert("You clicked submit");
        else
        {
            let gameType=this.getAttribute(data-type);
            alert(`You clicked ${gameType}`)
        }
      })
    }
  })


function runGame(){


}
function checkAnswer(){


    

}
function calculateCorrectAnswer(){
    

}
function incrementScore(){
    

}
function incrementWrongAnswer(){
    

}
function displatAdditionQuestion(){
    

}
function displaySubtratQuestion(){
    

}
function displayMultiplyQuestion(){
    

}
function displayDivideQuestion(){
    

}