//Go to about:blank and run the bookmarklet. When it runs it will ask for HTML then insert the HTML into the page.
var inner = prompt("HTML");
const WebPage = document.createElement('div');
WebPage.innerHTML = inner;
document.body.appendChild("inner");
