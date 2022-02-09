import { faker } from '@faker-js/faker';
import { insertSort } from 'insertionSort.js';
import * as fs from 'fs';


const fs = require('fs');

if (fs.existsSync("insertSortTimesString.txt")){

    fs.unlinkSync("insertSortTimesString.txt");

}

var averageTime = 0;

for (var j = 0; j < 100; j++){

    const time0 = Date.now();

    var testArray = [];
    var fakerFunctions = [faker.random.word(), faker.name.findName(), faker.address.cityName()]

    for (var i = 0; i < 10; i++){

        testArray.push(fakerFunctions[Math.floor(Math.random() * 3)]);
    }

    finalArray = insertSort(testArray);
    console.log(finalArray);
    
    const time1 = Date.now();
    const finalTime = time1 - time0;
    console.log(`Time to sort 10000 random words: ${finalTime} milliseconds`);

    fs.appendFileSync("insertSortTimesString.txt", `Time to sort 10,000 numbers. Test ${j + 1}: ${finalTime} ms \n`, (err) => {
        if (err)
            console.log(err);
        else{
            console.log('success');
            } 
    });

    averageTime += finalTime;
}

console.log(`Average time to sort 10,000 numbers, done over 100 tests: ${averageTime / 100} ms`)

