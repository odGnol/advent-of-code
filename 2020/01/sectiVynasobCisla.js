import fs from "fs";

let zpracovanaData;
let poleCisel = [];
const buffer = fs.readFileSync("2020/01/dataset/vstupy.csv");

const zpracujCSV = (csv) => {
    zpracovanaData = csv.toString().split('\n');

    for(const cisloZDat of zpracovanaData) {
        poleCisel.push(parseInt(cisloZDat));
    }

    return poleCisel;
}

zpracujCSV(buffer);

console.log(poleCisel);
