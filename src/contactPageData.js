function contactPage() {
    const dataContainer = document.createElement('div');
    dataContainer.id = "contactPage";

    const h2 = document.createElement('h2');
    h2.textContent = 'Contact Us';
    h2.classList.add('pageHeader');

    //Phone # Data
    const pNumberLabel = document.createElement('h3');
    pNumberLabel.textContent = `PHONE NUMBER`;
    pNumberLabel.style.margin = "10px";
    pNumberLabel.style.padding = "10px";
    const pNumber = document.createElement('p');
    pNumber.textContent = `425-555-4489`;

    //Hours
    const hoursOpenContainer = document.createElement('div');
    hoursOpenContainer.id = "hoursOpenContainer";
    const hoursOpen = [
        {
            day: "Monday",
            hours: "7AM - 3PM",
        },
        {
            day: "Tuesday",
            hours: "7AM - 3PM",
        },
        {
            day: "Wednesday",
            hours: "7AM - 3PM",
        },
        {
            day: "Thursday",
            hours: "7AM - 3PM",
        },
        {
            day: "Friday",
            hours: "7AM - 3PM",
        },
        {
            day: "Saturday",
            hours: "7AM - 3PM",
        },
        {
            day: "Sunday",
            hours: "Closed",
        },
    ]
    const pHoursLabel = document.createElement('h3');
    pHoursLabel.textContent = 'HOURS';

    hoursOpen.forEach((item) => {
        let hoursDataContainer = document.createElement('div');
        hoursDataContainer.id = "hoursDataContainer";

        let pDay = document.createElement('div');
        pDay.textContent = item.day;

        let pHours = document.createElement('div');
        pHours.textContent = item.hours;

        hoursDataContainer.appendChild(pDay);
        hoursDataContainer.appendChild(pHours);

        hoursOpenContainer.appendChild(hoursDataContainer);
    })
    

    //Location embed
    const pLocationLabel = document.createElement('h3');
    pLocationLabel.textContent = "Location";
    const embedMap = document.createElement('iframe');
    embedMap.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d667.9051715863404!2d-122.20908560430681!3d47.963058596444455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x83f3df5f0d41aa7b!2sAFK%20Tavern!5e0!3m2!1sen!2sus!4v1632626283669!5m2!1sen!2sus";
    embedMap.style.width = "400px";
    embedMap.style.height = "300px";
    embedMap.style.border = "0";
    embedMap.setAttribute("allowfullscreen", "");
    embedMap.setAttribute("loading", "lazy");

    dataContainer.appendChild(h2);
    dataContainer.appendChild(pNumberLabel);
    dataContainer.appendChild(pNumber);
    dataContainer.appendChild(pHoursLabel);
    dataContainer.appendChild(hoursOpenContainer);
    dataContainer.appendChild(pLocationLabel);
    dataContainer.appendChild(embedMap);

    return dataContainer; 
}

export default contactPage;