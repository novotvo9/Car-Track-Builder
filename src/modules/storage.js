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