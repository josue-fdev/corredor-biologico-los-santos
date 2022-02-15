var o = document.getElementById('org');
// var m = $('#motivo');
var org = document.getElementById('info-org');
o.onclick = () => {
    org.style.display = "block";
    nacimiento.style.display = "none";
    territorio.style.display = "none";
    motivo.style.display = "none";
};

