const lomdeiAdvBtn = document.querySelector("#lomdeiAdvBtn");
const lomdeiAdvTxt = document.querySelector("#lomdeiAdvTxt");
const lomdeiAdvTxtAnchor = document.querySelector("#lomdeiAdvTxtAnchor")
const lomdeiAdvHideBtn = document.querySelector("#lomdeiAdvHideBtn");
const lomdeiAdvAnchor = document.querySelector("#lomdeiAdvAnchor");

lomdeiAdvBtn.addEventListener("click",()=>{
    lomdeiAdvTxt.classList.remove("hiddenTxt");
    lomdeiAdvTxtAnchor.scrollIntoView();
})

lomdeiAdvHideBtn.addEventListener("click",()=>{
    lomdeiAdvTxt.classList.add("hiddenTxt");
    lomdeiAdvAnchor.scrollIntoView();
})


const perLearnBtn = document.querySelector("#perLearnBtn");
const perLearnTxtAnchor = document.querySelector("#perLearnTxtAnchor");
const perLearnHideBtn = document.querySelectorAll(".perLearnHideBtn");
const bplInfoAnchor = document.querySelector("#bplInfoAnchor");

perLearnBtn.addEventListener("click",()=>{
    perLearnTxt.classList.remove("hiddenTxt");
    perLearnTxtAnchor.scrollIntoView();
})
perLearnHideBtn.forEach(element => {
    element.addEventListener("click",()=>{
        perLearnTxt.classList.add("hiddenTxt");
        bplInfoAnchor.scrollIntoView()
    })
});

const blendLearnBtn = document.querySelector("#blendLearnBtn");
const blendLearnTxt = document.querySelector("#blendLearnTxt")
const blendLearnAnchor = document.querySelector("#blendLearnTxtAnchor");
const blendLearnHideBtn = document.querySelector("#blendLearnHideBtn");
const blendLearnInfoAnchor = document.querySelector("#blendLearnInfoAnchor")

blendLearnBtn.addEventListener("click",()=>{
    blendLearnTxt.classList.remove("hiddenTxt");
    blendLearnAnchor.scrollIntoView();
})

blendLearnHideBtn.addEventListener("click",()=>{
    blendLearnTxt.classList.add("hiddenTxt");
    blendLearnInfoAnchor.scrollIntoView()
})

const resourcesBtn = document.querySelector("#resourcesBtn");
const resourcesTxt = document.querySelector("#resourcesTxt");
const resourcesHideBtn = document.querySelector('#resourcesHideBtn');
const resourcesTxtAnchor = document.querySelector("#resourcesTxtAnchor");
const resourcesAnchor = document.querySelector('#resourcesAnchor');

resourcesBtn.addEventListener("click", ()=>{
    resourcesTxt.classList.remove("hiddenTxt");
    resourcesTxtAnchor.scrollIntoView();
})

resourcesHideBtn.addEventListener('click', ()=>{
    resourcesTxt.classList.add("hiddenTxt");
    resourcesAnchor.scrollIntoView();
})