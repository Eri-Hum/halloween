let attempts = 0;

const invitations = {
    "a": "Välkommen, Sara!",
    "b": "Välkommen, Sebastian!",
    "c": "Välkommen, Sofia!",
    "d": "Välkommen, Edit!",
    "e": "Välkommen, Adam!",
    "f": "Välkommen, David!",
    "g": "Välkommen, Alex!",
    "s": "Välkommen, Elsa!",
    "h": "Välkommen, Egon!",
    "i": "Välkommen, Sonia!",
    "j": "Välkommen, Philip!",
    "k": "Välkommen, Silke!",
    "l": "Välkommen, Erik!",
    "m": "Välkommen, Maja!",
    "n": "Välkommen, Viktor!",
    "o": "Välkommen, Emil!",
    "p": "Välkommen, Ella!",
    "q": "Välkommen, Minou!",
    "r": "Välkommen, Lucas!"
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

// Add event listeners when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById("password");
    const button = document.querySelector("button");
    
    // Show button when user starts typing
    passwordInput.addEventListener('input', function() {
        if (this.value.length > 0) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
    
    // Handle Enter and Backspace key events
    passwordInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            checkPassword();
        } else if (event.key === 'Backspace' && this.value.length === 1) {
            // If backspace will clear the last character, hide button after a short delay
            setTimeout(() => {
                if (this.value.length === 0) {
                    button.style.display = 'none';
                }
            }, 10);
        }
    });
});

function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");
    const container = document.querySelector(".container");
    const scrollImageDiv = document.getElementById('scroll-image');

    if (invitations[passwordInput]) {
        container.style.display = "none";
        messageDiv.style.display = "block";
        document.body.style.backgroundColor = "#000000";
        document.body.style.backgroundImage = "url('images/background.png')";
        document.body.style.backgroundSize = "cover";
        messageDiv.innerHTML = `<h2>${invitations[passwordInput].split(', ')[1].replace('!', '')}, är du en trogen vän eller en listig förrädare?</h2><p>Är du redo att ljuga, manipulera och svika dina vänner?</p>`;
        scrollImageDiv.innerHTML = `<img src='images/scroll.png' alt='Skriftrulle Bild' class='wiggle' style='width:60%; height:auto; margin: 20px 0; cursor: pointer;' onclick='showMainScroll()'>`;
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
    
    // Check if we're on mobile
    const isMobile = window.innerWidth <= 768;
    const finalWidth = isMobile ? '100%' : '96%';
    
    // Immediately switch to scroll3.png with text overlay
    scrollImageDiv.innerHTML = `
        <div class="scroll-container">
            <img src='images/scroll3.png' alt='Skriftrulle Bild' style='width:${finalWidth}; height:auto; margin: 20px 0; display: block;'>
            <div class="scroll-text-overlay">
                <h3>DU ÄR INBJUDEN TILL FÖRRÄDARNA</h3>
                <p>Följ med på en helkväll av spel, mat och festande!</p>
                <p><strong>DATUM:</strong> 1 november, 2025</p>
                <p><strong>TID:</strong> 13:00 - Sent</p>
                <p><strong>PLATS:</strong> Ryssbygården</p>
                <p>Kom förberedd för en kväll av list och spänning!</p>
            </div>
        </div>
    `;
} 
