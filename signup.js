const UName = [];
const Pass = [];

function createAcc() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const passCon = document.getElementById('signup-confpassword').value;
    
    if (checkUName(username) === false && password === passCon && username !== "" && password !== "") {
        UName.push(username);
        Pass.push(password);
        alert("Account created successfully!");
        document.getElementById('signup-username').value = "";
        document.getElementById('signup-password').value = "";
        document.getElementById('signup-confpassword').value = "";
        openLogin();
    }
    else if(username === "" && password === ""){
        alert("Input valid information");
    } 
    else {
        alert("Username already exists or passwords do not match.");
    }
}

function checkPass() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    let unpos = null;

    for (let i = 0; i < UName.length; i++) {
        if (username === UName[i]) {
            unpos = i;
            break;
        }
    }

    if (unpos !== null && password === Pass[unpos]) {
        window.open("home.html");
    } else {
        alert("Incorrect Username or Password");
    }
}

function checkUName(username) {
    for (let i = 0; i < UName.length; i++) {
        if (UName[i] === username) {
            return true;
        }
    }
    return false;
}

function forgotPassword() {
    const username = prompt("Please enter your username:");
    let unpos = null;

    for (let i = 0; i < UName.length; i++) {
        if (username === UName[i]) {
            unpos = i;
            break;
        }
    }

    if (unpos !== null) {
        const newPassword = prompt("Please enter your new password:");
        const confirmNewPassword = prompt("Please confirm your new password:");
        if (newPassword === confirmNewPassword) {
            Pass[unpos] = newPassword;
            alert("Password has been reset successfully!");
        } else {
            alert("Passwords do not match. Try again.");
        }
    } else {
        alert("Username does not exist.");
    }
}

function openSignUp() {
    document.getElementById('login').style.visibility = 'hidden';
    document.getElementById('login').style.opacity = '0';
    document.getElementById('signup').style.visibility = 'visible';
    document.getElementById('signup').style.opacity = '1';
}

function openLogin() {
    document.getElementById('signup').style.visibility = 'hidden';
    document.getElementById('signup').style.opacity = '0';
    document.getElementById('login').style.visibility = 'visible';
    document.getElementById('login').style.opacity = '1';
}

function showPassword() {
    const passwordInput = document.getElementById('login-password');
    const checkbox = document.getElementById('showPass');
    passwordInput.type = checkbox.checked ? 'text' : 'password';
}

function showPassword2() {
    const passwordInput = document.getElementById('signup-password');
    const checkbox = document.getElementById('showPass2');
    passwordInput.type = checkbox.checked ? 'text' : 'password';
}

function showPassword3() {
    const passwordInput = document.getElementById('signup-confpassword');
    const checkbox = document.getElementById('showPass3');
    passwordInput.type = checkbox.checked ? 'text' : 'password';
}