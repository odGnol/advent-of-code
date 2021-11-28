import fs from "fs";

let cilenySoucet = 2020;
const buffer = fs.readFileSync("2020/01/dataset/vstupy.csv");

const najdiSpravnouDvojiciCisel = (ocekavanySoucet, buff) => {
    let poleCisel = [];
    let zpracovanaData = buff.toString().split('\n');

    for (const cisloZDat of zpracovanaData) {
        poleCisel.push(parseInt(cisloZDat));
    }

    let serazenaCisla = poleCisel.sort((a, b) => a - b);
    let levyUkazatel = 0;
    let pravyUkazatel = serazenaCisla.length - 1;

    while (levyUkazatel < pravyUkazatel) {
        let soucet = serazenaCisla[levyUkazatel] + serazenaCisla[pravyUkazatel];
        console.log(soucet);
        if (soucet === ocekavanySoucet) {
            console.log("tady " + serazenaCisla[levyUkazatel] * serazenaCisla[pravyUkazatel]);
            return serazenaCisla[levyUkazatel] * serazenaCisla[pravyUkazatel];
        } else if (soucet < ocekavanySoucet) {
            levyUkazatel++;
        } else if (soucet > ocekavanySoucet) {
            pravyUkazatel--;
        }
    }
    return [];
}

najdiSpravnouDvojiciCisel(cilenySoucet, buffer);
