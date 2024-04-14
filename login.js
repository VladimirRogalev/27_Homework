const BASE_URL = "https://webaccounting.herokuapp.com";

// const pass = "1234333567.com"
// const encode = btoa(pass);
// console.log(encode);
// const decode = atob('SmF2YUZhbjoxMjM0');
// console.log(decode);


signIn.onclick = () => {
    const token =  `Basic ${btoa(`${login.value.trim()}:${password.value}`)}`;
    fetch(`${BASE_URL}/account/login`, {
        method: 'Post',
        headers: {
            Authorization: token
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.log(e))
}