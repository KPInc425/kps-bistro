export default function loadNavBar() {
    const content = document.querySelector('#content');

    // create header section for Navbar and Logo
    const header = document.createElement('div');
    header.classList.add('header');

    //Logo 
    const logoContainer = document.createElement('div');
    logoContainer.id = "companyHeaderLogo";

    const logo = document.createElement('img');
    logo.src = "https://i.imgur.com/DyfDZhM.png";
    logo.setAttribute("alt", "KP's Bistro Logo goes here");
    logo.id = "logo";

    logoContainer.appendChild(logo);

    
    // create navBar section
    const navBar = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.id = 'navLinks';
    
    const liHomePage = document.createElement('li');
    const homePageLink = document.createElement('button');
    homePageLink.href = "#";
    homePageLink.id = 'homePageNavLink'; 
    homePageLink.textContent = 'Welcome!';

    const liMenuPage = document.createElement('li');
    const menuPageLink = document.createElement('button');

    menuPageLink.href = "#";
    menuPageLink.id = 'menuPageNavLink';
    menuPageLink.textContent = 'Menu';

    const liContactPage = document.createElement('li');
    const contactPageLink = document.createElement('button');

    contactPageLink.href = '#';
    contactPageLink.id = 'contactPageNavLink';
    contactPageLink.textContent = 'Contact Us';


    liContactPage.appendChild(contactPageLink);
    liMenuPage.appendChild(menuPageLink);
    liHomePage.appendChild(homePageLink);
    ul.appendChild(liHomePage);
    ul.appendChild(liMenuPage);
    ul.appendChild(liContactPage);
    navBar.appendChild(ul);
    header.appendChild(logoContainer);
    header.appendChild(navBar);
    content.appendChild(header);
}