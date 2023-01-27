var logo = document.createElement('a');

logo.classList.add('logo');

logo.id = 'logo';
logo.href = '';
logo.innerHTML = '<i class="fa-brands fa-pagelines" /> <h2>CAPRICIOUS</h2>';

var menu = document.createElement('div');
menu.classList.add('menu')

menu.innerHTML = '<i class="fa-solid fa-bars" /> <nav class="header-nav" ><a id="plantsa">PLANTS</a><a id="suppliesa">SUPPLIES</a><a id="classesa">CLASSES</a><a id="contacta">CONTACT</a><a>ABOUT US</a><a>PARTNERS</a></nav>';

document.getElementById('header').appendChild(logo);
document.getElementById('header').appendChild(menu);
