const form = documeet.querySelector(".form");
const first_name = document.querySelector(".fname");
const last_name = document.querySelector(".lname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const button = document.querySelector(".button");

const formInputElements = [first_name, last_name, password];

const isEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// https://github1s.com/namlh023/intro-component-with-sign-up-form/blob/main/js/index.js#L11