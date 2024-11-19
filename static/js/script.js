document.getElementById('sortingForm').onsubmit = function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    fetch('/sort', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: name})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = `Hello ${name}, you are in ${data.house}!`;
    })
    .catch(error => console.error('Error:', error));
};
