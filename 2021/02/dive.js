import fs from "fs";

const buffer = fs.readFileSync("2021/02/dataset/data02.csv");
let poleRetezcu = [];
let zpracovanaData = buffer.toString().split('\n');

for (const retezecDat of zpracovanaData) {
    poleRetezcu.push(String(retezecDat));
}

console.log(poleRetezcu);

const odlisovacPonoruAScitacSoucinec = (data) => {
    let forward = 0, down = 0, up = 0, depth = 0;
    for (const retezec of data) {
        if (retezec.includes("forward")) {
            forward += parseInt(retezec.match(/\d+/)[0]);
        } else if (retezec.includes("up")) {
            up += parseInt(retezec.match(/\d+/)[0]);
        } else if (retezec.includes("down")) {
            down += parseInt(retezec.match(/\d+/)[0]);
        }
    }
    depth = down - up;
    let product = depth * forward;
    return product;
}

console.log(odlisovacPonoruAScitacSoucinec(poleRetezcu));

const odlisovacScitacoSoucinecRetezcuAPoli = (retezce) => {

    let aim = 0;
    let depth = 0;
    let horizontal = 0;
    let regexInt = /\d+/g;
    let nalezeneCislo = 0;
    let result = 0;

    for (const retezec of retezce) {
            if (retezec.includes("forward")) {
                nalezeneCislo = parseInt(retezec.match(regexInt));
                horizontal += nalezeneCislo;
                depth += aim * nalezeneCislo;
            } else if (retezec.includes("down")) {
                nalezeneCislo = parseInt(retezec.match(regexInt));
                aim += nalezeneCislo;
            } else if (retezec.includes("up")) {
                nalezeneCislo = parseInt(retezec.match(regexInt));
                aim -= nalezeneCislo;
            }
            result = depth * horizontal;
    }
    return result;
}

console.log(odlisovacScitacoSoucinecRetezcuAPoli(poleRetezcu));

