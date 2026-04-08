let currentBike = '🏍';
let score = 0;
let gameInterval;
let moveInterval;

/**
 * Screen Navigation
 */
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

/**
 * Garage Selection
 */
function selectBike(element, bikeEmoji) {
    const cards = document.querySelectorAll('.bike-card');
    cards.forEach(card => card.classList.remove('selected'));
    element.classList.add('selected');
    currentBike = bikeEmoji;
}

/**
 * Start Game & UI Logic
 */
function startGame() {
    showScreen('game-area');
    
    // Set selected bike
    const bikeElement = document.getElementById('bike');
    bikeElement.innerText = currentBike;
    
    // Reset Score
    score = 0;
    document.getElementById('score').innerText = score;
    
    // Score Timer
    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
        score += 5;
        document.getElementById('score').innerText = score;
    }, 100);

    // Call Movement Logic
    startRide();
}

/**
 * NEE CUSTOM MOVEMENT LOGIC (Modified for separate file)
 */
function startRide() {
    const bike = document.getElementById("bike");
    let position = 0;
    bike.style.left = "0px";

    // Dynamic Distance Calculation
    const appContainer = document.getElementById("game-app");
    const maxDistance = appContainer.offsetWidth - 120; // Screen edge minus bike width

    clearInterval(moveInterval);
    
    moveInterval = setInterval(() => {
        if (position >= maxDistance || position >= 650) {
            finishRace();
        } else {
            position += 5;
            bike.style.left = position + "px";
        }
    }, 20);
}

function finishRace() {
    clearInterval(moveInterval);
    clearInterval(gameInterval);
    
    setTimeout(() => {
        alert("🏁 RACE FINISHED!\nFinal Score: " + score);
        stopGame();
    }, 200);
}

function stopGame() {
    clearInterval(gameInterval);
    clearInterval(moveInterval);
    document.getElementById("bike").style.left = "0px";
    showScreen('main-menu');
}
