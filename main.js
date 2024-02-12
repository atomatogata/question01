"use strict";

window.onload = function () {
	const trafficSignal = document.querySelector(".traffic-signal");
	const lamps = document.querySelectorAll(".lamp");
	let activeLamp = document.querySelector(".active");

	trafficSignal.addEventListener("click", function (e) {
		if (activeLamp) {
			activeLamp.classList.remove("active");
		}
		e.target.classList.add("active");
		activeLamp = e.target;
	});
};
