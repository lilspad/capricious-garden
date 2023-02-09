var logo = document.createElement('a');

logo.classList.add('logo');

logo.id = 'logo';
logo.href = 'index.html';
logo.innerHTML = '<i class="fa-brands fa-pagelines" /> <h2>CAPRICIOUS</h2>';

var menu = document.createElement('div');
menu.classList.add('menu')

menu.innerHTML = '<i class="fa-solid fa-bars" /> <nav class="header-nav" ><a href="https://capricious.netlify.app/src/html/plants/plants.html">PLANTS</a>' + 
'<a href="https://capricious.netlify.app/src/html/supplies/supplies.html">SUPPLIES</a>' + 
'<a href="https://capricious.netlify.app/src/html/classes.html" >CLASSES</a>' + 
'<a href="https://capricious.netlify.app/src/html/contact.html">CONTACT</a>' + 
'<a href="https://capricious.netlify.app/src/html/about.html">ABOUT US</a>' +
'<a href="https://capricious.netlify.app/src/html/supplies/partners.html">PARTNERS</a></nav>';

document.getElementById('header').appendChild(logo);
document.getElementById('header').appendChild(menu);
