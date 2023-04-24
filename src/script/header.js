var logo = document.createElement('a');

logo.classList.add('logo');

logo.id = 'logo';
logo.href = 'https://capricious.netlify.app/';
logo.innerHTML = '<i class="fa-brands fa-pagelines" /> <h2>CAPRICIOUS</h2>';

var menu = document.createElement('div');
menu.classList.add('menu')

menu.innerHTML = '<i class="fa-solid fa-bars" /> <nav class="header-nav" ><a href="https://capricious.netlify.app/src/html/plants/plants.html">PLANTS</a>' + 
'<a href="https://capricious.netlify.app/src/html/substrate.html">SUPPLIES</a>' + 
'<a href="https://capricious.netlify.app/src/html/classes.html" >CLASSES</a>' + 
'<a href="https://capricious.netlify.app/src/html/contact.html">CONTACT</a>' + 
'<a href="https://capricious.netlify.app/src/html/about.html">ABOUT US</a>';

document.getElementById('header').appendChild(logo);
document.getElementById('header').appendChild(menu);
