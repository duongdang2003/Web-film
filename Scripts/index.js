function filmInfor() {
	let arrayPoster = document.querySelectorAll(".poster-container .col-2");
	for (let i = 0; i < arrayPoster.length - 6; i++) {
		arrayPoster[i].addEventListener("click", function () {
			window.location.href = "../film-infor.html";
		});
	}
}
filmInfor();
