"use strict";

window.onload = function () {
	const lamps = document.querySelectorAll(".lamp");
	lamps.forEach((lamp) => {
		lamp.addEventListener("click", function () {
			lamp.classList.toggle("active");
			lamps.forEach((l) => {
				if (l !== lamp) {
					l.classList.remove("active");
				}
			});
		});
	});
};
