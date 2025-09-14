document.head.innerHTML += "<link id='favicon' rel='icon' type='image/png' href='/assets/nexus/img/icon.png'>";
if(window.location.hostname.toLowerCase() === "nexus.nrfy.net") {
    window.location.href = window.location.href.replace("nexus.nrfy.net", "nexus.zyneon.de");
}

if(window.location.href.includes("zyneon.de")) {
    window.location.href=window.location.href.replaceAll("zyneon.de","zyneon.net");
}

function initMenu() {
    if(document.getElementById("menu")) {
        const menu = document.getElementById("menu");
        menu.innerHTML = "";

        menu.innerHTML += "<div class='d-flex menu-title'><img alt='NEXUS logo' src='/assets/nexus/img/icon.png'><h4>Zyneon NEXUS</h4></div><div class='d-flex menu-navigation'><a href='index.html'><button type='button' class='btn'>Home</button></a><button type='button' class='btn btn-secondary shadow'>NEX Platform</button><button type='button' class='btn btn-primary shadow'>Get the NEXUS App</button></div>";
    }
}

function initSystemTheme() {
    document.getElementById("favicon").href = '/assets/nexus/img/icon-inverted.png';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("favicon").href = '/assets/nexus/img/icon.png';
    }
}

initSystemTheme();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    initSystemTheme();
});