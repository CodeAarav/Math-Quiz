function updatescore()
{
score = score + 1;
document.getElementById("score").innerHTML = "score: " +score;
}

function savescore()
{
localStorage.setItem("score", score);
}

function nextpage()
{
score = score + 1;
window.location= "activity_2.html";
}