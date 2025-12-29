export function merge(arrayA, arrayB) {
    
    const arrayC = [];
    // Bruger i og j til at holde øje med hvor vi er i array a og b
    let i = 0;
    let j = 0; 
    let iterations = 0;

    // Første loop hvor vi flætter de to arrays sammen
    while (i < arrayA.length && j < arrayB.length) {
        iterations++;
        if (arrayA[i] < arrayB[j]) {
            arrayC.push(arrayA[i]);
            i++;
        } else {
            arrayC.push(arrayB[j]);
            j++;
        }
    }

    // Andet loop hvis der er noget tilbage i a
    while (i < arrayA.length) {
        iterations++;
        arrayC.push(arrayA[i]);
        i++;
    }

    // Tredje loop hvis der er noget tilbage i b
    while (j < arrayB.length) {
        iterations++;
        arrayC.push(arrayB[j]);
        j++;
    }

    return { arr: arrayC, iterations: iterations };
}

const listA = [1, 3, 7, 8];
const listB = [0, 2, 4, 5, 6, 9];
const result = merge(listA, listB);

console.log("Array C:", result);