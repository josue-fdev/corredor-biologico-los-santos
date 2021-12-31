var m = document.getElementById('mision');
var o = document.getElementById('org');
var n = document.getElementById('nacimiento');
var t = document.getElementById('territorio');
// var m = document.getElementById('motivo');
var m = $('#motivo');

var mision = document.getElementById('info-mision');
var org = document.getElementById('info-org');
var nacimiento = document.getElementById('info-nacimiento');
var territorio = document.getElementById('info-territorio');
var motivo = document.getElementById('info-motivo');

m.onclick = () => {
    mision.style.display = "block";
    org.style.display = "none";
    nacimiento.style.display = "none";
    territorio.style.display = "none";
    motivo.style.display = "none";
};
o.onclick = () => {
    org.css('display', 'block');
    nacimiento.style.display = "none";
    territorio.style.display = "none";
    motivo.style.display = "none";
};
n.onclick = () => {
    org.style.display = "none";
    nacimiento.style.display = "block";
    territorio.style.display = "none";
    motivo.style.display = "none";
};
t.onclick = () => {
    org.style.display = "none";
    nacimiento.style.display = "none";
    territorio.style.display = "block";
    motivo.style.display = "none";
};
m.onclick = () => {
    org.style.display = "none";
    nacimiento.style.display = "none";
    territorio.style.display = "none";
    motivo.style.display = "block";
};

