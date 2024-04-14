const BASE_URL = "https://webaccounting.herokuapp.com";

register.onclick = e => {
    const user = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        login: login.value.trim(),
        password: password.value,
    }
    fetch(`${BASE_URL}/account/user`, {
        method: "Post",
        body: JSON.stringify(user), /// приводит обьект user в строку
        headers: {
            "Content-Type": 'application/json'
        }

    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.log(e))
    // console.log(user)
}