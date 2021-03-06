import { faker } from '@faker-js/faker';
import { mergeSort } from './mergeSort.js';
import * as fs from 'fs';

if (fs.existsSync("mergeSortTimesString.csv")){

    fs.unlinkSync("mergeSortTimesString.csv");

}

fs.appendFileSync("mergeSortTimesString.csv","number_of_elements,average_sort_time \n")

for (var k = 3; k <= 500; k++){
    var averageTime = 0;


    for (var j = 0; j < 100; j++){

        

        var testArray = [];
        
        for (var i = 0; i < k; i++){

            var fakerFunctions = [faker.random.word(), faker.name.findName(), faker.address.cityName()]

            testArray.push(fakerFunctions[Math.floor(Math.random() * 3)]);
        }

        const time0 = Date.now();

        const finalArray = mergeSort(testArray);
        
        const time1 = Date.now();
        const finalTime = time1 - time0;



        averageTime += finalTime;
    }

    console.log(`Average time to sort ${k} strings, done over ${j} tests: ${averageTime / j} ms`);

    fs.appendFileSync("mergeSortTimesString.csv", `${k},${averageTime / j} \n`, (err) => {
        if (err)
            console.log(err);
        else{
            console.log('success');
            } 
    });
};

console.log("Test done!");