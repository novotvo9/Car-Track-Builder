export function saveMap(name, mapData) {

    if (!name) {
        alert("Zadej název mapy");
        return;
    }

    const json = JSON.stringify(mapData);

    localStorage.setItem("track_" + name, json);

    console.log(localStorage);
}