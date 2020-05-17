//Tutorial betöltése

const loadTutorial = (openingName) => {
  let openingTextNode = document.createElement("p");
  openingTextNode.textContent = openingName;
  document.getElementById("chessBoard-container").appendChild(openingTextNode);
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
  } else {
    detail.classList.add("show");
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
    loadTutorial(e.target.textContent);

    // console.log(e.target.textContent);
  });
}

//----------------------------------------//
