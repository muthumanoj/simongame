var button = ["blue", "red ", "yellow", "green"];
var gamepattern = [];
var userclickedpattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    started = true;
    $("#level-title").text("level :" + level);
    nextsequence();
  }
});yhjjhhhh

$(".btn").click(function () {
  var userchosencolor = $(this).attr("id");
  userclickedpattern.push(userchosencolor);

  playsound(userchosencolor);
  checkanswer(userclickedpattern.length - 1);
  animatepress(userchosencolor);
});
function checkanswer(currentlevel) {
  if (gamepattern[currentlevel] === userclickedpattern[currentlevel]) {
    if (gamepattern.length === userclickedpattern.length) {
      setTimeout(function () {
        nextsequence();
      }, 1000);
    }
  } else {
    playsound("wrong");
    $("body").addClass("gameover");
    $("#level-title").text("Game over : Press any key to restart the game");
    setTimeout(function () {
      $("body").removeClass("gameover");
    }, 200);
    startover();
  }
}

function nextsequence() {
  userclickedpattern = [];
  level++;
  $("#level-title").text("level:" + level);
  var randomnumber = Math.floor(Math.random() * 4);
  var randomchosencolor = button[randomnumber];
  gamepattern.push(randomchosencolor);
  $("#" + randomchosencolor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playsound(randomchosencolor);
}
function animatepress(currentlevel) {
  $("#" + currentlevel).addClass("pressed");
  setTimeout(function () {
    $("#" + currentlevel).removeClass("pressed");
  }, 100);
}
function playsound(name) {
  var audio = new Audio("sound/" + name + ".mp3");
  audio.play();
}

function startover() {
  level = 0;
  started = false;
  gamepattern = [];
}
