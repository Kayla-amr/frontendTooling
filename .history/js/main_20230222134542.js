import '../css/s'

//Creating elements
const myApp = document.createElement('div');
const title = document.createElement('h1');
const info = document.createElement('p');

//Inputting info inside elements
title.innerText = 'Frontend Tooling Example';
info.innerText = 'This app is created to show how the Vite tool works. Enjoy!'

//Adding info into the div 
myApp.appendChild(title);
myApp.appendChild(info);

//Adding div to html
document.body.appendChild(myApp);
