import csv from "csvtojson";
import { createWriteStream, createReadStream } from "fs";
const csvFilePath = "./csv/nodejs-hw1-ex1.csv";

const writeStream = createWriteStream("./csv/text.txt");
createReadStream(csvFilePath)
  .pipe(csv())
  .on("data", (data) => writeStream.write(data))
  .on("error", (err) => console.log(err));
