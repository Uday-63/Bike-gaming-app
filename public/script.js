function startRide() {
    const bike = document.getElementById("bike");
    let position = 0;

    const move = setInterval(() => {
        if (position >= 650) {
            clearInterval(move);
        } else {
            position += 5;
            bike.style.left = position + "px";
        }
    }, 20);
}
