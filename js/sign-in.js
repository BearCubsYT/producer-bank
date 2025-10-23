async function fetchDataAndUse() {
    fetch('./../data/users.json')
    .then(response => response.json())
    .then(jsonData => {
        return jsonData.value;
    })
    .catch(error => console.error('Error loading JSON:', error));
}

document.getElementById("sign-in").addEventListener('click', () => {
    if (document.getElementById("username").value != "" && document.getElementById("password").value != "") {
        let usersData = fetchDataAndUse();
        console.log(usersData);
        // for (let user in usersData) {
        //     if (user == document.getElementById("username").value){
        //             console.log(user);
        //     };
        // };
    };
});