export function binarySearchRecursive(search, values, start, end, iterations = 0) {
    iterations++;

    if (start > end) {
        return {
            found: false,
            index: -1,
            iterations: iterations
        };
    }

    // Finder midten
    let middle = Math.floor((start + end) / 2);
    let currentElement = values[middle];

    // Sammenligning sker her
    if (currentElement === search) {
        return {
            found: true,
            index: middle,
            iterations: iterations
        };
    } 
    else {
        let result;

        if (currentElement < search) {
            console.log("Tallet er for lavt", currentElement);
            result = binarySearchRecursive(search, values, middle + 1, end, iterations);
        } else {
            console.log("Tallet er for højt", currentElement);
            result = binarySearchRecursive(search, values, start, middle - 1, iterations);
        }

        console.groupEnd();
        return result; 
    }
}