// Function to create gameplay display from template with provided data
function createGameplay(ID, imgURL, imgAlt, title, game, link, description) {
    const templateContent = document.getElementById('gameplay-template-content').content;

    // Clone the template content
    const clone = templateContent.cloneNode(true);

    // Fill in the placeholders with provided data
    clone.querySelector('b').textContent = title;
    clone.querySelector('.d1').textContent = description;

    if (link != "")
    {
        clone.querySelector('a').textContent = game;
        clone.querySelector('a').href = link;
    }
    else
        clone.querySelector('.gameplay-subtitle').textContent += game;

    // Modify the image source
    const cardImg = clone.querySelector('.gameplay-img');
    cardImg.src = imgURL;
    cardImg.alt = imgAlt;

    // Append the cloned card to the container
    document.getElementById(ID).appendChild(clone);
}

// UI/UX Section
createGameplay('uiux-container', "Assets/CraftingMechanic.gif", "Inventory and Crafting System", "Inventory and Crafting System", "AcornQuest", "https://madjuse.itch.io/spring-scaffold-2022",
    "Whenever the player picks up an acorn, it adds an item to the inventory. In the inventory, the player can combine items to craft a new item if a valid item combination is used. The player can test out item combinations on their own, or open up the recipe book in order to see all the valid item combinations.");

createGameplay('uiux-container', "Assets/Notes.gif", "Note Interface", "Inventory and Note Interface", "Distant Treasures", "https://quetzde6th.itch.io/distant-treasures",
    "Whenever the player picks up an item or note, it gets added to the inventory. In the inventory, the player can click on interactable items, like notes. When a note is clicked on, a note reading interface appears to allow the player to read the note.");

createGameplay('uiux-container', "Assets/Hero'sParry.gif", "Main Menu", "Main Menu", "Hero's Parry", "",
    "I designed all the visuals of the main menu and made it so that the opacity changes when hovering over one of the buttons. When a button is clicked on, the colors change to indicate that it has been pressed, and this color scheme mimics the parry mechanic in the game.");

createGameplay('uiux-container', "Assets/MissedHarvest.gif", "Settings Menu", "Settings Menu", "Missed Harvest", "https://itch.io/queue/c/2558455/my-games?game_id=2119927",
    "In the settings menu, the player can view a brief tutorial, change/mute the volume of sound effects and background music, change the current background music that is playing, or quit to the main menu.");


// Gameplay Section
createGameplay('gameplay-container', "Assets/Fishing.gif", "Fishing mechanic", "Fishing System", "CraftAway", "https://jalagon.itch.io/craftaway",
    "After casting the fishing hook out, a fish will appear on the line, indicated by bubbles and a sound. The player must reel in the fishing hook within a couple seconds or else the fish will escape. If the player reeled within the timefame, the fishing minigame will begin. The player must keep the green progress bar on the fish in order to catch it. The fish on the line is randomly selected from the fish database and each fish has varying difficulty and behavior.");

createGameplay('gameplay-container', "Assets/BossMechanics.gif", "Boss fighting mechanics", "Boss Fighting Mechanics", "CraftAway", "https://jalagon.itch.io/craftaway",
    "The boss Treevil has 3 different attacks that she selects at random. The first attack is a projectile attack where Treevil fires a series of thorn projectiles at the player. The second attack is a sweeping branch attack where Treevil swings a large branch in a 180-degree radius around herself, and the player takes damage when in contact with the branch. During the last attack, Treevil spawns a bunch of root obstacles around the player which block the path and hurt the player.");

createGameplay('gameplay-container', "Assets/PlantGrowthMechanic.gif", "Plant growing mechanics", "Plant Growth System", "Farm Game", "",
    "After a seed is planted, the plant goes through several growth stages. During each stage, the plant will indicate when it needs to be watered. The player must water the plant within a certain timeframe or else the plant will wither. Once the plant is fully grown, the plant will indicate that it is ready to be harvested.");

createGameplay('gameplay-container', "Assets/MoneyGun.gif", "Money gun mechanic", "Money Gun Mechanic and Physics", "Materialism Attacks!", "",
    "Whenever the player clicks, they fire money out of their money gun. The money shoots out fast from the gun for a certain distance, then slowly descends to the ground in a wavy motion to resemble paper falling. Whenever an enemy is hit by money, their 'price tag' (health) reduces by $5. Once the price reaches $0, the enemy dies and a money explosion effect appears.");