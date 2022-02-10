import { insertSort } from '../insertionSort.js';
import * as fs from 'fs';

if (fs.existsSync("insertBestCase.csv")){

    fs.unlinkSync("insertBestCase.csv");

}

fs.appendFileSync("insertBestCase.csv","number_of_elements,average_sort_time \n")

for (var k = 3; k <= 750; k++){
    var averageTime = 0;

    for (var j = 0; j < 2000; j++){

        var testArray = [];
        
        for (var i = 0; i < k; i++){

            testArray.push(i);
            testArray.reverse();
        }

        const time0 = Date.now();

        const finalArray = insertSort(testArray);
        
        const time1 = Date.now();
        const finalTime = time1 - time0;

        averageTime += finalTime;
    }

    console.log(`Average time to sort ${k} numbers, done over ${j} tests: ${averageTime / j} ms`);

    fs.appendFileSync("insertBestCase.csv", `${k},${averageTime / j} \n`, (err) => {
        if (err)
            console.log(err);
        else{
            console.log('success');
            } 
    });
};

console.log("Test done!")