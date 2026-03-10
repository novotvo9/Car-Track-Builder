import { initGrid } from "./grid.js";

export function initApp() {
    const newMapBtn = document.getElementById("newMapBtn");
    const backBtn = document.getElementById("backToMenuBtn");

    newMapBtn.addEventListener("click", startNewMap);
    backBtn.addEventListener("click", showMenu);
}

function startNewMap() {
    const menuScreenEl = document.getElementById("menuScreen");
    const editorScreenEl = document.getElementById("editorScreen");

    menuScreenEl.classList.add("hidden");
    editorScreenEl.classList.remove("hidden");

    initGrid();
}

function showMenu() {
    const menuScreenEl = document.getElementById("menuScreen");
    const editorScreenEl = document.getElementById("editorScreen");

    editorScreenEl.classList.add("hidden");
    menuScreenEl.classList.remove("hidden");
}