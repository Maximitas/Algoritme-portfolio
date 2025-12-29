export function selectionSort(arr) {
    let iterations = 0;
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Vi antager, at det første element i den usorterede del er det mindste
        // Dette bliver vi nød til for at havde noget at sammenligne med
        let minIndex = i;

        // Find det mindste element i resten af arrayet
        for (let j = i + 1; j < n; j++) {
            iterations++;
            if (arr[j] < arr[minIndex]) {
                // Det skal ige siges at vi gemmer de nuværede minimumsindeks her, hvis vi finder et mindre længere nede af arrayet overskriver vi det
                minIndex = j;
            }
        }

        // Vi ser om vi har fat i et nyt minimum, hvis vi har det bytter vi de to elementer
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return {
        arr: arr,
        iterations: iterations,
        sorted: true
    };
}