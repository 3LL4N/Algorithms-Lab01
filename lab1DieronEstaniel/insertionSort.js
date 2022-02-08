const insertSort = (inputArray) => {

    let processedArray = Array.from(inputArray);

    for (let i = 1; i < processedArray.length; i++) {
        for (let k = i; k > 0 && processedArray[k] < processedArray[k - 1]; k--) {
            const temp = processedArray[k];
            processedArray[k] = processedArray[k - 1];
            processedArray[k - 1] = temp;
        }
    }

    console.log('Untouched Input: ', inputArray);
    return processedArray;
}

const testArray = [17, 8, 9, 6, 4, 56, 7, 4, 6, 7];

console.log(insertSort(testArray));
console.log('Performance: ', performance.now()/1000, 'seconds');//This line must be placed at the bottom