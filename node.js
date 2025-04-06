let isLoggedIn = false; 

const profileLink = document.getElementById("profileLink");
const settingsLink = document.getElementById("settingsLink");
const logoutLink = document.getElementById("logoutLink");
const loginLink = document.getElementById("loginLink");

function updateNavbar() {
    if (isLoggedIn) {
        profileLink.classList.remove("hidden");
        settingsLink.classList.remove("hidden");
        logoutLink.classList.remove("hidden");
        loginLink.classList.add("hidden");
    } else {
        profileLink.classList.add("hidden");
        settingsLink.classList.add("hidden");
        logoutLink.classList.add("hidden");
        loginLink.classList.remove("hidden");
    }
}

updateNavbar();

loginLink.addEventListener("click", function() {
    isLoggedIn = true;
    updateNavbar();
});

logoutLink.addEventListener("click", function() {
    isLoggedIn = false;
    updateNavbar();
});
