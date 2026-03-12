import { initGrid, getMapData, setMapData, renderGrid } from "./grid.js";
import { saveMap, loadMap, getSavedMapNames, exportMap } from "./storage.js";

const menuScreenEl = document.getElementById("menuScreen");
const editorScreenEl = document.getElementById("editorScreen");
const selectEl = document.getElementById("savedMapsSelect");

export function initApp() {
    const newMapBtn = document.getElementById("newMapBtn");
    const backBtn = document.getElementById("backToMenuBtn");
    const saveBtn = document.getElementById("saveMapBtn");
    const loadBtn = document.getElementById("loadMapBtn");
    const exportBtn = document.getElementById("exportMapBtn");


    newMapBtn.addEventListener("click", startNewMap);
    backBtn.addEventListener("click", showMenu);
    saveBtn.addEventListener("click", saveCurrentMap);
    loadBtn.addEventListener("click", loadCurrentMap);
    exportBtn.addEventListener("click", exportCurrentMap);

    fillSavedMapsSelect();
}

function startNewMap() {
    menuScreenEl.classList.add("hidden");
    editorScreenEl.classList.remove("hidden");

    initGrid();
}

function showMenu() {
    fillSavedMapsSelect();

    editorScreenEl.classList.add("hidden");
    menuScreenEl.classList.remove("hidden");
}

function saveCurrentMap() {
    const name = document.getElementById("mapNameInput").value;
    const mapData = getMapData();

    saveMap(name, mapData);
}

function loadCurrentMap() {
    const name = selectEl.value;

    if (name === "") {
        alert("Vyber mapu");
        return;
    }

    const loadedMap = loadMap(name);

    if (loadedMap === null) {
        return;
    }

    const menuScreenEl = document.getElementById("menuScreen");
    const editorScreenEl = document.getElementById("editorScreen");

    menuScreenEl.classList.add("hidden");
    editorScreenEl.classList.remove("hidden");

    setMapData(loadedMap);
    renderGrid();
}

function fillSavedMapsSelect() {
    const names = getSavedMapNames();

    selectEl.innerHTML = '<option value="">-- Vyber mapu --</option>';

    for (let i = 0; i < names.length; i++) {

        const optionEl = document.createElement("option");

        optionEl.value = names[i];
        optionEl.innerText = names[i];

        selectEl.appendChild(optionEl);
    }
}

function exportCurrentMap() {
    const mapData = getMapData();

    const json = exportMap(mapData);

    const outputEl = document.getElementById("exportOutput");

    outputEl.value = json;
}