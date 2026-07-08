function showTableConfirmation() {
    confirm("This table shows student names, course information, and grades.");
}
const studentTable = document.getElementById("studentTable");

studentTable.addEventListener("mouseover", showTableConfirmation);