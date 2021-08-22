let player = 1;
let clickone = 0;
let clicktwo = 0;
let clickthree = 0;
let clickfour = 0;
let clickfive = 0;
let clicksix = 0;
let clickseven = 0;
let clickeight = 0;
let clicknine = 0;

function checkWinner() {
  win();
  draw();
}

function draw() {
  if (
    !(
      clickone !== 1 ||
      clicktwo !== 1 ||
      clickthree !== 1 ||
      clickfour !== 1 ||
      clickfive !== 1 ||
      clicksix !== 1 ||
      clickseven !== 1 ||
      clickeight !== 1 ||
      clicknine !== 1 ||
      win === true
    )
  ) {
    alert("It's a draw");
    reset();
  }
}

function win() {
  if (
    document.getElementById("square1").innerHTML === "X" &&
    document.getElementById("square2").innerHTML === "X" &&
    document.getElementById("square3").innerHTML === "X"
  ) {
    alert("Player X won!");
    reset();
    return true;
  } else if (
    document.getElementById("square4").innerHTML === "X" &&
    document.getElementById("square5").innerHTML === "X" &&
    document.getElementById("square6").innerHTML === "X"
  ) {
    alert("Player X won!");
    reset();
    return true;
  } else if (
    document.getElementById("square7").innerHTML === "X" &&
    document.getElementById("square8").innerHTML === "X" &&
    document.getElementById("square9").innerHTML === "X"
  ) {
    alert("Player X won!");
    reset();
    return true;
  } else if (
    document.getElementById("square1").innerHTML === "X" &&
    document.getElementById("square4").innerHTML === "X" &&
    document.getElementById("square7").innerHTML === "X"
  ) {
    alert("Player X won!");
    reset();
    return true;
  } else if (
    document.getElementById("square2").innerHTML === "X" &&
    document.getElementById("square5").innerHTML === "X" &&
    document.getElementById("square8").innerHTML === "X"
  ) {
    alert("Player X won!");
    reset();
    return true;
  } else if (
    document.getElementById("square3").innerHTML === "X" &&
    document.getElementById("square6").innerHTML === "X" &&
    document.getElementById("square9").innerHTML === "X"
  ) {
    alert("Player X won!");
    reset();
    return true;
  } else if (
    document.getElementById("square1").innerHTML === "X" &&
    document.getElementById("square5").innerHTML === "X" &&
    document.getElementById("square9").innerHTML === "X"
  ) {
    alert("Player X won!");
    reset();
    return true;
  } else if (
    document.getElementById("square3").innerHTML === "X" &&
    document.getElementById("square5").innerHTML === "X" &&
    document.getElementById("square7").innerHTML === "X"
  ) {
    alert("Player X won!");
    reset();
    return true;
  } else if (
    document.getElementById("square1").innerHTML === "O" &&
    document.getElementById("square2").innerHTML === "O" &&
    document.getElementById("square3").innerHTML === "O"
  ) {
    alert("Player O won!");
    reset();
    return true;
  } else if (
    document.getElementById("square4").innerHTML === "O" &&
    document.getElementById("square5").innerHTML === "O" &&
    document.getElementById("square6").innerHTML === "O"
  ) {
    alert("Player O won!");
    reset();
    return true;
  } else if (
    document.getElementById("square7").innerHTML === "O" &&
    document.getElementById("square8").innerHTML === "O" &&
    document.getElementById("square9").innerHTML === "O"
  ) {
    alert("Player O won!");
    reset();
    return true;
  } else if (
    document.getElementById("square1").innerHTML === "O" &&
    document.getElementById("square4").innerHTML === "O" &&
    document.getElementById("square7").innerHTML === "O"
  ) {
    alert("Player O won!");
    reset();
    return true;
  } else if (
    document.getElementById("square2").innerHTML === "O" &&
    document.getElementById("square5").innerHTML === "O" &&
    document.getElementById("square8").innerHTML === "O"
  ) {
    alert("Player O won!");
    reset();
    return true;
  } else if (
    document.getElementById("square3").innerHTML === "O" &&
    document.getElementById("square6").innerHTML === "O" &&
    document.getElementById("square9").innerHTML === "O"
  ) {
    alert("Player o won!");
    reset();
    return true;
  } else if (
    document.getElementById("square1").innerHTML === "O" &&
    document.getElementById("square5").innerHTML === "O" &&
    document.getElementById("square9").innerHTML === "O"
  ) {
    alert("Player O won!");
    reset();
    return true;
  } else if (
    document.getElementById("square3").innerHTML === "O" &&
    document.getElementById("square5").innerHTML === "O" &&
    document.getElementById("square7").innerHTML === "O"
  ) {
    alert("Player O won!");
    reset();
    return true;
  }
}

