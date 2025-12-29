import { merge } from './merge.js';

export function mergeSort(arr) {
    let totalIterations = 0;

    // Den interne rekursive funktion
    function sort(currentArr) {
        totalIterations++;

        // Her bliver der tjekket om arrayet kun har et element
        if (currentArr.length <= 1) {
            return currentArr;
        }

        // Vi deler arrayet i to halvdele, hvis det er ulige bliver right større
        const mid = Math.floor(currentArr.length / 2);
        const left = currentArr.slice(0, mid);
        const right = currentArr.slice(mid);

        // Her sker rekursionen hvor vi kalder sort på begge halvdele
        // Vi gemmer resultaterne så vi kan flette dem bagefter
        const sortedLeft = sort(left);
        const sortedRight = sort(right);

        // Jeg bruger merge jeg har lavet tidliger til at sætte de to sortede arrays sammen
        const mergeResult = merge(sortedLeft, sortedRight);
        
        // Her tæller jeg sammen den totale mængde af iterationer
        totalIterations += mergeResult.iterations;

        return mergeResult.arr;
    }

    const finalResult = sort(arr);

    return {
        arr: finalResult,
        iterations: totalIterations,
        sorted: true
    };
}

const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
const result = mergeSort(list);

console.log("Resultat:", result.arr);
console.log("Total iterationer:", result.iterations);