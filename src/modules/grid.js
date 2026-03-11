// mřížka (20 na 20) nebo dynamické
// klikem se kreslí trať - když kliknu víckrát mění se typ políčka
// localstorage!!!
// menu a editor - uživatelská rozhraní (skrýt editor a načíst mapu se seznamem tratí) .hidden

const size = 20;
let map = [];
let isGridListenerAdded = false;

export function initGrid() {
    const gridParentEl = document.getElementById("gridParent");
    createMapData();
    createGrid(gridParentEl);

    if (isGridListenerAdded === false) {
        gridParentEl.addEventListener("click", onGridClick);
        isGridListenerAdded = true;
    }
}

export function renderGrid() {
    const gridParentEl = document.getElementById("gridParent");
    createGrid(gridParentEl);
}

function createGrid(gridParentEl) {
    gridParentEl.innerHTML = "";

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const cellEl = document.createElement("div");
            cellEl.classList.add("cell", map[row][col]);

            cellEl.dataset.row = row;
            cellEl.dataset.col = col;

            gridParentEl.appendChild(cellEl);
        }
    }
}

function onGridClick(e) {
    const cell = e.target;

    if (!cell.classList.contains("cell")) {
        return;
    }

    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);

    const currentType = map[row][col];

    if (currentType === "grass") {
        map[row][col] = "road";
    }
    else if (currentType === "road") {
        map[row][col] = "water";
    }
    else {
        map[row][col] = "grass";
    }

    updateCellVisual(cell, map[row][col]);
}

function createMapData() {
    map = [];

    for (let row = 0; row < size; row++) {
        const currentRow = [];

        for (let col = 0; col < size; col++) {

            currentRow.push("grass");
        }

        map.push(currentRow);
    }

}

function updateCellVisual(cell, type) {
    cell.classList.remove("grass");
    cell.classList.remove("road");
    cell.classList.remove("water");

    cell.classList.add(type);
}

export function getMapData() {
    return map;
}

export function setMapData(newMap) {
    map = newMap;
}