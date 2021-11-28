import fs from "fs";

let cilenySoucet = 2020;
const buffer = fs.readFileSync("2020/01/dataset/vstupy.csv");

const sectiVynasobTrojiciCisel = (ocekavanySoucet, buff) => {
    let poleCisel = [];
    let zpracovanaData = buff.toString().split('\n');

    for (const cisloZDat of zpracovanaData) {
        poleCisel.push(parseInt(cisloZDat));
    }

    const hledanaTrojiceCisel = [];

    poleCisel.sort((a, b) => a - b);

    for (let i = 0; i < poleCisel.length - 2; i++) {
        let levyUkazatel = i + 1;
        let pravyUkazatel = poleCisel.length - 1;

        while (levyUkazatel < pravyUkazatel) {
            let soucet = poleCisel[levyUkazatel] + poleCisel[pravyUkazatel] + poleCisel[i];
            if (soucet === ocekavanySoucet) {
                console.log(poleCisel[levyUkazatel] * poleCisel[pravyUkazatel] * poleCisel[i]);
                hledanaTrojiceCisel.push([poleCisel[levyUkazatel], poleCisel[pravyUkazatel], poleCisel[i]]);
                levyUkazatel++;
                pravyUkazatel--;
            } else if (soucet < ocekavanySoucet) {
                levyUkazatel++;
            } else if (soucet > ocekavanySoucet) {
                pravyUkazatel--;
            }
        }
    }
    return hledanaTrojiceCisel;
}

sectiVynasobTrojiciCisel(cilenySoucet, buffer)
