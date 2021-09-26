function menuPage() {
    const menuArray = [
        {
        name: "BeFast Scramble", 
        descripton: "Delicious Description!",
        price: "$9.00",
        },
        {
        name: "BeFast Scramble1", 
        descripton: "Delicious Description!",
        price: "$9.00",
        },
        {
        name: "BeFast Scramble2", 
        descripton: "Delicious Description!",
        price: "$9.00",
        },
        {
        name: "BeFast Scramble3", 
        descripton: "Delicious Description!",
        price: "$9.00",
        },
        {
        name: "BeFast Scramble", 
        descripton: "Delicious Description!",
        price: "$9.00",
        },
        {
        name: "BeFast Scramble1", 
        descripton: "Delicious Description!",
        price: "$9.00",
        },
        {
        name: "BeFast Scramble2", 
        descripton: "Delicious Description!",
        price: "$9.00",
        },
        {
        name: "BeFast Scramble3", 
        descripton: "Delicious Description!",
        price: "$9.00",
        },
        {
        name: "BeFast Scramble", 
        descripton: "Delicious Description!",
        price: "$9.00",
        },
        {
        name: "BeFast Scramble1", 
        descripton: "Delicious Description!",
        price: "$9.00",
        },
        {
        name: "BeFast Scramble2", 
        descripton: "Delicious Description!",
        price: "$9.00",
        },
        {
        name: "BeFast Scramble3", 
        descripton: "Delicious Description!",
        price: "$9.00",
        },
        {
        name: "BeFast Scramble", 
        descripton: "Delicious Description!",
        price: "$9.00",
        },
        {
        name: "BeFast Scramble1", 
        descripton: "Delicious Description!",
        price: "$9.00",
        },
        {
        name: "BeFast Scramble2", 
        descripton: "Delicious Description!",
        price: "$9.00",
        },
        {
        name: "BeFast Scramble3", 
        descripton: "Delicious Description!",
        price: "$9.00",
        },
    ];

    const dataContainer = document.createElement('div');
    // TESTING
    // dataContainer.style.border = "2px solid red";

    const menuItemFlexContainer = document.createElement('div');
    menuItemFlexContainer.id = "menuItemFlexContainer";
    // TESTING
    // menuItemFlexContainer.style.display = "flex";
    // menuItemFlexContainer.style.border = "5px solid yellow";

    const h2 = document.createElement('h2');
    h2.textContent = "MENU";
    h2.classList.add('pageHeader');
               
    dataContainer.appendChild(h2);
    
    menuArray.forEach((item) => {
        let pContainer = document.createElement('div');
        pContainer.id = "menuItemContainer";

        let pName = document.createElement('p');
        pName.textContent = item.name;

        let pDescripton = document.createElement('p');
        pDescripton.textContent = item.descripton;

        let pPrice = document.createElement('p');
        pPrice.textContent = item.price;

        pContainer.appendChild(pName);
        pContainer.appendChild(pDescripton);
        pContainer.appendChild(pPrice);

        menuItemFlexContainer.appendChild(pContainer);
    });

    dataContainer.appendChild(menuItemFlexContainer);

    return dataContainer; 
}

export default menuPage;