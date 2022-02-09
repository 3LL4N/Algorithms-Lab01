const fs =  require('fs');

const insertSort = (inputArray) => {


    let processedArray = Array.from(inputArray);

    for (let i = 1; i < processedArray.length; i++) {
        for (let k = i; k > 0 && processedArray[k] < processedArray[k - 1]; k--) {
            const temp = processedArray[k];
            processedArray[k] = processedArray[k - 1];
            processedArray[k - 1] = temp;
        }
    }

    return processedArray;
}


if (fs.existsSync("insertSortTimes.txt")){

    fs.unlinkSync("insertSortTimes.txt");

}

var averageTime = 0;

for (var j = 0; j < 100; j++){

    const time0 = Date.now();

    var testArray = [];
    
    for (var i = 0; i < 10000; i++){

        testArray.push(Math.random() * 10000)
    }

    finalArray = insertSort(testArray);
    
    const time1 = Date.now();
    const finalTime = time1 - time0;
    console.log(`Time to sort 10000 numbers: ${finalTime} milliseconds`);

    fs.appendFileSync("insertSortTimes.txt", `Time to sort 10,000 numbers. Test ${j + 1}: ${finalTime} ms \n`, (err) => {
        if (err)
            console.log(err);
        else{
            console.log('success');
            } 
    });

    averageTime += finalTime;
}

console.log(`Average time to sort 10,000 numbers, done over 100 tests: ${averageTime / 100} ms`)

// const testArray = [17, 8, 9, 6, 4, 56, 7, 4, 6, 7, 534, 3, 22, 5, 6.2, 5.75, 727];

// console.log(insertSort(testArray));