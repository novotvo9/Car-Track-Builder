// mřížka (20 na 20) nebo dynamické
// klikem se kreslí trať - když kliknu víckrát mění se typ políčka
// localstorage!!!
// menu a editor - uživatelská rozhraní (skrýt editor a načíst mapu se seznamem tratí) .hidden

const size = 20;

export function addTestCell(gridParentEl) {

    for (let row = 0; row < size; row++) {

        for (let col = 0; col < size; col++) {

            const cellEl = document.createElement("div");
            cellEl.classList.add("cell");

            gridParentEl.appendChild(cellEl);

        }

    }

}