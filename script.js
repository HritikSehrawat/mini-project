function displayHome() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = `
        <p>Choose a game and smash it in just 5 minutes!</p>
        <div class="home-images">
            <img src="Hit the number.jpg" alt="Game Image 1" class="home-image">
            <img src="https://via.placeholder.com/150" alt="Game Image 2" class="home-image">
            <img src="https://via.placeholder.com/150" alt="Game Image 3" class="home-image">
        </div>
        <div class="home-icons">
            <div class="icon">
                <h3>🔥 Fast-Paced</h3>
                <p>Quick games for instant fun!</p>
            </div>
            <div class="icon">
                <h3>🏆 Compete</h3>
                <p>Challenge your friends and climb the leaderboard!</p>
            </div>
            <div class="icon">
                <h3>🎉 Fun</h3>
                <p>Engaging games that keep you coming back for more!</p>
            </div>
        </div>
    `;
}


function displayAbout() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = `
        <h2>About 5minSmash</h2>
        <div class="about-container">
            <div class="about-card">
                <h3>🎯 Mission</h3>
                <p>Our mission is to provide fast-paced, fun, and engaging games that challenge your skills and entertain you.</p>
            </div>
            <div class="about-card">
                <h3>🚀 Vision</h3>
                <p>We envision a world where anyone can enjoy quick gaming experiences, enhancing their reflexes and problem-solving skills.</p>
            </div>
            <div class="about-card">
                <h3>💡 Values</h3>
                <p>We value creativity, community, and continuous improvement. Join us as we build a vibrant gaming community!</p>
            </div>
        </div>
    `;
}


function displayListOfGames() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = `
        <h2>List of Games</h2>
        <div class="card-container">
            ${createGameCard('Game 1', 'Flappy Bird!')}
            ${createGameCard('Game 2', 'Tic Tac Toe!')}
            ${createGameCard('Game 3', '2048!')}
            ${createGameCard('Game 4', 'Whack a Mole!')}
            ${createGameCard('Game 5', 'Sudoku!')}
            ${createGameCard('Game 6', 'Block Puzzle!')}
            ${createGameCard('Game 7', 'Snake & Ladder!')}
            ${createGameCard('Game 8', 'Simon!')}
            ${createGameCard('Game 9', 'The Snake!')}
            ${createGameCard('Game 10', 'Rock, Paper & Scissor!')}
            ${createGameCard('Game 11', 'Bubble Game!')}
            ${createGameCard('Game 12', 'Typing Test  !')}
        </div>
    `;
}

function createGameCard(title, description) {
    return `
        <div class="card">
            <h3>${title}</h3>
            <p>${description}</p>
            <button onclick="alert('Starting ${title}!')">Play Now</button>
        </div>
    `;
}

function displayListOfUsers() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '<h2>Leaderboard</h2><p>Here will be a list of users.</p>';
}

const sections = {
    home: displayHome,
    about: displayAbout,
    listOfGames: displayListOfGames,
    listOfUsers: displayListOfUsers,
};

function loadSection(sectionName) {
    if (sections[sectionName]) {
        sections[sectionName]();
    } else {
        console.error('Section not found');
    }
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionName = link.getAttribute('href').substring(1);
        loadSection(sectionName);
    });
});



// Load the home section by default
loadSection('home');
