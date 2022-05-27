const contact = () => {
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    container.classList.toggle('container');
    const contactContainer = document.createElement('div');
    contactContainer.classList.toggle('name');
    const contactUs = document.createElement('h1');
    contactUs.textContent = 'Contact Us';
    contactContainer.appendChild(contactUs);
    const phoneContainer = document.createElement('div');
    phoneContainer.classList.toggle('name');
    phoneContainer.innerHTML = '<h3>By Phone</h3>555-555-2345';
    const emailContainer = document.createElement('div');
    emailContainer.classList.toggle('name');
    emailContainer.innerHTML = '<h3>By Email</h3>dragonstorm@notreal.com'
    const thanksContainer = document.createElement('div');
    thanksContainer.classList.toggle('name');
    const thanks = document.createElement('h3');
    thanks.textContent = 'Thank You!';
    thanksContainer.appendChild(thanks);
    container.appendChild(contactContainer);
    container.appendChild(phoneContainer);
    container.appendChild(emailContainer);
    container.appendChild(thanksContainer);
    content.appendChild(container);
}

export {contact};