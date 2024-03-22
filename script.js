const password         = document.querySelector('form input[name="user_password"]');
const confirm_password = document.querySelector('form input[name="confirm_password"]');

function onChange() {
    console.log(password.value + "\n" + confirm_password.value);

    if(password.value === confirm_password.value)
        confirm_password.setCustomValidity('');
    else
        confirm_password.setCustomValidity("Passwords do not match");
}

confirm_password.addEventListener("change", onChange);