const highScoresList= document.getElementById ("highScoresList");
//1 get the highscore out of local storage
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

 //2 we want to display the li list with the username and score  by using.map()n we going use the temple literal($) to grab the username and score
 highScoresList.innerHTML =highScores
    .map(score => {
     return `<li class="high-score">${score.name} - ${score.score}<li>`;
    })
    //join all the string togther using .join
    .join("");