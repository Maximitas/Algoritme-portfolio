export function insertionSort(arr) {
    let iterations = 0;

    // Jeg starter med index 1, fordi hvis du har et set kort og vil sortere det så er det første altid sorteret
    // der er ikke noget at sortere det på.
    for (let i = 1; i < arr.length; i++) {
        iterations++;
        
        // Jeg laver en nøgle på værdien der skal sorteres så den ikke bliver glemt når vi rykker på kortene(tallene).
        // j bliver sat til at være en mindre end i så det er kortet(tallet) til venstre for nøglen
        let key = arr[i]; 
        let j = i - 1;

        // Så længe j er >= 0 og j kortet(tallet) er > end nøglen så kører vi
        while (j >= 0 && arr[j] > key) {
            iterations++; 
            
            // Flyt kortet en plads til højre
            arr[j + 1] = arr[j]; 
            // Her tjækker nøglen op mod de kort vi har været igennem og finder den rette plads i de sorterede kort(værdier)
            j = j - 1;
        }

        // Når while loopet er done kan vi sætte vores key ind på den rigtige plads
        arr[j + 1] = key;
        
    }

    return {
        arr: arr,
        iterations: iterations,
        sorted: true
    };
}

    const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
    const result = insertionSort(list);

    console.log("Resultat:", result.arr);
    console.log("Antal iterationer:", result.iterations);