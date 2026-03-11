export function saveMap(name, mapData) {
    if (!name) {
        alert("Zadej název mapy");
        return;
    }

    const json = JSON.stringify(mapData);

    localStorage.setItem("track_" + name, json);

    console.log(localStorage);
}

export function loadMap(name) {
    if (!name) {
        alert("Zadej název mapy");
        return null;
    }

    const json = localStorage.getItem("track_" + name);

    if (json === null) {
        alert("Mapa nebyla nalezena");
        return null;
    }

    const mapData = JSON.parse(json);

    return mapData;
}

export function getSavedMapNames() {
    const names = [];

    for (let i = 0; i < localStorage.length; i++) {

        const key = localStorage.key(i);

        if (key.substring(0, 6) === "track_") {

            const name = key.substring(6);

            names.push(name);
        }

    }

    return names;
}