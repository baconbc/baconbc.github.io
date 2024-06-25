// Function to create card from template with provided data
function createCard(title, imgURL, imgAlt, link, year, info, description) {
    const templateContent = document.getElementById('game-card-template-content').content;

    // Clone the template content
    const clone = templateContent.cloneNode(true);

    // Fill in the placeholders with provided data
    clone.querySelector('b').textContent = title;
    clone.querySelector('.card-info').textContent = year;
    clone.querySelector('p').textContent = description;
    clone.querySelector('.card-info p').textContent = info;

    // Modify the link href and the image source
    const cardLink = clone.querySelector('a');
    cardLink.href = link;
    const cardImg = clone.querySelector('.card-img');
    cardImg.src = imgURL;
    cardImg.alt = imgAlt;

    // Append the cloned card to the container
    document.getElementById('games-container').appendChild(clone);
}

// Create instances of the card with different data
createCard("CraftAway", "Assets/CraftAway.png", "CraftAway video game", "https://jalagon.itch.io/craftaway", "2024", "Unity | Programmer | UI/UX | Pixel Artist",
    "CraftAway is a 2D sandbox survival-craft game where players explore a new world and try to survive through gathering resources, crafting items and tools, building a shelter, and fighting enemies.");

createCard("UI-UY?", "Assets/UI-UY.png", "UI-UY? video game", "https://baconbc.itch.io/ui-uy", "2024", "Unity | Team Lead | Programmer | UI/UX | Pixel Artist",
    "UI-UY? is a 2D adventure game where the player can unlock important UI elements and menus over time to demonstrate the importance of having a good user interface.");

createCard("AcornQuest", "Assets/AcornQuest.png", "AcornQuest video game", "https://madjuse.itch.io/spring-scaffold-2022", "2022", "Unity | Team Lead | Programmer | UI/UX",
    "AcornQuest is a 2D platformer game where players try to complete levels through solving puzzles, collecting materials to craft items, and completing jumping challenges, all while evading enemies!");

createCard("Distant Treasures", "Assets/DistantTreasures.png", "Distant Treasures video game", "https://quetzde6th.itch.io/distant-treasures", "2022", "Unity | Programmer | UI/UX",
    "Distant Treasures is a 2D story-driven adventure game where players wake up in a mysterious room where they must interact with the environment and solve puzzles to try and escape.");

createCard("Missed Harvest", "Assets/MissedHarvest.png", "Missed Harvest video game", "https://itch.io/queue/c/2558455/my-games?game_id=2119927", "2023", "Unity | Programmer | UI/UX",
    "Missed Harvest is a 3D co-op 2-player platformer game where players play as a chicken trying to escape the farm by using items, solving puzzles, and shooting enemies with an egg gun!");