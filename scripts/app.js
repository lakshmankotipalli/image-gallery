function previewImg () {
	document.getElementById('modal').style.display = "block";
	if(!document.getElementById("modal").classList.contains('show-modal')) {
		document.getElementById("modal").className += " show-modal";
		document.getElementById("wrapper").style.opacity = "0.5";
	}
};

function closeModal () {
	document.getElementById('modal').style.display = "none";
	if(document.getElementById("modal").classList.contains('show-modal')) {
		document.getElementById("modal").classList.remove('show-modal');
		document.getElementById("wrapper").style.opacity = "1";
	}
}