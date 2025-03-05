function startBirthday(isBirthday) {
    // Hide the question and buttons
    document.getElementById("question").style.display = "none";
    document.querySelector(".options").style.display = "none";

    // Show the birthday section (flower burst animation and message)
    const birthdaySection = document.getElementById("birthdaySection");
    birthdaySection.style.display = "block";

    // If it's not the birthday, show a message and stop the animations
    if (!isBirthday) {
        document.getElementById("result").textContent = "Roja romjane tore kicui bollamna, Note delete kor iftarer age 🙂";
        document.getElementById("result").style.color = "#ff4500";
        return;
    }

    // Trigger the flower burst effect
    const flowerBurst = document.getElementById("flowerBurst");
    flowerBurst.style.animation = "flowerBurst 2s ease-out forwards";

    // Show particle effects (floating confetti)
    const particles = document.querySelector(".particles");
    particles.style.display = "block";
    generateParticles(particles);

    // Show the "Happy Birthday" text after the flower burst
    setTimeout(function() {
        document.getElementById("result").textContent = "Happy Birthday 🎂 Samne ektu story komai dis 🙂";
        document.getElementById("result").style.opacity = 1;
    }, 2500);
}

function generateParticles(container) {
    // Generate 30 particles for a confetti-like effect
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement("span");
        const size = Math.random() * 10 + 5; // Random size between 5px and 15px
        const positionX = Math.random() * 100 + "%"; // Random horizontal position
        const positionY = Math.random() * 100 + "%"; // Random vertical position
        const animationDelay = Math.random() * 2 + "s"; // Random delay

        particle.style.width = size + "px";
        particle.style.height = size + "px";
        particle.style.top = positionY;
        particle.style.left = positionX;
        particle.style.animationDelay = animationDelay;

        container.appendChild(particle);
    }
}
