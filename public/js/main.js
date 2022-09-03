const starField = document.getElementById("star-field");
starField.innerHTML="";

const body = document.getElementsByTagName("body")[0];
// console.log(body.getAttribute('color-mode'))

function createStars() {
    if (starField.innerHTML.length === 0) {
        const count = Math.round(Math.random() * 30 + 50);
        for (let i = 0; i < count; i++) {
            const star = getStar(
                `${Math.round(Math.random() * 100)}%`,
                `${Math.round(Math.random() * 39 + 1)}em`
            );
            starField.appendChild(star);
        }
    }
}
function getStar(x, y = "2em") {
    const star = document.createElement("div");
    star.classList.add("star");

    star.style.cssText += `top:${y};left:${x}`;
    var size = Math.random() / 4;
    star.style.cssText +=
        `width:${size}em;height:${size}em;` + `box-shadow: 0 0 ${size}em #fff;`;

    return star;
}

function removeStars() {
    starField.innerHTML = "";
}

// Run Once before interval
const hour = new Date().getHours();

if (hour > 18 || hour < 7) {
    body.setAttribute("color-mode", "dark");
    createStars();
} else {
    body.setAttribute("color-mode", "light");
    removeStars();
}

setInterval(() => {
    const hour = new Date().getHours();

    if (hour > 18 || hour < 7) {
        body.setAttribute("color-mode", "dark");
        createStars();
    } else {
        body.setAttribute("color-mode", "light");
        removeStars();
    }
}, 30000);
