function welcomePage() {
    const dataContainer = document.createElement('div');
    
    const h2 = document.createElement('h2');
    h2.textContent = `Welcome to KP's Bistro!`;
    h2.classList.add('pageHeader');

    const p = document.createElement('p');
    p.textContent = `Try our fresh restuarant grown and raised veggies and fish!
                    Our state of the ART restuarant, centered around in house 
                    fresh products that are only supplemented by locally sourced
                    fresh and organic products.`;

    dataContainer.appendChild(h2);
    dataContainer.appendChild(p);
    
    return dataContainer;                

}

export default welcomePage;