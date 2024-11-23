const display = document.querySelector(".divDisplay");

function appendToDisplay(textContent){
    display.textContent += textContent;
}
function delLast(){
    display.textContent = display.textContent.slice(0, -1);
}
function clearAll(){
    display.textContent = "";
}


function calculateResult(){
    try{
        let replacing = display.textContent
        .replace(/x/g, "*")
        .replace(/÷/g, "/")
        .replace(/\^/g, "**")
        .replace(/√\(/g, "Math.sqrt(");
        const factorialRegex = /(\d+|\(.+?\))!/g;

        replacing = replacing.replace(factorialRegex, (_, match) => {
            // If it's in brackets, evaluate the expression inside first
            if (match.startsWith("(")) {
                const innerValue = eval(match);
                return factorial(innerValue);
            } else {
                // Otherwise, directly compute the factorial
                return factorial(parseInt(match));
            }
        });
        const sinRegex = /sin(\d+|\(.+?\))/g;
        replacing = replacing.replace(sinRegex, (_, match) => {
            if (match.startsWith("(")) {
                const innerValue = eval(match);
                return sine(innerValue);
            } else {
                return sine(parseInt(match));
            }
        });
        const cosRegex = /cos(\d+|\(.+?\))/g;
        replacing = replacing.replace(cosRegex, (_, match) => {
            if (match.startsWith("(")) {
                const innerValue = eval(match);
                return cosine(innerValue);
            } else {
                return cosine(parseInt(match));
            }
        });
        const tanRegex = /tan(\d+|\(.+?\))/g;
        replacing = replacing.replace(tanRegex, (_, match) => {
            if (match.startsWith("(")) {
                const innerValue = eval(match);
                return tangent(innerValue);
            } else {
                return tangent(parseInt(match));
            }
        });
        display.textContent = eval(replacing);
        let divMiniDisplay = document.querySelector(".divMiniDisplay").textContent = display.textContent;
    }
    catch{
        display.textContent = "Error 🤦‍♂️";
    }
}
document.querySelector(".one").addEventListener('click', () => appendToDisplay("1"));
document.querySelector(".two").addEventListener('click', () => appendToDisplay("2"));
document.querySelector(".three").addEventListener('click', () => appendToDisplay("3"));
document.querySelector(".four").addEventListener('click', () => appendToDisplay("4"));
document.querySelector(".five").addEventListener('click', () => appendToDisplay("5"));
document.querySelector(".six").addEventListener('click', () => appendToDisplay("6"));
document.querySelector(".seven").addEventListener('click', () => appendToDisplay("7"));
document.querySelector(".eight").addEventListener('click', () => appendToDisplay("8"));
document.querySelector(".nine").addEventListener('click', () => appendToDisplay("9"));
document.querySelector(".zero").addEventListener('click', () => appendToDisplay("0"));
document.querySelector(".add").addEventListener('click', () => appendToDisplay("+"));
document.querySelector(".subtract").addEventListener('click', () => appendToDisplay("-"));
document.querySelector(".multi").addEventListener('click', () => appendToDisplay("x"));
document.querySelector(".divide").addEventListener('click', () => appendToDisplay("÷"));
document.querySelector(".modulus").addEventListener('click', () => appendToDisplay("%"));
document.querySelector(".equal").addEventListener('click', () => calculateResult());
document.querySelector(".delLast").addEventListener('click', () => delLast());
document.querySelector(".clearAll").addEventListener('click', () => clearAll());
document.querySelector(".pow").addEventListener('click', () => appendToDisplay("^"));
document.querySelector(".decimal").addEventListener('click', () => appendToDisplay("."));
document.querySelector(".comma").addEventListener('click', () => appendToDisplay(","));
document.querySelector(".openPeran").addEventListener('click', () => appendToDisplay('('));
document.querySelector(".closedPeran").addEventListener('click', () => appendToDisplay(")"));
document.querySelector(".sqrt").addEventListener('click', () => appendToDisplay("√("));
document.querySelector(".factorial").addEventListener('click', () => appendToDisplay("!"));

function sine(n){
    let ans = Math.sin(n*(Math.PI/180));
    return n = ans.toFixed(4);
}
function cosine(n){
    let ans = Math.cos(n*(Math.PI/180));
    return n = ans.toFixed(4);
}
function tangent(n){
    let ans = Math.tan(n*(Math.PI/180));
    /*if(ans>100000000){
        return n = "Infinity 🤐";
    }else{
        return n = ans.toFixed(4);
    }*/
        return n = ans.toFixed(4);
}
document.querySelector(".sine").addEventListener('click', () => appendToDisplay("sin"));
document.querySelector(".cosine").addEventListener('click', () => appendToDisplay("cos"));
document.querySelector(".tangent").addEventListener('click', () => appendToDisplay("tan"));

// Decimal to Fraction
document.querySelector(".dToF").addEventListener('click', () => decimalToFractionDisplay());
// Function to calculate the greatest common divisor (GCD)
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
  
  // Function to convert decimal to fraction
function decimalToFraction(decimal) {
    if (decimal % 1 === 0) return `${decimal}/1`; // If the number is already an integer
  
    const denominator = Math.pow(10, decimal.toString().split(".")[1].length); // Power of 10
    const numerator = decimal * denominator;
  
    const commonDivisor = gcd(numerator, denominator); // Simplify using GCD
  
    return `${numerator / commonDivisor}/${denominator / commonDivisor}`;
}
  
  // Function to convert display textContent to fraction and update display
function decimalToFractionDisplay() {
    const decimaltextContent = parseFloat(display.textContent); // Get the current textContent from the display
  
    if (isNaN(decimaltextContent)) {
      display.textContent = "Invalid Input"; // Handle invalid input
      return;
    }
  
    const fraction = decimalToFraction(decimaltextContent); // Convert to fraction
    display.textContent = fraction; // Update the display
}

// Factorial Of A Number
/*function fact(){
    let a=1;
    for(let i=1; i<=display.textContent; i++){
        a*=i;
    }
    display.textContent = a;
}
document.querySelector(".factorial").addEventListener("click", () => fact());
*/
function factorial(n) {
    if (n < 0) return "Error"; // Factorial not defined for negative numbers
    return n === 0 ? 1 : n * factorial(n - 1);
}

/* Button container animation */
const btnCase1 = document.querySelector(".btnCase1");
const btnCase2 = document.querySelector(".btnCase2");
const btnSwitch1 = document.querySelector(".btnSwitch1");
const btnSwitch2 = document.querySelector(".btnSwitch2");
const toggleCount = 0;
btnCase2.style.zIndex = -1;

btnSwitch2.addEventListener("click", () => {
    btnCase2.style.zIndex = btnCase2.style.zIndex ==="-1"? "0": "-1";
});

/* Click Count */
const divMiniClickCount= document.querySelector(".divMiniClickCount");
let clickCount = 0;
document.querySelector(".one").addEventListener("click", () => {
    clickCount++;
    divMiniClickCount.textContent = clickCount;
});
document.querySelector(".two").addEventListener("click", () => {
    clickCount++;
    divMiniClickCount.textContent = clickCount;
});
document.querySelector(".three").addEventListener("click", () => {
    clickCount++;
    divMiniClickCount.textContent = clickCount;
});
document.querySelector(".four").addEventListener("click", () => {
    clickCount++;
    divMiniClickCount.textContent = clickCount;
});
document.querySelector(".five").addEventListener("click", () => {
    clickCount++;
    divMiniClickCount.textContent = clickCount;
});
document.querySelector(".six").addEventListener("click", () => {
    clickCount++;
    divMiniClickCount.textContent = clickCount;
});
document.querySelector(".seven").addEventListener("click", () => {
    clickCount++;
    divMiniClickCount.textContent = clickCount;
});
document.querySelector(".eight").addEventListener("click", () => {
    clickCount++;
    divMiniClickCount.textContent = clickCount;
});
document.querySelector(".nine").addEventListener("click", () => {
    clickCount++;
    divMiniClickCount.textContent = clickCount;
});
document.querySelector(".zero").addEventListener("click", () => {
    clickCount++;
    divMiniClickCount.textContent = clickCount;
});
document.querySelector(".equal").addEventListener('click', () => {
    clickCount = "0";
    divMiniClickCount.textContent = clickCount;
});
document.querySelector(".clearAll").addEventListener('click', () => {
    clickCount = "";
    divMiniClickCount.textContent = clickCount;
});


/* Disco Headding */
const TEXT = "SMS Calculator";
const animatedText = document.getElementById("animatedText");

// Create spans for each letter with delays
TEXT.split("").forEach((letter, index) => {
  const span = document.createElement("span");
  span.textContent = letter === " " ? "\u00A0" : letter; // Preserve spaces
  span.style.animationDelay = `${index * 0.2}s`; // Add delay for each letter
  animatedText.appendChild(span);
});