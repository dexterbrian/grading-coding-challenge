// Prompt user
const marks = Number(prompt("Please enter your marks"));
let grade = "";

// Validate prompt to be between 0 and 100
if (marks <= 0 || marks > 100 ) {
    alert("Invalid marks. Marks should be between 0 and 100");
    //return;
}
else {
    // Check grade
    if (marks > 79) {
        grade = "A";
    }
    else if (marks >= 60) {
        grade = "B";
    }
    else if (marks >= 49) {
        grade = "C";
    }
    else if (marks >= 40) {
        grade = "D"
    }
    else if (marks < 40) {
        grade = "E";
    }

    // Output grade
    alert(`You scored ${marks} marks and attained a grade of: ${grade}.`);
}
