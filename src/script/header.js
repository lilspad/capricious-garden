var logo = document.createElement('a');

logo.classList.add('logo');

logo.id = 'logo';
logo.href = 'index.html';
logo.innerHTML = '<i class="fa-brands fa-pagelines" /> <h2>CAPRICIOUS</h2>';

var menu = document.createElement('div');
menu.classList.add('menu')

menu.innerHTML = '<i class="fa-solid fa-bars" /> <nav class="header-nav" ><a href="/Users/lilspad/Desktop/Projects/for-real/capricious-garden/src/html/plants/plants.html">PLANTS</a>' + 
'<a href="/Users/lilspad/Desktop/Projects/for-real/capricious-garden/src/html/supplies/supplies.html">SUPPLIES</a>' + 
'<a href="/Users/lilspad/Desktop/Projects/for-real/capricious-garden/src/html/classes.html" >CLASSES</a>' + 
'<a href="/Users/lilspad/Desktop/Projects/for-real/capricious-garden/src/html/contact.html">CONTACT</a>' + 
'<a href="/Users/lilspad/Desktop/Projects/for-real/capricious-garden/src/html/about.html">ABOUT US</a>' +
'<a href="/Users/lilspad/Desktop/Projects/for-real/capricious-garden/src/html/supplies/partners.html">PARTNERS</a></nav>';

document.getElementById('header').appendChild(logo);
document.getElementById('header').appendChild(menu);
