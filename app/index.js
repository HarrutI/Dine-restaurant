const eventData = {
"Family Gathering": {
    title: "Family Gathering",
    description: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    image: "./images/homepage/family-gathering-desktop.jpg"
},
"Special Events": {
    title: "Special Events",
    description: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    image: "./images/homepage/special-events-desktop.jpg"
},
"Social Events": {
    title: "Social Events",
    description: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    image: "./images/homepage/social-events-desktop.jpg"
}
};

const section = document.querySelector("#section-4");
const rows = section.querySelectorAll(".options tr");
const title = section.querySelector(".text-post-title");
const descr = section.querySelector(".text-post-descr");
const image = section.querySelector("#sec4-left img:last-of-type");
const dividerIcons = section.querySelectorAll("td:first-child img");

rows.forEach(row => {
row.addEventListener("click", () => {
    rows.forEach(r => r.classList.remove("selected"));
    rows.forEach(r => r.classList.add("not-selected"));

    row.classList.add("selected");
    row.classList.remove("not-selected");

    const selectedText = row.querySelector("p").textContent;

    // Fade-out en todos
    title.classList.add("fade-out");
    descr.classList.add("fade-out");
    image.classList.add("fade-out");
    dividerIcons.forEach(icon => icon.classList.add("fade-out"));

    setTimeout(() => {
    // Cambiar contenido
    title.textContent = eventData[selectedText].title;
    descr.textContent = eventData[selectedText].description;
    image.src = eventData[selectedText].image;

    // Quitar fade-out
    title.classList.remove("fade-out");
    descr.classList.remove("fade-out");
    image.classList.remove("fade-out");
    dividerIcons.forEach(icon => icon.classList.remove("fade-out"));

    // Aplicar fade-in
    title.classList.add("fade-in");
    descr.classList.add("fade-in");
    image.classList.add("fade-in");
    dividerIcons.forEach(icon => icon.classList.add("fade-in-icon"));

    // Limpiar clases después del tiempo correspondiente
    setTimeout(() => {
        title.classList.remove("fade-in");
        descr.classList.remove("fade-in");
        image.classList.remove("fade-in");
        dividerIcons.forEach(icon => icon.classList.remove("fade-in-icon"));
    }, 1000); // Esperamos lo máximo (1s por los iconos)
    }, 500); // fade-out en 0.5s
});
});

window.addEventListener('DOMContentLoaded', function() {
    checkImageSize();
});

window.addEventListener('resize', function() {
    checkImageSize();
});

function checkImageSize() {
    const enyojable = this.document.getElementById('enjoyable-place-img');
    const locally = this.document.getElementById('locally-sourced-img');    
    console.log("Resizing...")
    console.log(enyojable)
    console.log(locally)

    if (window.innerWidth <= 1025 && window.innerWidth >= 768) {
        console.log("Tablet" + window.innerWidth)
        enyojable.src = "./images/homepage/enjoyable-place-tablet.jpg";
        locally.src = "./images/homepage/locally-sourced-tablet.jpg";
    } else {
        console.log("Desktop" + window.innerWidth)
        enyojable.src = "./images/homepage/enjoyable-place-desktop.jpg";
        locally.src = "./images/homepage/locally-sourced-desktop.jpg";
    }
}
