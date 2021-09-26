import loadNavBar from "./navBar";
import addClick from './addEventListeners.js';



function loadPage(input) {
    const content = document.querySelector('#content');

    content.innerHTML = "";

    loadNavBar();

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');

    const restuarantDataContainer = document.createElement('div');
    restuarantDataContainer.classList.add('dataContainer');

    const pageData = input;

    const footer = document.createElement('footer');
    const copyRight = document.createElement('p');
    copyRight.textContent = "Copyright © 2021 KPInc425. All Rights Reserved.";
    
    restuarantDataContainer.appendChild(pageData);
    mainContainer.appendChild(restuarantDataContainer);
    footer.appendChild(copyRight);
    mainContainer.appendChild(footer);
    content.appendChild(mainContainer);
    

    addClick();
}

export default loadPage;
