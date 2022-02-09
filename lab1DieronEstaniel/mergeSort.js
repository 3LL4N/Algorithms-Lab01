export const merge = (leftInput, rightInput) => {
    let sortedArray = []; 
    let leftArray = Array.from(leftInput);
    let rightArray = Array.from(rightInput);

    while (leftArray.length && rightArray.length) {

        if (leftArray[0] < rightArray[0]) {
            sortedArray.push(leftArray.shift());
        } else {
            sortedArray.push(rightArray.shift());
        }
    }

    return [...sortedArray, ...leftArray, ...rightArray];//makes a copy and combines the arrays.
}

export const mergeSort = (inputArray) => {
    const processedArray = Array.from(inputArray);
    const fullLenght = inputArray.length;
    const halfLength = Math.floor(fullLenght / 2);

    if (fullLenght <= 1) {
        return inputArray;
    }

    const leftArray = processedArray.splice(0, halfLength);
    const rightArray = processedArray;
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}
    


