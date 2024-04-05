// Function to create gameplay display from template with provided data
function createGameplay(ID, imgURL, imgAlt, description) {
    const templateContent = document.getElementById('gameplay-template-content').content;

    // Clone the template content
    const clone = templateContent.cloneNode(true);

    // Fill in the placeholders with provided data
    clone.querySelector('p').textContent = description;

    // Modify the image source
    const cardImg = clone.querySelector('.gameplay-img');
    cardImg.src = imgURL;
    cardImg.alt = imgAlt;

    // Append the cloned card to the container
    document.getElementById(ID).appendChild(clone);
}

// UI/UX Section
createGameplay('uiux-container', "Assets/CraftingMechanic.gif", "Inventory and Crafting System", "[Describe Inventory and Crafting System mechanic]");
createGameplay('uiux-container', "Assets/Notes.gif", "Note Interface", "[Describe Note mechanic]");
createGameplay('uiux-container', "Assets/Hero'sParry.gif", "Main Menu", "[Describe Main Menu]");
createGameplay('uiux-container', "Assets/MissedHarvest.gif", "Settings Menu", "[Describe Settings Menu]");

// Gameplay Section
createGameplay('gameplay-container', "Assets/BossMechanics.gif", "Boss fighting mechanics", "This clip showcases the boss Treevil from my latest game Island Boy. I programmed the boss attacks, created the sprites, and worked on the boss summoning mechanic.");
createGameplay('gameplay-container', "Assets/Fishing.gif", "Fishing mechanic", "[Describe fishing mechanic]");
createGameplay('gameplay-container', "Assets/PlantGrowthMechanic.gif", "Plant growing mechanics", "[Describe Plant growing mechanic]");
createGameplay('gameplay-container', "Assets/MoneyGun.gif", "Money gun mechanic", "[Describe Money Gun mechanic]");