const btnSearch = document.querySelector("#btn-search");
const btnRun = document.querySelector("#btn-run");

const btnSearchClose = document.querySelector(".search-panel button");
const btnRunClose = document.querySelector(".run-panel button");

const searchPanel = document.querySelector(".search-panel");
const runPanel = document.querySelector(".run-panel");

btnSearch.addEventListener("click", () => handlePanels(searchPanel, "open"));
btnRun.addEventListener("click", () => handlePanels(runPanel, "open"));

btnSearchClose.addEventListener("click", () => handlePanels(searchPanel, "close"));
btnRunClose.addEventListener("click", () => handlePanels(runPanel, "close"));

function handlePanels(panelClass, action) {

  searchPanel.style.left = "-30%";
  runPanel.style.left = "-30%";

  if (action == "open") {
    panelClass.style.left = "0%";
  } else {
    panelClass.style.left = "-30%";
  }
}

document.onclick = function(e) {
  if (e.target.classList.contains("search-panel") || e.target.classList.contains("run-panel")) {
    searchPanel.style.left = "-30%";
    runPanel.style.left = "-30%";
  }
}