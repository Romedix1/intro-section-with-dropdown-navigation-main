//opening nav menu

const closedNavMenu = document.querySelector("#closed-menu");
const mobileAside = document.querySelector("#mobile-aside")
const features = document.querySelector("#features-mobile-menu")
const company = document.querySelector("#company-mobile-menu")
const featuresDropdown = document.querySelectorAll(".features-dropdown-mobile")
const companyDropdown = document.querySelectorAll(".company-dropdown-mobile")
let featuresMenustatus = "closed";
let companyMenustatus = "closed";
const coreFeaturesDropdown = document.querySelector("#core-features-dropdown-mobile")
const featuresArrow = document.querySelector("#features-arrow")
const companyArrow = document.querySelector("#company-arrow")
const closeMenuIcon = document.querySelector("#close-menu-icon")

closedNavMenu.addEventListener('click',()=>{
    mobileAside.style.display = "block"
})

//features nav

features.addEventListener('click',()=>{
    
    if(featuresMenustatus=="closed")
    {
        featuresMenustatus="opened"
        featuresArrow.style.rotate="180deg"
        for(element of featuresDropdown)
        {
        element.style.display = "flex"
        }
    }
    else if(featuresMenustatus=="opened")
    {
        featuresMenustatus="closed"
        featuresArrow.style.rotate="0deg"
        for(element of featuresDropdown)
    {
        element.style.display = "none"
    }
    }
})

// company nav

company.addEventListener('click',()=>{
    
    if(companyMenustatus=="closed")
    {
        companyMenustatus="opened"
        companyArrow.style.rotate="180deg"
        for(element of companyDropdown)
        {
        element.style.display = "flex"
        }
    }
    else if(companyMenustatus=="opened")
    {
        companyMenustatus="closed"
        companyArrow.style.rotate="0deg"

        for(element of companyDropdown)
    {
        element.style.display = "none"
    }
    }
})

// close menu

closeMenuIcon.addEventListener('click',()=>{
    mobileAside.style.display = "none"
})


// desktop nav

const navListFeaturesDesktop = document.querySelector("#nav-list-features-desktop")
const coreFeaturesDropdownDesktop = document.querySelector("#core-features-dropdown-desktop")
let featuresMenustatusDesktop = "closed";
let companyMenustatusDesktop = "closed";
const featuresArrowDesktop = document.querySelector(".features-arrow-desktop")

const navListCompanyDesktop = document.querySelector("#nav-list-company-desktop")
const coreCompanyDropdownDesktop = document.querySelector("#core-company-dropdown-desktop")
const CompanyArrowDesktop = document.querySelector(".company-arrow-desktop")
// open nav onclick


navListFeaturesDesktop.addEventListener('click',()=>{
    if(featuresMenustatusDesktop=="closed")
    {
        featuresMenustatusDesktop="opened"
        featuresArrowDesktop.style.rotate="180deg"
        coreFeaturesDropdownDesktop.style.display = "block"
    }
    else if(featuresMenustatusDesktop=="opened")
    {
        featuresMenustatusDesktop="closed"
        featuresArrowDesktop.style.rotate="0deg"
        coreFeaturesDropdownDesktop.style.display = "none"
    }
})

// company desktop onclick

navListCompanyDesktop.addEventListener('click',()=>{
    
    if(companyMenustatusDesktop=="closed")
    {
        companyMenustatusDesktop="opened"
        CompanyArrowDesktop.style.rotate="180deg"
        coreCompanyDropdownDesktop.style.display = "block"
    }
    else if(companyMenustatusDesktop=="opened")
    {
        companyMenustatusDesktop="closed"
        CompanyArrowDesktop.style.rotate="0deg"
        coreCompanyDropdownDesktop.style.display = "none"
    }
})