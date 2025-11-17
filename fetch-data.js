// Step 1: Initialize the async function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the container where data should appear
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch the data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear the "Loading..." message
        dataContainer.innerHTML = '';

        // Step 6: Create a list to display users
        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Append final list to the page
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 7: Handle any errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 8: Run when DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);
