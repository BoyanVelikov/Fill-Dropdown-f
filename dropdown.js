function addItem() {
    let text = document.getElementsByTagName("input")[0].value;
    let value1 = document.getElementsByTagName("input")[1].value;
    var opt = document.createElement("option");
    opt.textContent = text;
    opt.value = value1;
    a = document.getElementById("menu");
    a.appendChild(opt);
    document.getElementsByTagName("input")[0].value = '';
    document.getElementsByTagName("input")[1].value = '';
}