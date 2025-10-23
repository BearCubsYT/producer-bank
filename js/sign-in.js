function fetchDataAndUse() {
    return fetch('./../data/users.json')
    .then(response => response.json())
    .then(jsonData => {
        return jsonData;
    })
    .catch(error => console.error('Error loading JSON:', error));
}

document.getElementById("sign-in").addEventListener('click', async () => {
    if (document.getElementById("username").value != "" && document.getElementById("password").value != "") {
        let usersData = await fetchDataAndUse();
        for (let user in usersData) {
            if (user == document.getElementById("username").value){
                
            } else {
                document.getElementById("incorrect") = "Incorrect Username and/or Password";
            };
        };
    };
});