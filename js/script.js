document.addEventListener('DOMContentLoaded', () => {
	let menuOpen = document.querySelector('.menu-icon__open'),
		menuClose = document.querySelector('.menu-icon__close'),
		menuContent = document.querySelector('.nav-menu__mobile-content');

		menuOpen.addEventListener('click', () => {
			addActivity(menuClose);
			addActivity(menuContent);
			removeActivity(menuOpen);
		});

		menuClose.addEventListener('click', () => {
			removeActivity(menuClose);
			removeActivity(menuContent);
			addActivity(menuOpen);
		});

		function addActivity (item) {
			item.classList.remove('inactive');
		}

		function removeActivity (item) {
			item.classList.add('inactive')
		}
});