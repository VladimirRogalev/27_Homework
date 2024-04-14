const BASE_URL = "https://webaccounting.herokuapp.com";
update.onclick = () => {
    const token =  `Basic ${btoa(`${login.value.trim()}:${password.value}`)}`;
    const body = {
        firstName: newFirstName.value.trim(),
        lastName: newLastName.value.trim(),
    }
    fetch(`${BASE_URL}/account/user`, {
        method: 'Put',
        headers: {
            Authorization: token,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.log(e))
}