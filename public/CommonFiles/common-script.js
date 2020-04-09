export default function createFooter() {

	document.body.innerHTML += `<footer class=footer>Copyright&copy; 2020 by Nemesis&trade;</footer>`;
};

export function themeBtn() {
	let themeBtn = document.querySelector(".theme-toggler");

	console.log("Run!");

	if(document.body.classList[0] == "light") {

		themeBtn.innerText = "Light Theme";
	} else if (document.body.classList[0] == "dark") {

		themeBtn.innerText = "Dark Theme";
	}

	themeBtn.addEventListener('click', (e) => {
		if(document.body.classList[0] == "light") {

			document.body.classList.remove("light");
			document.body.classList.add("dark");
			e.target.innerText = "Light Theme";

		} else if (document.body.classList[0] == "dark") {

			document.body.classList.remove("dark");
			document.body.classList.add("light");
			e.target.innerText = "Dark Theme";

		}
	});
}