function reset() {
  document.getElementById("square1").innerHTML = "";
  document.getElementById("square2").innerHTML = "";
  document.getElementById("square3").innerHTML = "";
  document.getElementById("square4").innerHTML = "";
  document.getElementById("square5").innerHTML = "";
  document.getElementById("square6").innerHTML = "";
  document.getElementById("square7").innerHTML = "";
  document.getElementById("square8").innerHTML = "";
  document.getElementById("square9").innerHTML = "";
  clickone =
    clicktwo =
    clickthree =
    clickfour =
    clickfive =
    clicksix =
    clickseven =
    clickeight =
    clicknine =
      0;
}

function square1move() {
  if (clickone === 0) {
    clickone = 1;
    switch (player) {
      case 1:
        document.getElementById("square1").innerHTML = "O";
        player = player + 1;
        checkWinner();
        break;
      case 2:
        document.getElementById("square1").innerHTML = "X";
        player = player - 1;
        checkWinner();
        break;
    }
  } else {
    alert("Choose another Square!");
  }
}
function square2move() {
  if (clicktwo === 0) {
    clicktwo = 1;
    switch (player) {
      case 1:
        document.getElementById("square2").innerHTML = "O";
        player = player + 1;
        checkWinner();
        break;
      case 2:
        document.getElementById("square2").innerHTML = "X";
        player = player - 1;
        checkWinner();
        break;
    }
  } else {
    alert("Choose another box!");
  }
}
function square3move() {
  if (clickthree === 0) {
    clickthree = 1;
    switch (player) {
      case 1:
        document.getElementById("square3").innerHTML = "O";
        player = player + 1;
        checkWinner();
        break;
      case 2:
        document.getElementById("square3").innerHTML = "X";
        player = player - 1;
        checkWinner();
        break;
    }
  } else {
    alert("Choose another box!");
  }
}
function square4move() {
  if (clickfour === 0) {
    clickfour = 1;
    switch (player) {
      case 1:
        document.getElementById("square4").innerHTML = "O";
        player = player + 1;
        checkWinner();
        break;
      case 2:
        document.getElementById("square4").innerHTML = "X";
        player = player - 1;
        checkWinner();
        break;
    }
  } else {
    alert("Choose another box!");
  }
}
function square5move() {
  if (clickfive === 0) {
    clickfive = 1;
    switch (player) {
      case 1:
        document.getElementById("square5").innerHTML = "O";
        player = player + 1;
        checkWinner();
        break;
      case 2:
        document.getElementById("square5").innerHTML = "X";
        player = player - 1;
        checkWinner();
        break;
    }
  } else {
    alert("Choose another box!");
  }
}
function square6move() {
  if (clicksix === 0) {
    clicksix = 1;
    switch (player) {
      case 1:
        document.getElementById("square6").innerHTML = "O";
        player = player + 1;
        checkWinner();
        break;
      case 2:
        document.getElementById("square6").innerHTML = "X";
        player = player - 1;
        checkWinner();
        break;
    }
  } else {
    alert("Choose another box!");
  }
}
function square7move() {
  if (clickseven === 0) {
    clickseven = 1;
    switch (player) {
      case 1:
        document.getElementById("square7").innerHTML = "O";
        player = player + 1;
        checkWinner();
        break;
      case 2:
        document.getElementById("square7").innerHTML = "X";
        player = player - 1;
        checkWinner();
        break;
    }
  } else {
    alert("Choose another box!");
  }
}
function square8move() {
  if (clickeight === 0) {
    clickeight = 1;
    switch (player) {
      case 1:
        document.getElementById("square8").innerHTML = "O";
        player = player + 1;
        checkWinner();
        break;
      case 2:
        document.getElementById("square8").innerHTML = "X";
        player = player - 1;
        checkWinner();
        break;
    }
  } else {
    alert("Choose another box!");
  }
}
function square9move() {
  if (clicknine === 0) {
    clicknine = 1;
    if (player === 1) {
      document.getElementById("square9").innerHTML = "O";
      player = player + 1;
      checkWinner();
    } else if (player === 2) {
      document.getElementById("square9").innerHTML = "X";
      player = player - 1;
      checkWinner();
    }
  } else {
    alert("Check another box!");
  }
}
