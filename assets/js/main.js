let toggles = document.querySelectorAll(".toggle");
let good = document.querySelector("#good");
let cheap = document.querySelector("#cheap");
let fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

function doTheTrick(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    }

    if (cheap === theClickedOne) {
      good.checked = false;
    }

    if (fast === theClickedOne) {
      cheap.checked = false;
    }
  }
}
