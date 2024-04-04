// Function to create gameplay display from template with provided data
function createGameplay(ID, imgURL, imgAlt, description, bgcolor) {
    const templateContent = document.getElementById('new-template-content').content;

    // Clone the template content
    const clone = templateContent.cloneNode(true);

    // Fill in the placeholders with provided data
    clone.querySelector('p').textContent = description;

    // Modify the image source
    const cardImg = clone.querySelector('.gameplay-img');
    cardImg.src = imgURL;
    cardImg.alt = imgAlt;

    // change the background color of the half w the image so that background is similar color to image if resized
    const imgBG = clone.querySelector('.img-bg');
    imgBG.style.backgroundColor = bgcolor;

    // Append the cloned card to the container
    document.getElementById(ID).appendChild(clone);
}

// UI/UX Section
createGameplay('uiux-container', "Assets/CraftingMechanic.gif", "Inventory and Crafting System", "[Describe Inventory and Crafting System mechanic]", "navy");
createGameplay('uiux-container', "Assets/Notes.gif", "Note Interface", "[Describe Note mechanic]", "peru");
createGameplay('uiux-container', "Assets/Hero'sParry.gif", "Main Menu", "[Describe Main Menu]", "gray");
createGameplay('uiux-container', "Assets/MissedHarvest.gif", "Settings Menu", "[Describe Settings Menu]", "indianred");

// Gameplay Section
createGameplay('gameplay-container', "Assets/BossMechanics.gif", "Boss fighting mechanics", "This clip showcases the boss Treevil from my latest game Island Boy. I programmed the boss attacks, created the sprites, and worked on the boss summoning mechanic.", "green");
createGameplay('gameplay-container', "Assets/Fishing.gif", "Fishing mechanic", "[Describe fishing mechanic]", "teal");
createGameplay('gameplay-container', "Assets/PlantGrowthMechanic.gif", "Plant growing mechanics", "[Describe Plant growing mechanic]", "green");
createGameplay('gameplay-container', "Assets/MoneyGun.gif", "Money gun mechanic", "[Describe Money Gun mechanic]", "navy");