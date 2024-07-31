let states = {
	box1: "none",
	box2: "none",
};

function floatBox(boxId, titleId) {
	let box = document.getElementById(boxId);
	let title = document.getElementById(titleId);

	if (states[boxId] === "none") {
		box.style.float = "left";
		title.innerHTML =
			"Box is floated to the left. This means it will move to the left-most side of its containing block and allow content to flow around its right side.";
		states[boxId] = "left";
	} else if (states[boxId] === "left") {
		box.style.float = "right";
		title.innerHTML =
			"Box is floated to the right. Now it jumps to the right-most side of its container, with content wrapping around its left.";
		states[boxId] = "right";
	} else {
		box.style.float = "none";
		title.innerHTML =
			"Box is not floated. It takes its natural place in the document layout, causing no wrap effect for the surrounding content.";
		states[boxId] = "none";
	}
}