document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault();

        consdocument.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');
    if (!form) return; // Safety check

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const emailId = document.getElementById('emailId').value;

        const message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;
        alert(message);
    });
});t firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const emailId = document.getElementById('emailId').value;

        const message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;
        alert(message);
    });
});