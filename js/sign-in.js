function fetchDataAndUse() {
    return fetch('./../data/users.json')
    .then(response => response.json())
    .then(jsonData => {
        return jsonData;
    })
    .catch(error => console.error('Error loading JSON:', error));
}

// If user presses login button
document.getElementById("sign-in").addEventListener('click', async () => {
    // Resets the incorrect text to blank incase they no longer are inputting wrong info
    document.getElementById("incorrect").innerHTML = "";
    // Makes sure they dont have blank inputs
    if (document.getElementById("username").value != "" && document.getElementById("password").value != "") {
        let usersData = await fetchDataAndUse();
        for (user in usersData) {
            // Compare inputted username to all usernames in database
            if (user == document.getElementById("username").value){
                // If the account wwas foun mak sure the password is correct
                if (user["password"] == document.getElementById("password").value) {
                    // let generalData = await fetchDataAndUse2();
                    // generalData["Logged In"] = true;
                    // window.open('./../html/index.html');
                } else {
                    // Set incorrect text section to say they put wrong password in
                    document.getElementById("incorrect").innerHTML = "Incorrect Password";
                }
            } else {
                // Set incorrect text section to say they put wrong username and/or password in
                document.getElementById("incorrect").innerHTML = "Incorrect Username and/or Password";
            };
        }
    };
});