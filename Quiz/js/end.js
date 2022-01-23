//this is the for the username input 
const username= document.getElementById("username");
//2 able if the user puts a name and disable if the user doent put in a name
const saveScoreBtn = document.getElementById("saveScoreBtn");
//4 get the final score
const finalScore = document.getElementById("finalScore");
//3 get most recent from the local storage
const mostRecentStore = localStorage.getItem("mostRecentScore");
//7 max num of scores
const MAX_HIGH_SCORES =5;



//4 we go to set the connect the highScore to the local store,things in localStoreage re stored as a string
//we nneed to convert this things to JSON string and convert it to array using JSON parse and put in an empty Array to store thr scores 
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//console.log(highScores);


finalScore.innerText = mostRecentStore;
username.addEventListener("keyup",() => {
//1b to check if the save button is functional console.log(username.value);
// 3 save button disabled if nothing is inside 
saveScoreBtn.disabled = !username.value;

});

//1a keep the content the user puts in the button
saveHighScore = e => {
    console.log("clicked the save button");
    e.preventDefault();
    //5 this will store our scores in an empty array
    const score ={
      //instead of using score:mostRecentStore, that will store it without the highest score attached to the names use
      score:Math.floor(Math.random() * 100),
       name:username.value
       };
       highScores.push(score);
       //6 this is where we create the list of highscores and make it 5 hightest scores and if a new ones comes in ,the last one is sorted out
    highScores.sort((a,b) => b.score - a.score)
    // 8 at index 5 ,staart cutting the last ones
    highScores.splice(5);
    //9 update our local storage 
localStorage.setItem("highScores",JSON.stringify(highScores));
//this is to returnthe user  to the main screen
window.location.assign("Index.html");

       //console.log(highScores);
    };

       
       