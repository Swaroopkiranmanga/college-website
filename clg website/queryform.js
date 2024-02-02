function submitForm() {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const RollNumber = document.getElementById('RollNumber').value;
    const subject= document.getElementById('subject').value;

    // Create request object
    const xhr = new XMLHttpRequest();

    // Set up request
    xhr.open('POST', 'https://t0uqy3j281.execute-api.ap-south-1.amazonaws.com/query', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Set up response handler
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert('Registration successful!');
                document.getElementById('name').value = '';
                document.getElementById('RollNumber').value = '';
                document.getElementById('subject').value = '';
            } else {
                alert('Registration failed: ' + xhr.responseText);
            }
        }
    };

    // Send request
    xhr.send(JSON.stringify({
        name: name,
        RollNumber: RollNumber,
        subject: subject,
    }));
}