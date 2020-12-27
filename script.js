// Make section1 empty again after a new link is clicked
// so that it doesn't add up and create multiple sections
const empty = () => {
    document.querySelector('#section1').innerHTML = ``;
}


// Here we create a function to change the content of the main div
//  in accordance with the links being clicked in the leftbar
const mainDiv = (ides, img, heading, paragraph, buttonText) => {
    const ids = document.querySelector(ides);

    ids.addEventListener('click', (e)=>{
        empty();


        let section = document.querySelector('#section1');
        section.className = "main-content";



        if (section.innerHTML == "") {

            section.innerHTML = `
            <img src="${img}" alt="" />
            <h1 class="heading">${heading}</h1>
            <p class="paragraph">${paragraph}</p>  
    `
            ;

        }
    })
}

// calling the function mainDiv with it's parameters
// that'll change the content of the main div
mainDiv('#dashboard', './icons/gauge-dashboard.png', 'Add Dashboards', 'Dashboard for Intellectual App', 'Add');
mainDiv('#organizations', './icons/building-modern.png', 'Add organizations', 'The list of organizations', 'Add');
mainDiv('#locations', './icons/house.png', 'Add Locations', 'Locations are where you receive visitors', 'Add');
mainDiv('#departments', './icons/human-resources-hierarchy.png', 'Add Departments', 'This list of departments', 'Add');
mainDiv('#devices', './icons/tablet.png', 'Add Devices', 'The are our Devices', 'Add');
mainDiv('#visitors', './icons/team-exchange-chat.png','Add Visitors', 'This are your visitors', 'Add');
mainDiv('#billing', './icons/credit-card.png', 'Add Billing', 'This is where you will get your bills', 'Add');
mainDiv('#profile', './icons/single-neutral.png','Add Profile', 'This are the user profiles', 'Add');
mainDiv('#logout', './icons/logout.png', 'Logout', 'Click below to logout', 'logout');