const footer=`
    <p style="margin-block-end: 5px; margin-block-start: 10px;">Contact me!</p>

    <a target="_blank" href="mailto:baconbcr@yahoo.com" class="icon">
        <i class="fa-solid fa-envelope"></i>
    </a>
    <a target="_blank" href="https://github.com/baconbc" class="icon">
        <i class="fa-brands fa-github"></i>
    </a>
    <a target="_blank" href="https://baconbc.itch.io/" class="icon">
        <i class="fa-brands fa-itch-io"></i>
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/brooke-cravotta-5120522ab/" class="icon">
        <i class="fa-brands fa-linkedin"></i>
    </a>
`;

window.addEventListener('DOMContentLoaded', () => {
    let barfooter = document.querySelector('footer[id="footer"]');
    barfooter.innerHTML = footer;
});