document.addEventListener("DOMContentLoaded", function () {
    const fullText = "Personal Sensing, for Mental Health and Wellbeing";
    let index = 0;
    let isDeleting = false;

    const typewriter = document.getElementById("typewriter");
    const backToTop = document.getElementById("backToTop");

    function typeEffect() {
        if (!typewriter) return;

        let speed = isDeleting ? 35 : 70;

        typewriter.textContent = fullText.substring(0, index);

        if (!isDeleting && index < fullText.length) {
            index++;

            if (fullText.charAt(index - 1) === ",") {
                speed = 900;
            }
        } else if (isDeleting && index > 0) {
            index--;
        } else {
            if (!isDeleting) {
                isDeleting = true;
                speed = 1500;
            } else {
                isDeleting = false;
                speed = 400;
            }
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();

    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});