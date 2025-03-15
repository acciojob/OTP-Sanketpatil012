document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".code");

    // Assign unique IDs dynamically
    inputs.forEach((input, index) => {
        input.id = `code-${index + 1}`;
    });

    inputs[0].focus(); // Focus on the first input

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            if (e.target.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus(); // Move focus forward
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && index > 0 && !input.value) {
                inputs[index - 1].focus(); // Move focus backward
            }
        });
    });
});
