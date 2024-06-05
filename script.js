document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button, .button1, .button2");
    const expressionDiv = document.getElementById("expression");
    const resultDiv = document.getElementById("result");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.innerText;
            
            if (value === "AC") {
                clr();
            } else if (value === "Del") {
                del();
            } else if (value === "=") {
                solve();
            } else {
                dis(value);
            }
        });
    });

    // Function to display value
    function dis(val) {
        let currentValue = resultDiv.innerText;
        let per = expressionDiv.innerText;
    
        // Check if the value is a decimal point
        if (val === '.') {
            // If a decimal point already exists, ignore the new one
            if (currentValue.includes('.')) {
                alert("Only one decimal point allowed.");
                expressionDiv.innerText = "";
                resultDiv.innerText = "";
                return;
            }
        }
    
        // Rest of your existing logic
        if (isOperator(currentValue.slice(-1)) && isOperator(val)) {
            alert("Operators cannot come one after another.");
            expressionDiv.innerText = "";
            resultDiv.innerText = "";
        } else {
            if (!isNaN(currentValue.slice(-1)) && val === '(') {
                resultDiv.innerText += '*' + val;
            } else {
                resultDiv.innerText += val;
            }
        }
    }
    
    // function dis(val) {
    //     let currentValue = resultDiv.innerText;
    //     let per=expressionDiv.innerText;

    //     // Check if the last character is an operator
    //     if (isOperator(currentValue.slice(-1)) && isOperator(val)) {
    //         alert("Operators cannot come one after another.");
    //         expressionDiv.innerText = "";
    //         resultDiv.innerText = "";
    //     } else {
    //         // Check if a number is followed by an opening parenthesis
    //         if (!isNaN(currentValue.slice(-1)) && val === '(') {
    //             resultDiv.innerText += '*' + val;
    //         } else {
    //             resultDiv.innerText += val;
                
    //         }
        
    //         }
    //     }
        
    
        
    // Function to evaluate the expression and return result
    function solve() {
        try {
            let expression = resultDiv.innerText;
            expressionDiv.innerText=expression;
            if (isOperator(expression.slice(-1))) {
                alert("Expression cannot end with an operator.");
                expressionDiv.innerText = "";
                resultDiv.innerText = "";

            } else {
                let evaluatedResult = eval(expression);
                resultDiv.innerText = evaluatedResult;
            }
        } catch (err) {
            alert("Invalid expression");
        }
    }

    // Function to clear the display
    function clr() {
        expressionDiv.innerText = "";
        resultDiv.innerText = "";
    }

    // Function to delete the last character
    function del() {
        let currentValue = expressionDiv.innerText;
        expressionDiv.innerText = currentValue.slice(0, -1);
    }

    // Helper function to check if a character is an operator
    function isOperator(char) {
        return "+-*/(.".includes(char);
    }
});
