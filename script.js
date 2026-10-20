document.addEventListener("DOMContentLoaded", function () {

    console.log("DOM is ready");

    const inputs = document.querySelectorAll("#username, #email, #password");

    inputs.forEach(function (input) {

        input.addEventListener("focus", function () {
            input.style.backgroundColor = "#fffae0";
        });

        input.addEventListener("blur", function () {
            input.style.backgroundColor = "white";
        });

    });

        const form = document.querySelector("#signup-form");

        const username = document.querySelector("#username");
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");
        const terms = document.querySelector("#terms");

        const usernameError = document.querySelector("#error-username");
        const emailError = document.querySelector("#error-email");
        const passwordError = document.querySelector("#error-password");
        const termsError = document.querySelector("#error-terms");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            let isValid = true;

            if (username.value.trim() === "") {
                usernameError.textContent = "Username is required";
                usernameError.style.display = "block";
                username.classList.add("error-border");
                isValid = false;
            } else {
                usernameError.textContent = "";
                usernameError.style.display = "none";
                username.classList.remove("error-border");
            }

            const emailValue = email.value.trim();
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (emailValue === "") {
                emailError.textContent = "Enter a valid email adress";
                emailError.style.display = "block";
                email.classList.add("error-border");
                isValid = false;
            } else if (!emailRegex.test(emailValue)) {
                emailError.textContent = "Enter a valid email address.";
                emailError.style.display = "block";
                email.classList.add("error-border");
                isValid = false;
            } else {
                emailError.textContent = "";
                emailError.style.display = "none";
                email.classList.remove("error-border")
            }

            if (password.value.length < 8) {
                passwordError.textContent = "Password must be at least 8 characters";
                passwordError.style.display = "block";
                password.classList.add("error-border");
                isValid = false;
            } else {
                passwordError.textContent = "";
                passwordError.style.display = "none";
                password.classList.remove("error-border");
            }

            if (!terms.checked) {
                termsError.textContent = "You must accept the terms";
                termsError.style.display = "block";
                isValid = false;
            } else {
                termsError.textContent = "";
                termsError.style.display = "none";
            }

            if (isValid) {
                alert("Registration successful");
            }
        });

        const thumbs = document.querySelectorAll(".thumb");
        const captionEl = document.querySelector("#image-caption");

        function selectTile(tile) {
            thumbs.forEach(function (thumb) {
                thumb.classList.remove("expanded");
            });

            tile.classList.add("expanded");

            const city = tile.dataset.city;
            captionEl.textContent = "this shot is from " + city;
        }

        thumbs.forEach(function (thumb) {

            thumb.addEventListener("click", function () {
                selectTile(thumb);
            });

            thumb.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    selectTile(thumb);
                }
            });

        });

    
});