document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const phone = document.getElementById("phno").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("User Data:", { firstName, lastName, phone, dob, email, password });

    alert("Sign-up successful!");
});
