// Function to create gameplay display from template with provided data
function createSkill(ID, imgURL, name) {
    const templateContent = document.getElementById('skill-template-content').content;

    // Clone the template content
    const clone = templateContent.cloneNode(true);

    // Fill in the placeholders with provided data
    clone.querySelector('p').textContent = name;

    // Modify the image source
    const img = clone.querySelector('img');
    img.src = imgURL;

    // Append the cloned card to the container
    document.getElementById(ID).appendChild(clone);
}

// Engines
createSkill("skills-engines", "Logos/Unity.png", "Unity");
createSkill("skills-engines", "Logos/Godot.png", "Godot");

// Languages
createSkill("skills-languages", "Logos/Csharp.png", "C#");
createSkill("skills-languages", "Logos/C++.png", "C++");
createSkill("skills-languages", "Logos/Python.png", "Python");
createSkill("skills-languages", "Logos/Java.png", "Java");
createSkill("skills-languages", "Logos/JavaScript.png", "JavaScript");
createSkill("skills-languages", "Logos/HTML.png", "HTML");
createSkill("skills-languages", "Logos/CSS.png", "CSS");
createSkill("skills-languages", "Logos/Angular.png", "Angular");

// Software
createSkill("skills-software", "Logos/Git.png", "Git");
createSkill("skills-software", "Logos/Aseprite.png", "Aseprite");
createSkill("skills-software", "Logos/Blender.png", "Blender");
createSkill("skills-software", "Logos/Figma.png", "Figma");
createSkill("skills-software", "Logos/Adobe.png", "Adobe");
createSkill("skills-software", "Logos/Office.png", "Office 365");