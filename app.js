//Global változók

let shown = false;
let config = {
  position: "start",
};
let board = Chessboard("chessboard", config);
//-----------------------

//Tutorial betöltése

const loadTutorial = (openingName) => {
  console.log(openingName);
};

//-----------------------

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
