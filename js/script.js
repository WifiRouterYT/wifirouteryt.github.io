console.log("Welcome to my website!");
window.onload = function(){
  var closebtn = document.getElementById("close");
  var startertext = document.getElementById("startertext");
  var slopegame = document.getElementById("slopegame");
  var game = document.getElementById("game");
  var dinogame = document.getElementById("dinogame");
  var funnyblockgame = document.getElementById("2048");
  var deathrun3d = document.getElementById("deathrun3d");
  var tunnelrush = document.getElementById("tunnelrush");
  var motox3m = document.getElementById("motox3m");
  var motox3mwinter = document.getElementById("motox3mwinter");
  var minecraftclassic = document.getElementById("minecraftclassic");
  var flappybird = document.getElementById("flappybird");
  var worldshardestgame = document.getElementById("worldshardestgame");
  var eaglercraft = document.getElementById("eaglercraft");
  var backrooms = document.getElementById("backrooms");
  var basketballstars = document.getElementById("basketballstars");
  var bloxors = document.getElementById("bloxors");
  var stack = document.getElementById("stack");
  var cryptoclicker = document.getElementById("cryptoclicker");
  var dogeminer = document.getElementById("dogeminer");

  game.style.display = 'none';
  closebtn.onclick = function() {
    location.reload();
  }
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
  funnyblockgame.onclick = function() {
    startertext.remove();
    game.src = "/games/2048";
    game.style.display = 'block';
  }
  deathrun3d.onclick = function() {
    startertext.remove();
    game.src = "/games/death-run-3d";
    game.style.display = 'block';
  }
  tunnelrush.onclick = function() {
    startertext.remove();
    game.src = "/games/tunnel-rush";
    game.style.display = 'block';
  }
  motox3m.onclick = function() {
    startertext.remove();
    game.src = "/games/motox3m";
    game.style.display = 'block';
  }
  motox3mwinter.onclick = function() {
    startertext.remove();
    game.src = "/games/motox3m-winter";
    game.style.display = 'block';
  }
  minecraftclassic.onclick = function() {
    startertext.remove();
    game.src = "/games/minecraft-classic";
    game.style.display = 'block';
  }
  flappybird.onclick = function() {
    startertext.remove();
    game.src = "/games/flappy-bird";
    game.style.display = 'block';
  }
  worldshardestgame.onclick = function() {
    startertext.remove();
    game.src = "/games/worlds-hardest-game";
    game.style.display = 'block';
  }
  eaglercraft.onclick = function() {
    startertext.remove();
    game.src = "/games/eaglercraft";
    game.style.display = 'block';
  }
  backrooms.onclick = function() {
    startertext.remove();
    game.src = "/games/backrooms";
    game.style.display = 'block';
  }
  basketballstars.onclick = function() {
    startertext.remove();
    game.src = "/games/basketball-stars";
    game.style.display = 'block';
  }
  bloxors.onclick = function() {
    startertext.remove();
    game.src = "/games/bloxors";
    game.style.display = 'block';
  }
  stack.onclick = function() {
    startertext.remove();
    game.src = "/games/stack";
    game.style.display = 'block';
  }
  cryptoclicker.onclick = function() {
    startertext.remove();
    game.src = "/games/cryptoclicker";
    game.style.display = 'block';
  }
  dogeminer.onclick = function() {
    startertext.remove();
    game.src = "/games/DogeMiner";
    game.style.display = 'block';
  }
}
