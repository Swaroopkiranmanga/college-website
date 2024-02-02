const form = document.getElementById('myForm');
        form.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent form submission

            const dataField = document.getElementById('dataField');
            const data = dataField.value;

            const url = 'https://t0uqy3j281.execute-api.ap-south-1.amazonaws.com/query'; // Replace with your Lambda API endpoint

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify({ data }), // Convert data to JSON
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const responseData = await response.json();
                    console.log('Lambda Response:', responseData);
                } else {
                    console.error('API Error:', response.statusText);
                }
            } catch (error) {
                console.error('Request Error:', error);
            }
        });