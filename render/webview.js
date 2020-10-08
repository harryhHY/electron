document.querySelector('#su').onclick = () => {
    window.location("https://juejin.im/post/6844903613270081543#heading-0")
};
const webview = document.querySelector('.webview');
webview.addEventListener('did-stop-loading', () => {
    webview.insertCSS(`
        #su{
            background:red !important;
        }
    `)
})