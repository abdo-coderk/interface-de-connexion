//creating a new input element with the specified value and type.
let enterEmail = document.getElementsByClassName('email').length;
let enterPassword = document.getElementsByClassName('password').length;
for(let i = 0; i < enterEmail; i++) {
    document.getElementsByClassName('email')[i].addEventListener("click", function() {
        let rmovePlaceholder = this.setAttribute("placeholder", "Write...");
        let backPlaceholder = document.getElementsByClassName('email')[i];
        backPlaceholder.style.border = '2px solid #777';
        backPlaceholder.style.borderRadius = '3px';
        setTimeout(function() {
            let backPlaceholder = document.getElementsByClassName('email')[i];
            backPlaceholder.setAttribute("placeholder", "Enter your email");
        }, 3000);
    })
}
for(let i = 0; i < enterPassword; i++) {
    document.getElementsByClassName('password')[i].addEventListener("click", function() {
        let rmovePlaceholder = this.setAttribute("placeholder", "Write...");
        let backPlaceholder = document.getElementsByClassName('password')[i];
        backPlaceholder.style.border = '2px solid #777';
        backPlaceholder.style.borderRadius = '3px';
        setTimeout(function() {
            let backPlaceholder = document.getElementsByClassName('password')[i];
            backPlaceholder.setAttribute("placeholder", "Password");
        }, 3000);
    })
}

//Create the placeholder element and set the placeholder value to the new value for the current username and password
let submatBtnClick = document.getElementsByClassName("btn-login").length;
for (let i = 0; i < submatBtnClick; i++) {
    document.getElementsByClassName("btn-login")[i].addEventListener("click", function() {
        let email = document.getElementsByClassName('email')[0].value;
        let password = document.getElementsByClassName('password')[0].value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        let passwordRegex = /^.{6,}$/;
        if (emailRegex.test(email) && passwordRegex.test(password)) {
            let textContentTrue = document.getElementsByClassName('text-content')[0];
            let forgotInfo = document.getElementsByClassName('forgot-information')[0];
            textContentTrue.innerHTML = 'Valid, Your details are correct.';
            textContentTrue.style.color = 'green';
            textContentTrue.classList.add('valid');
            forgotInfo.style.color = 'black';
            setTimeout(function() {
                let textContentSetTrue = document.getElementsByClassName('text-content')[0];
                let textContentFalse = document.getElementsByClassName('text-content')[0];
                textContentSetTrue.innerHTML = 'Welcome back! Please entre your details.';
                textContentSetTrue.style.color = '#777';
                textContentSetTrue.classList.remove('valid');
                textContentFalse.classList.remove('fogot');
            }, 10000);
        } else {
            let textContentFalse = document.getElementsByClassName('text-content')[0];
            textContentFalse.innerHTML = 'Invalid, Please entre your details.'
            textContentFalse.style.color = 'red';
            textContentFalse.classList.add('fogot');
            let forgotInfo = document.getElementsByClassName('forgot-information')[0];
            forgotInfo.style.color = "red";
        }
    })
}
