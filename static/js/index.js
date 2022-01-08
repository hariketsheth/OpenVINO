// ------------------------For Toggling Menu Bar --------------------------------------------
function toggleMenubar(e) {
	let asideMenu = document.getElementsByClassName('menu_StyledSidebar')[0];
	if (e.classList.contains('hamburger')) {
		e.classList.remove('hamburger');
		e.classList.add('hamburger-close');

		// asideMenu.classList.remove('menubar');
		asideMenu.classList.add('menubar-open');
		asideMenu.setAttribute('aria-hidden', 'false');
		asideMenu.setAttribute('tabindex', '1');

		document.querySelector('body').classList.add('blur');
	} else {
		e.classList.remove('hamburger-close');
		e.classList.add('hamburger');

		asideMenu.classList.remove('menubar-open');
		// asideMenu.classList.add('menubar');
		asideMenu.setAttribute('aria-hidden', 'true');
		asideMenu.setAttribute('tabindex', '-1');

		document.querySelector('body').classList.remove('blur');
	}
}

// Set the date we're counting down to
var countDownDate = new Date("Jan 14, 2022 18:55:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);