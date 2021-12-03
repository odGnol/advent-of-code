import fs from "fs";

const buffer = fs.readFileSync("2021/01/dataset/data01.csv");
let poleCisel = [];
let zpracovanaData = buffer.toString().split('\n');

for (const cisloZDat of zpracovanaData) {
    poleCisel.push(parseInt(cisloZDat));
}

const indikatorRustuCisla = () => {
    let pocet = 0;
    for (let i = 0; i < poleCisel.length; i++) {
        if (poleCisel[i] > poleCisel[i - 1]) pocet++;
    }
    return pocet;
}
console.log(indikatorRustuCisla());

const indikatorRustuSouctuTriTrojic = () => {
    let pocet = 0;
    let soucetTrojiceCisel = 0;
    let poleSouctu = [];
    for (let i = 0; i < poleCisel.length; i++) {
        soucetTrojiceCisel = poleCisel[i] + poleCisel[i + 1] + poleCisel[i + 2];
        poleSouctu.push(soucetTrojiceCisel);
    }
    for (let j = 0; j < poleSouctu.length; j++) {
        if (poleSouctu[j] < poleSouctu[j + 1]) {
            pocet++;
        }
    }
    return pocet;
}

console.log(indikatorRustuSouctuTriTrojic());




