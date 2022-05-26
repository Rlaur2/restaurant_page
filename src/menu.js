const menu = () => {
    const content = document.querySelector('#content');
    const foodMenu = document.createElement('div');
    foodMenu.classList.toggle('container');
    foodMenu.classList.toggle('food-menu');
    const name = document.createElement('div');
    name.classList.toggle('name');
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';
    name.appendChild(menuTitle);
    foodMenu.appendChild(name);
    const topImages = document.createElement('div');
    topImages.classList.toggle('top-images');
    const bottomImages = document.createElement('div');
    bottomImages.classList.toggle('bottom-images');
    for (let i = 1; i < 7; i++) {
        //had to use "let" in the initializer of this loop or else
        //I'd get a reference error
        let img = document.createElement('div');
            img.classList.toggle(`img${i}`);
        if (i < 4) {
            topImages.appendChild(img);
        } else {
            bottomImages.appendChild(img);
        }
    }
    foodMenu.appendChild(topImages);
    const food = document.createElement('div');
    food.classList.toggle('food');
    const appetiziersSection = document.createElement('div');
    appetiziersSection.classList.toggle('appetizers');
    const appetizers = document.createElement('div');
    appetizers.classList.toggle('menu-section');
    appetizers.textContent = 'Appetizers'
    const appOrderedList = document.createElement('ol');
    const egg = document.createElement('li');
    egg.textContent = 'Egg Roll';
    const wonton = document.createElement('li');
    wonton.textContent = 'Fried Cheese Wonton';
    const bbq = document.createElement('li');
    bbq.textContent = 'B.B.Q Spare Ribs';
    const shrimpToast = document.createElement('li');
    shrimpToast.textContent = 'Shrimp Toast';
    const puPu = document.createElement('li');
    puPu.textContent = 'Pu Pu Platter';
    const donuts = document.createElement('li');
    donuts.textContent = 'Fried Donuts(8)';
    appOrderedList.appendChild(egg);
    appOrderedList.appendChild(wonton);
    appOrderedList.appendChild(bbq);
    appOrderedList.appendChild(shrimpToast);
    appOrderedList.appendChild(puPu);
    appOrderedList.appendChild(donuts);
    appetiziersSection.appendChild(appetizers);
    appetiziersSection.appendChild(appOrderedList);
    food.appendChild(appetiziersSection);
    /*foodMenu.appendChild(food);
    content.appendChild(foodMenu);*/
}

export {menu};