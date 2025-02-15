function showHobbies() {
    alert("My hobbies include Reading Books, Watching Dramas, and Playing sports!");
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
        
        if (name && email && subject && message) {
            alert("Thank you, " + name + "! Your message has been sent.");
            form.reset();
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
});
