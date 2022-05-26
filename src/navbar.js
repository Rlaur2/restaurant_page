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
};

export {navbarCreation}