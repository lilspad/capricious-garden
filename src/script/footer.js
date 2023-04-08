var container = document.createElement('div');

container.classList.add('img-container');

const img = document.createElement('img');
img.id = 'img'
img.src = 'https://capricious.netlify.app/src/media/inside1.jpg';


container.appendChild(img);

var table = document.createElement('table');

var tr1 = document.createElement('tr');
tr1.innerHTML = '<th class="join-col"> <h3>Join our community</h3> </th> <th> <h3 class="visit">Visit us!</h3> </th><td rowspan=3 ><div class="map">' +
'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.878355244242!2d-0.29776168407273323!3d51.478747120618436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760dc5605b3443%3A0xd16f914f6291fb7e!2sRoyal%20Botanic%20Gardens%2C%20Kew!5e0!3m2!1sen!2suk!4v1674689899175!5m2!1sen!2suk" width="600" height="450" allowFullScreen loading="lazy" style="border: 0;" referrerpolicy="no-referrer-when-downgrade">' +
'</div></iframe></div></td>  <th class="info"> <h3>Information</h3> </th>';

var tr2 = document.createElement('tr');
tr2.innerHTML = '<td><p class="join-col">Join our newsletter to receive weekly plantcare tips, classes calendar and special offers.</p>' +
'<p class="join-col left">Email address:</p><input class="join" id="input" type="text" /><input class="join" id="join" type="submit" value="Join!" /></td>' +
'<td class="visit"> <p>We are open: <br /> Mon-Fri 8am - 6pm <br /> Sat-Sun 10am - 8pm</p> </td><td class="info">' +
'<nav><a href="https://capricious.netlify.app/src/html/supplies/partners.html">Partners</a>' + 
'<a href="https://capricious.netlify.app/src/html/contact.html">Contact</a>' + 
'<a>FAQ</a><a>T&Cs</a><a>Privacy Policy</a></nav></td>';

var tr3 = document.createElement('tr');
tr3.innerHTML = '<td></td><td class="visit"> Capricious Plant Centre <br /> 23-27 Fickle Avenue <br /> NE6 1CG, Garden City </td> <td class="info"> 020 456 789 <br /> customerservice@capricious.co.uk </td>';

var tbody = document.createElement('tbody');

tbody.appendChild(tr1);
tbody.appendChild(tr2);
tbody.appendChild(tr3);

table.appendChild(tbody);

var cr = document.createElement('p');
cr.classList.add('copyright');

cr.innerText = "© 2023 Lily Paczesniak";

document.getElementById('footer').appendChild(container);
document.getElementById('footer').appendChild(table);
document.getElementById('footer').appendChild(cr);
