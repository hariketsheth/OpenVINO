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


$("#countdown").countdown("2021/12/29 14:30:00").on('update.countdown', function(event) {
		var $this = $(this).html(
			event.strftime('<div>%D <span>Days</span></div>  <div>%H <span>Hours</span></div> <div>%M <span>Minutes</span></div> <div>%S <span>Seconds</span></div>')
		);
	});