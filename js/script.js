console.log("Welcome to my website!");
window.onload = function(){
  var startertext = document.getElementById("startertext");
  var slopegame = document.getElementById("slopegame");
  var game = document.getElementById("game");
  var dinogame = document.getElementById("dinogame");
  game.style.display = 'none';
  slopegame.onclick = function() {
    startertext.remove();
    game.src = "/games/slope";
    game.style.display = 'block';
  }
  dinogame.onclick = function() {
    startertext.remove();
    game.src = "/games/dino";
    game.style.display = 'block';
  }
}