function getNote(){if(localStorage.getItem("note"))var e=localStorage.getItem("note");else var e="Please type a note";document.getElementById("note").textContent=e}function saveNote(e){var t=document.getElementById("note").textContent;localStorage.setItem("note",t)}function clearNote(){return localStorage.clear(),!1}function clearDefaultText(){if("Please type a note"===document.getElementById("note").textContent){document.getElementById("note").innerHTML=""}}getNote();