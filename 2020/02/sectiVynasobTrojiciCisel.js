import fs from "fs";

let cilenySoucet = 2020;
const buffer = fs.readFileSync("2020/01/dataset/vstupy.csv");
console.log(buffer);
console.log(cilenySoucet);
