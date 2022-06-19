const folderList = document.getElementById("folderList");

fetch('/getFileNames').then((res) => {
	return res.json();
}).then(obj => {
	obj.splice(-1)
	addList(obj);
}).catch(err => {
	console.error("There was an issue while fetching data from server: ", err);
});

function addList(itemArray) {
	for(item in itemArray) {
		let listItem = document.createElement("li");
		let link = document.createElement("a");
		link.href = `${itemArray[item]}/index.html`;
		link.innerText = itemArray[item];
		listItem.appendChild(link);

		folderList.appendChild(listItem);
	}
}