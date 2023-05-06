const checkbox = document.querySelector("#menu-checkbox")

const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const button = document.querySelector("button")
const image = document.createElement("img");
//errormessages
const fullNameError = document.querySelector("#fullNameError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const messageError = document.querySelector("#messageError");


function validateForm(event) {
    event.preventDefault();


    //name

    if (checkLength(fullName.value, 4) === true) {
        fullNameError.style.display = "none";

    } else {
        fullNameError.style.display = "inline-block";
        fullNameError.style.color = "yellow";
    }


    //email
    if (validateEmail(email.value) && checkLength(email.value, 1) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "inline-block";
        emailError.style.color = "yellow";
    }

    //subject
    if (checkLength(subject.value, 14) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "inline-block";
        subjectError.style.color = "yellow";
    }

    //message
    if (checkLength(message.value, 24) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "inline-block";
        messageError.style.color = "yellow";
    }

    if ((checkLength(fullName.value, 4) === true) &&
        (validateEmail(email.value) && checkLength(email.value, 1) === true) &&
        (checkLength(subject.value, 14) === true) &&
        (checkLength(message.value, 24) === true)

    ) {
        //clears all input values
        form.reset();
        button.innerHTML = "form Sendt!";

        form.innerHTML = "Thanks for reaching out!"
        form.style.height = "593.6px";
        form.style.backgroundColor = "var(--body-background-color)";
        form.style.color = "black";
        form.style.marginTop = "100px";
        image.src = "/images/samesize/smileyman_rightsize.jpg";
        form.appendChild(image);

    }

}


//listens for submit and calls the validateform function
form.addEventListener("submit", validateForm);


//checking length on email, name etc
function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}


//Validates email, checking for emailpattern
function validateEmail(email) {
    const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/
    const patternMatches = regEx.test(email);
    return patternMatches;
};


const menuCheckbox = document.querySelector("#menu-checkbox");
const body = document.querySelector("body");

menuCheckbox.addEventListener("change", function () {
    if (menuCheckbox.checked) {
        body.classList.add("burgerMenu");
    } else {
        body.classList.remove("burgerMenu");

    }
});