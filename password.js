const BASE_URL = "https://webaccounting.herokuapp.com";
const message = document.createElement('div');
message.id = 'message';
const body = document.querySelector('body');
body.append(message)
updatePassword.onclick = () => {
    let newPassword = document.getElementById('newPassword'),
        confirmPassword = document.getElementById('confirmPassword');
    validatePassword(newPassword, confirmPassword);

    function validatePassword(newPassword, confirmPassword) {
        if (newPassword.value === confirmPassword.value) {
            const token = `Basic ${btoa(`${login.value.trim()}:${password.value}`)}`;
            fetch(`${BASE_URL}/account/user/password`, {
                method: 'Put',
                headers: {
                    Authorization: token,
                    "X-Password": confirmPassword.value
                },
            })
                .then(response => {
                    if (response.ok) {
                        message.textContent = 'Your password changed!';
                    } else {
                        throw new Error("ERROR")
                    }
                })
                .catch(e =>  console.log(e))
        } else {
            message.textContent = 'Passwords do not match!';
        }
    }
}

