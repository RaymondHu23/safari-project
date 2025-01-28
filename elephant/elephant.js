function openNav() {
    document.getElementById("myNav").style.height = "100%";
}


function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}


ScrollReveal().reveal("header",{ easing: 'ease-in' });
ScrollReveal().reveal("#main-image-title", {delay: 500});
ScrollReveal().reveal("#info-left", {delay: 1000});
ScrollReveal().reveal("#info-right", {delay: 1500});