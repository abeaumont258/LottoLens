// ==========================================
// LottoLens v1.0
// Main JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const enterButton = document.getElementById("enterButton");
    const landingPage = document.querySelector(".landing-page");
    const dashboard = document.getElementById("dashboard");

    if (enterButton && landingPage && dashboard) {

        enterButton.addEventListener("click", () => {

            landingPage.style.transition = "opacity 0.5s ease";
            landingPage.style.opacity = "0";

            setTimeout(() => {

                landingPage.style.display = "none";

                dashboard.classList.remove("hidden");
                dashboard.classList.add("show");

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }, 500);

        });

    }

    // Future loading animation
    console.log("LottoLens Engine Ready");

});