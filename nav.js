const nav=`
    <ul>
        <li><a href="index.html" id="about">About Me</a></li>
        <li><a href="skills.html" id="skills">Skills</a></li>
        <li><a href="exp.html" id="exp">Experience</a></li>
    </ul>
`;

window.addEventListener('DOMContentLoaded', () => {
    let barnav = document.querySelector('nav[id="navigation"]');
    barnav.innerHTML = nav;
});