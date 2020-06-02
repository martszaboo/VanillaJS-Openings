//Global változók

let shown = false;
let config = {
  draggable: true,
  position: "start",
};
let board = Chessboard("chessBoard", config);
//-----------------------

//Tutorial betöltése

const loadTutorial = (openingName) => {
  console.log(openingName);
};

//-----------------------
//Következő és előző step

document.querySelector("#next").addEventListener("click", () => {
  board.move("e4-d5");
  console.log("next");
});

document.querySelector("#prev").addEventListener("click", () => {
  console.log("prev");
  board.move("d5-e5");
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
    //--------------------------//

    //Betölti a tutorialt//
    if (shown) {
      loadTutorial(e.target.textContent);
    }

    // console.log(e.target.textContent);
  });
}

//----------------------------------------//
//Léptetés test
setTimeout(() => {
  board.move("e2-e4");
}, 1000);

//----------------------------------------//
