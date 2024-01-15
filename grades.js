function calculateGrade() {
    // Prompt the user for input
    const marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));

    // Check if the input is within the valid range
    if (marks >= 0 && marks <= 100) {
        // Determine the grade based on the specified ranges
        if (marks > 79) {
            return "A";
        } else if (marks >= 60 && marks <= 79) {
            return "B";
        } else if (marks >= 50 && marks <= 59) {
            return "C";
        } else if (marks >= 40 && marks <= 49) {
            return "D";
        } else {
            return "E";
        }
    } else {
        return "Invalid input. Marks should be between 0 and 100.";
    }
}

// Call the function and display the result
const result = calculateGrade();
console.log(`Grade: ${result}`);
