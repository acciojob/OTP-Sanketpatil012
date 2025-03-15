
document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".code");

    inputs[0].focus(); // Focus on the first input when page loads

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            if (e.target.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus(); // Move to the next input
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && index > 0 && !input.value) {
                inputs[index - 1].focus(); // Move to previous input on backspace
            }
        });
    });
});
