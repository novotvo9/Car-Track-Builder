import { initGrid, getMapData } from "./grid.js";
import { saveMap } from "./storage.js";

export function initApp() {

    const newMapBtn = document.getElementById("newMapBtn");
    const backBtn = document.getElementById("backToMenuBtn");
    const saveBtn = document.getElementById("saveMapBtn");

    newMapBtn.addEventListener("click", startNewMap);
    backBtn.addEventListener("click", showMenu);
    saveBtn.addEventListener("click", saveCurrentMap);
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

function saveCurrentMap() {
    const name = document.getElementById("mapNameInput").value;
    const mapData = getMapData();

    saveMap(name, mapData);
}