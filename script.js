let attempts = 0;

const invitations = {
    "sara123": "Välkommen, Sara!",
    "sebastian123": "Välkommen, Sebastian!",
    "sofia123": "Välkommen, Sofia!",
    "edit123": "Välkommen, Edit!",
    "adam123": "Välkommen, Adam!",
    "david123": "Välkommen, David!",
    "alex123": "Välkommen, Alex!",
    "elsa123": "Välkommen, Elsa!",
    "egon123": "Välkommen, Egon!",
    "sonia123": "Välkommen, Sonia!",
    "philip123": "Välkommen, Philip!",
    "silke123": "Välkommen, Silke!",
    "erik123": "Välkommen, Erik!",
    "maja123": "Välkommen, Maja!",
    "viktor123": "Välkommen, Viktor!",
    "emil123": "Välkommen, Emil!",
    "ella123": "Välkommen, Ella!",
    "minou123": "Välkommen, Minou!",
    "lucas123": "Välkommen, Lucas!"
};

function startCountdown() {
    const countdownDate = new Date('November 1, 2025 13:00:00 GMT+1').getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `${days} dagar, ${hours} timmar, ${minutes} minuter, ${seconds} sekunder`;
    }, 1000);
}

startCountdown();

function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");
    const container = document.querySelector(".container");
    const scrollImageDiv = document.getElementById('scroll-image');

    if (invitations[passwordInput]) {
        container.style.display = "none";
        messageDiv.style.display = "block";
        document.body.style.backgroundColor = "#000000";
        document.body.style.backgroundImage = "url('../images/background.png')";
        document.body.style.backgroundSize = "cover";
        messageDiv.innerHTML = `<h2>${passwordInput.split('123')[0]}, är du en lojal vän eller en listig förrädare?</h2><p>Är du redo att ljuga, manipulera och svika dina vänner?</p>`;
        scrollImageDiv.innerHTML = `<img src='../images/scroll.png' alt='Skriftrulle Bild' style='width:60%; height:auto; margin: 20px 0; cursor: pointer;' onclick='showMainScroll()'>`;
    } else {
        attempts++;
        messageDiv.style.display = "block";
        if (attempts >= 2) {
            messageDiv.innerHTML = "Fel lösenord. Ledtråd: Titta i brevet.";
        } else {
            messageDiv.innerHTML = "Fel lösenord. Försök igen.";
        }
    }
}

function showMainScroll() {
    const scrollImageDiv = document.getElementById('scroll-image');
    const currentImg = scrollImageDiv.querySelector('img');
    
    // Add transition animation for both width and transform
    currentImg.style.transition = 'width 0.8s ease-in-out, transform 0.8s ease-in-out';
    currentImg.style.width = '96%';
    currentImg.style.transform = 'translateY(-50px)';
    
    // Wait for animation to complete, then switch images
    setTimeout(() => {
        scrollImageDiv.innerHTML = `<img src='../images/skriftrulle.png' alt='Skriftrulle Bild' style='width:96%; height:auto; margin: 20px 0;'>`;
    }, 800);
} 