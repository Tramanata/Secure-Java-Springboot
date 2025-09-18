document.addEventListener("DOMContentLoaded", () => {
    console.log("App.js loaded!");

    const logoutBtn = document.querySelector("form input[type='submit']");
    logoutBtn.addEventListener("click", () => {
        alert("You are logging out!");
    });
});
