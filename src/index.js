import loadPage from './loadPage.js';
import welcomePage from "./welcomePageData";
import './reset.css';
import './style.css';

const app = (() => {
                            
    const firstLoad = (() => {
        console.log("First Load...");
        const welcomePageData = welcomePage();
        loadPage(welcomePageData);
    })(); 

})();



