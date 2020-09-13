const {shell} = require('electron');
const aHref = document.querySelector('#aHref');
aHref.onclick = function(e){
    e.preventDefault();
    let href = this.getAttribute('href');
    shell.openExternal(href)
}
const myweb = document.querySelector('#myweb');
myweb.onclick = function(e){
    window.open('./chidpage.html')
}
window.addEventListener('message',(msg)=>{
    let {data} = msg
    let fatview = document.querySelector('#fatview');
    // fatview.innerHTML = JSON.stringify(data)
    fatview.innerHTML = data
})