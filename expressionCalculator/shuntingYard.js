import Stack from '../stack/stack.js';
import Queue from '../queue/queue.js';

function shuntingYard(inputString) {
    const tokens = inputString.split(" ");
    const outputQueue = new Queue();
    const operatorStack = new Stack();

    // Her siger jeg hvilken operator der er vigtigst, den højeste værdi er vigtigst
    const precedence = {
        "^": 4,
        "*": 3,
        "/": 3,
        "+": 2,
        "-": 2
    };

    tokens.forEach(token => {
        switch (token) {
            // Det allerførste der bliver tjekket er den åbne paranthese, den skal den bare direkte på stakken
            case "(":
                operatorStack.push(token);
                break;

            // Når vi så rammer en slut paranthese er vi done og skal nu se om der var nogle operatører der skal smides over i køen.
            case ")":
                while (operatorStack.peek() !== "(") {
                    outputQueue.enqueue(operatorStack.pop());
                }
                operatorStack.pop(); 
                break;

            case "+":
            case "-":
            case "*":
            case "/":
            case "^":
                // Vi gemmer den nuværende token og toppen af den midlertidige stack
                let o1 = token;
                let o2 = operatorStack.peek();

                // Denne løkke tjekker om der er noget i stacken, at vi ikke har ramt en '(' og ser om tegnet på staken er mere vigtig end vores token
                while (o2 !== null && o2 !== "(" && precedence[o2] >= precedence[o1]) {
                    // Hvis vi har ^ og ^ skal vi ikke poppe, den kører fra højre af ikke venstre.
                    if (o1 === "^" && o2 === "^") break;
                    // Jeg tager det øverste tegn fra stacken og smider det i køen
                    outputQueue.enqueue(operatorStack.pop());
                    // Sætter o2 til at være den nye top af stacken
                    o2 = operatorStack.peek();
                }
                operatorStack.push(o1);
                break;
            // Hvis den når her til har vi med et tal at gøre. De skal aldrig vente så de ryger direkte i output køen
            default:
                outputQueue.enqueue(token);
                break;
        }
    });

    // Hvis der er noget i stacken skal det smides i køen
    while (operatorStack.peek() !== null) {
        outputQueue.enqueue(operatorStack.pop());
    }

    // Hvis der er noget i stacken skal det smides i køen
    let result = "";
    while (outputQueue.size() > 0) {
        result += outputQueue.dequeue() + (outputQueue.size() > 0 ? " " : "");
    }
    return result;
}

console.log(shuntingYard("2 + 3 * 4")); 
console.log(shuntingYard("( 2 + 3 ) * 4"));