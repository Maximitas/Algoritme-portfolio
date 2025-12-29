export function binarySearch(searchFor, values) {
    let min = 0;
    let max = values.length - 1;
    let iterations = 0;

    while (min <= max) {
        iterations++;
        
        // Find midten af det nuværende søgefelt
        let middle = Math.floor((min + max) / 2);
        let currentElement = values[middle];

        if (currentElement === searchFor) {
            // Vi fandt den!
            return {
                found: true,
                index: middle,
                iterations: iterations
            };
        } else if (currentElement < searchFor) {
            // Værdien er i den øverste halvdel - ryk min-grænsen op
            min = middle + 1;
        } else {
            // Værdien er i den nederste halvdel - ryk max-grænsen ned
            max = middle - 1;
        }
    }

    // Hvis vi kommer herud, er værdien ikke i arrayet
    return {
        found: false,
        index: -1,
        iterations: iterations
    };
}