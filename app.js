//Global változók
let move = 1;
const detailBox = document.querySelector("#chessBoard-detailbox");
let shown = false;
const kingsGambit = {
  moves: [],
  highlights: [],
  description: [],
};
const ruyLopez = {
  moves: [],
  highlights: [],
  description: [],
};

const queensGambit = {
  moves: ["start", "d2-d4", "d7-d5", "c2-c4", "end"],
  highlights: ["start", "valami", "masikvalami", "harmadikvalami", "end"],
  description: [
    "start",
    "megnyitja a területet...",
    "valami leírás",
    "teszt tadat",
    "end",
  ],
  position: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R",
};
let config = {
  draggable: true,
  position: "start",
};
let board = Chessboard("chessBoard", config);
let opening = {};
//-----------------------

//Preview betöltése---------

let items = document.getElementsByClassName("navbar-item-link");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", (e) => {
    board.position();
  });
}

//-------------------------

//Tutorial betöltése

const loadTutorial = (openingName) => {
  board.start();
  move = 1;
  switch (openingName) {
    case "Queen's-gambit-btn":
      opening = queensGambit;
      break;
    case "King's-gambit-btn":
      opening = kingsGambit;
      break;
    case "Ruy-Lopez-btn":
      opening = ruyLopez;
      break;

    default:
      opening = {};
  }
};

//-----------------------
//Highlighting--------------------

//--------------------------------
//Következő és előző step

document.querySelector("#next").addEventListener("click", () => {
  if (opening.moves[move] != "end" && opening != {}) {
    board.move(opening.moves[move]);

    //Detail megjelenítés-----------
    let detailtext = document.createElement("p");
    detailtext.textContent = opening.description[move];
    detailtext.classList.add("detail-each");
    detailBox.appendChild(detailtext);
    //----------------------------------
    move++;
  }
});

document.querySelector("#prev").addEventListener("click", () => {
  if (opening.moves[move - 1] != "start" && opening != {}) {
    let backMove = opening.moves[move - 1].split("-");
    board.move(`${backMove[1]}-${backMove[0]}`);
    //Detail törlés-------------------------------
    detailBox.lastChild.remove();
    //--------------------------------------------
    move--;
  }
});

//------------------------------
//Detail mutatása-eltüntetése

const showDetail = (children) => {
  let detail;
  for (let i = 0; i < children.length; i++) {
    if (children[i].classList.contains("detail")) {
      detail = children[i];
    }
  }
  if (detail.classList.contains("show")) {
    detail.classList.remove("show");
    shown = false;
  } else {
    detail.classList.add("show");
    shown = true;
  }
};
//-------------------------------//

// 'LI' elements //

const openings = document.getElementsByTagName("li");
for (let i = 0; i < openings.length; i++) {
  let opening = openings[i];
  opening.addEventListener("click", (e) => {
    //Behozza-eltünteti a detaileket//
    showDetail(opening.children);
  });
}

//Tutorial 'kiválasztás'----------------
let buttons = document.getElementsByClassName("select-tutorial-btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    loadTutorial(e.target.id);
    console.log(e.target.id);
  });
}
