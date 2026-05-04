const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let current = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            current = "";
            display.textContent = "0";
        } 
        else if (value === "=") {
            try {
                current = eval(current).toString();
                display.textContent = current;
            } catch {
                display.textContent = "Erro";
                current = "";
            }
        } 
        else {
            current += value;
            display.textContent = current;
        }
    });
});