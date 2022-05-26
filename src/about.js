const aboutPage = () => {
        const content = document.querySelector('#content');
        const container = document.createElement('div');
        container.classList.toggle('container');
        const restaurantNameContainer = document.createElement('div');
        restaurantNameContainer.classList.toggle('name');
        const restaurantNameProper = document.createElement('h1');
        const restaurantType = document.createElement('h3');
        const advert = document.createElement('div');
        advert.classList.toggle('advert');
        restaurantNameProper.textContent = 'Dragon Storm';
        restaurantType.textContent = 'Chinese Restaurant';
        restaurantNameContainer.appendChild(restaurantNameProper);
        restaurantNameContainer.appendChild(restaurantType);
        advert.textContent = 'Dragon Storm Chinese Restaurant offers authentic and delicious tasting Chinese and Asian cuisine in Plains, PA. Dragon Storm\'s convenient location and affordable prices make our restaurant a natural choice for eat-in or take-out meals in the Plains community. Our restaurant is known for its variety in taste and high quality fresh ingredients. Come and experience our friendly atmosphere and excellent service. We Deliver! No Registration Required. Order Online! Start ordering online by clicking the button above and viewing our menu. It\'s that easy!'
        container.appendChild(restaurantNameContainer);
        container.appendChild(advert);
        content.appendChild(container);
};

export {aboutPage};