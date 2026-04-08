/* General Styling */
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Arial', sans-serif; }

body { 
    background-color: #111; 
    color: white; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100vh; 
    overflow: hidden; 
}

#game-app {
    width: 100%;
    max-width: 800px;
    height: 450px;
    background: linear-gradient(135deg, #1f1c2c, #928dab);
    position: relative;
    border-radius: 15px;
    box-shadow: 0 0 30px rgba(0,0,0,0.9);
    overflow: hidden;
}

/* Screens Management */
.screen {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.85);
}
.active { display: flex; }

/* UI Elements */
h1 { font-size: 3rem; text-shadow: 0 0 15px #ff0055; margin-bottom: 25px; text-transform: uppercase; text-align: center; color: white; }
h2 { font-size: 2rem; margin-bottom: 20px; color: #00ffcc; }

.btn {
    background: linear-gradient(90deg, #ff0055, #ff5500);
    color: white;
    border: none;
    padding: 15px 40px;
    margin: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(255, 0, 85, 0.4);
}

.btn:hover { transform: scale(1.05); background: linear-gradient(90deg, #ff5500, #ff0055); }

.back-btn { 
    background: #444; 
    padding: 10px 20px; 
    font-size: 0.9rem; 
    position: absolute; 
    top: 15px; left: 15px; 
    box-shadow: none;
}

/* Garage Selection */
.bike-list { display: flex; gap: 20px; }
.bike-card {
    background: #222; border: 3px solid #444; border-radius: 15px;
    padding: 20px; text-align: center; cursor: pointer; transition: 0.3s; width: 130px;
}
.bike-card.selected { border-color: #00ffcc; background: #333; transform: scale(1.1); }
.bike-emoji { font-size: 4rem; display: block; margin-top: 10px; }

/* Settings */
.setting-item { 
    display: flex; justify-content: space-between; align-items: center;
    width: 350px; margin: 12px 0; background: #222; padding: 15px; border-radius: 10px; 
}
.select-box { padding: 5px; background:#444; color:white; border:none; border-radius:5px; }

/* Gameplay Area */
#game-area { background: #333; border-bottom: 8px solid #555; }
.road-lines { 
    width: 100%; height: 10px; 
    background: repeating-linear-gradient(90deg, transparent, transparent 40px, white 40px, white 80px); 
    position: absolute; top: 60%; 
    animation: moveRoad 0.6s linear infinite; 
}

#bike { font-size: 5.5rem; position: absolute; left: 0px; top: 40%; z-index: 10; }

.game-ui { position: absolute; top: 20px; right: 30px; font-size: 1.8rem; color: yellow; font-weight: bold; text-shadow: 2px 2px black; }

@keyframes moveRoad {
    from { background-position: 0 0; }
    to { background-position: -80px 0; }
}
