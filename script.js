function openWorks(evt, worksName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
   tabcontent[i].style.display = "none";
 }
 tablinks = document.getElementsByClassName("tablinks");
 for (i = 0; i < tablinks.length; i++) {
   tablinks[i].className = tablinks[i].className.replace(" active", "");
 }
 document.getElementById(worksName).style.display = "block";
 evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function myFunction() {
	var popup = document.getElementById("words");
	popup.classList.toggle("show");
}
