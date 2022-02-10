
export const insertSort = (inputArray) => {


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

