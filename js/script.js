document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const logoutBtn = document.getElementById("logoutBtn");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

          
            const validUsername = "admin";
            const validPassword = "password123";

            
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("error-message");

            if (username === validUsername && password === validPassword) {
                localStorage.setItem("isAuthenticated", "true");
                window.location.href = "home.html";
            } else {
                errorMessage.textContent = "Invalid username or password!";
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("isAuthenticated");
            window.location.href = "index.html";
        });
    }

    
    if (window.location.pathname.includes("home.html")) {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (!isAuthenticated) {
            window.location.href = "index.html";
        }
    }

    
    const contactLink = document.querySelector("a[href='#footer']");
    if (contactLink) {
        contactLink.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector("#footer").scrollIntoView({ behavior: "smooth" });
        });
    }
});
