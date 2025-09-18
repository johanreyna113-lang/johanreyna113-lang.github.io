/*------nav bar function-----*/
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/*------ADD SHADOW ON NAV BAR WHILE SCROLL-----*/

window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}



    document.getElementById('downloadButton').addEventListener('click', function() {
        const link = document.createElement('a'); // Creamos un enlace de manera programática
        link.href = 'images/CV_Ftd_Johan_Reyna.pdf'; // Ruta del archivo PDF
        link.download = 'CV_Ftd_Johan_Reyna.pdf'; // Nombre con el que se descargará el archivo
        link.click(); // Simula el clic en el enlace para descargar el archivo
    });

    document.getElementById('downloadButton2').addEventListener('click', function() {
        const link = document.createElement('a'); // Crea un enlace programáticamente
        link.href = 'images/CV_Ftd_Johan_Reyna.pdf'; // Ruta del archivo PDF
        link.download = 'CV_Ftd_Johan_Reyna.pdf'; // Nombre con el que se descargará el archivo
        link.click(); // Simula un clic en el enlace para iniciar la descarga
    });
