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
    //appetizers section
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
    //pork section
    const porkSection = document.createElement('div');
    porkSection.classList.toggle('pork');
    const pork = document.createElement('div');
    pork.classList.toggle('menu-section');
    pork.textContent = 'Pork';
    porkSection.appendChild(pork);
    const porkList = document.createElement('ol');
    const porkBroc = document.createElement('li');
    porkBroc.textContent = 'Pork w. Broccoli';
    const porkSzech = document.createElement('li');
    porkSzech.classList.toggle('spicy');
    porkSzech.textContent = 'Pork w. Szechuan Style';
    const porkVeg = document.createElement('li');
    porkVeg.textContent = 'Roast Pork w. Mixed Vegetable';
    const porkBean = document.createElement('li');
    porkBean.textContent = 'Roast Pork w. Black Bean Sauce';
    const porkGarlic = document.createElement('li');
    porkGarlic.classList.toggle('spicy');
    porkGarlic.textContent = 'Pork w. Garlic Sauce';
    const porkHunan = document.createElement('li');
    porkHunan.classList.toggle('spicy');
    porkHunan.textContent = 'Hunan Pork';
    porkList.appendChild(porkBroc);
    porkList.appendChild(porkSzech);
    porkList.appendChild(porkVeg);
    porkList.appendChild(porkBean);
    porkList.appendChild(porkGarlic);
    porkList.appendChild(porkHunan);
    porkSection.appendChild(porkList);
    food.appendChild(porkSection);
    //fried rice section
    const riceSection = document.createElement('div');
    riceSection.classList.toggle('fried-rice');
    const rice = document.createElement('div');
    rice.classList.toggle('menu-section');
    rice.textContent = 'Fried Rice';
    riceSection.appendChild(rice);
    const riceList = document.createElement('ol');
    const ricePork = document.createElement('li');
    ricePork.textContent= 'Roast Pork Fried Rice';
    const riceChicken = document.createElement('li');
    riceChicken.textContent = 'Chicken Fried Rice';
    const riceShrimp = document.createElement('li');
    riceShrimp.textContent = 'Shrimp Fried Rice';
    const riceLobster = document.createElement('li');
    riceLobster.textContent = 'Lobster Fried Rice';
    const riceVeg = document.createElement('li');
    riceVeg.textContent = 'Vegetable Fried Rice';
    const riceYoung = document.createElement('li');
    riceYoung.textContent = 'Young Chow Fried Rice';
    riceList.appendChild(ricePork);
    riceList.appendChild(riceChicken);
    riceList.appendChild(riceShrimp);
    riceList.appendChild(riceLobster);
    riceList.appendChild(riceVeg);
    riceList.appendChild(riceYoung);
    riceSection.appendChild(riceList);
    food.appendChild(riceSection);
    //Lo Mein section
    const loSection = document.createElement('div');
    loSection.classList.toggle('lo-mein');
    const lo = document.createElement('div');
    lo.classList.toggle('menu-section');
    lo.textContent = 'Lo Mein';
    loSection.appendChild(lo);
    const loList = document.createElement('ol');
    const loPork = document.createElement('li');
    loPork.textContent = 'Roast Pork Lo Mein';
    const loChicken = document.createElement('li');
    loChicken.textContent = 'Chicken Lo Mein';
    const loBeef = document.createElement('li');
    loBeef.textContent = 'Beef Lo Mein';
    const loShrimp = document.createElement('li');
    loShrimp.textContent = 'Shrimp Lo Mein';
    const loVeg = document.createElement('li');
    loVeg.textContent = 'Vegetable Lo Mein';
    const loCombo = document.createElement('li');
    loCombo.textContent = 'Combination Lo Mein';
    const loComboDes = document.createElement('div');
    loComboDes.classList.toggle('descriptive');
    loComboDes.textContent = '(Pork, Beef, Chicken, & Shrimp)';
    loCombo.appendChild(loComboDes);
    loList.appendChild(loPork);
    loList.appendChild(loChicken);
    loList.appendChild(loBeef);
    loList.appendChild(loShrimp);
    loList.appendChild(loVeg);
    loList.appendChild(loCombo);
    loSection.appendChild(loList);
    food.appendChild(loSection);
    //Chef Specials
    const chefSection = document.createElement('div');
    chefSection.classList.toggle('chef-specials');
    const chef = document.createElement('div');
    chef.classList.toggle('menu-section');
    chef.textContent = 'Chef Specials'
    chefSection.appendChild(chef);
    const chefList = document.createElement('ol');
    const chefHappy = document.createElement('li');
    chefHappy.textContent = 'Happy Family';
    const chefHappyDes = document.createElement('div');
    chefHappyDes.classList.toggle('descriptive');
    chefHappyDes.textContent = 'Assortment of seafood, meat, roast pork, chicken, lobster, shrimp & served w. Chinese mixed vegetables';
    chefHappy.appendChild(chefHappyDes);
    const chefSea = document.createElement('li');
    chefSea.textContent = 'Seafood Delight';
    const chefSeaDes = document.createElement('div');
    chefSeaDes.classList.toggle('descriptive');
    chefSeaDes.textContent = 'An incredible combination of lobster meat, jumbo shrimp, crabmeat & scallop mixed w. straw mushrooms, baby corn, & other varieties of Chinese vegetables';
    chefSea.appendChild(chefSeaDes);
    const chefChow = document.createElement('li');
    chefChow.textContent = 'Chow Sam Sin';
    const chefChowDes = document.createElement('div');
    chefChowDes.classList.toggle('descriptive');
    chefChowDes.textContent = 'Chunks of lobster, shrimp, scallop w. mixed vegetables';
    chefChow.appendChild(chefChowDes);
    
    




    console.log(food);
    /*foodMenu.appendChild(food);
    content.appendChild(foodMenu);*/
}

export {menu};