import loadPage from './loadPage.js';
import welcomePage from "./welcomePageData.js";
import menuPage from './menuPageData.js';
import contactPage from './contactPageData.js';

function addClick() {
    const btnWelcome = document.querySelector('#homePageNavLink');
    btnWelcome.addEventListener('click', () => {
        console.log("Click!");
        const welcomePageData = welcomePage();
        loadPage(welcomePageData);
    })

    const btnMenu = document.querySelector('#menuPageNavLink');
    btnMenu.addEventListener('click', () => {
        console.log("Click!");
        const menuPageData = menuPage();
        loadPage(menuPageData);
    })

    const btnContactUs = document.querySelector('#contactPageNavLink');
    btnContactUs.addEventListener('click', () => {
        console.log("Click!");
        const contactPageMenu = contactPage();
        loadPage(contactPageMenu);
    })
}

export default addClick;