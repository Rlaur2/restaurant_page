import { aboutPage } from "./about";
import { contact } from "./contact";
import { menu } from "./menu";

const navbarCreation = () => {
    const content = document.querySelector('#content');
    const nav = document.createElement('nav');
    const aboutButton = document.createElement('div');
    const menuButton = document.createElement('div');
    const contactButton = document.createElement('div');
    aboutButton.textContent = 'About';
    aboutButton.classList.toggle('about');
    menuButton.textContent = 'Menu';
    menuButton.classList.toggle('menu');
    contactButton.textContent = 'Contact';
    contactButton.classList.toggle('contact');
    nav.appendChild(aboutButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
    content.appendChild(nav);
    const tabSwitch = (e) => {
        //the class list checks don't work because the page replaces
        //it entirely so it's always "reset", try setting an
        //internal variable and using that instead
        let currentlyActive = '';
        if (currentlyActive === e.target.className) {
            return;
        } else if (e.target.className.includes('about'))  {
            content.replaceChildren();
            navbarCreation();
            aboutPage();
        } else if (e.target.className.includes('menu'))  {
            content.replaceChildren();
            navbarCreation();
            menu();
        } else if (e.target.className.includes('contact')) {
            content.replaceChildren();
            navbarCreation();
            contact(); 
        };
        currentlyActive = e.target.className;
    };
    aboutButton.addEventListener('click', tabSwitch);
    menuButton.addEventListener('click', tabSwitch);
    contactButton.addEventListener('click', tabSwitch);
};

export {navbarCreation}