console.log('ABC 1');

 

function callV() {
    v = document.getElementById('UI');
    console.log(v.getAttribute("class"));
    v.setAttribute("class","IMG3");

    h1=document.getElementById('H1');
    h1.innerHTML = "whatever";
}
