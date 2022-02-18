var i = document.getElementById('info');
// var m = $('#motivo');
var box = document.getElementById('box-text');
i.onclick = () => {
    box.style.display = "block";
    i.style.display = "none";
};
var mark = document.getElementById('mark');
mark.onclick = () => {
    box.style.display = "none";
    i.style.display = "block";
}

