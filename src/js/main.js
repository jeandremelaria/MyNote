/* 
Developer name: Jeandre Melaria
Project title: MyNote
Platform: 
Programming language: HTML5, CSS3, 
IDE tool: Dreamweaver
Database:  -
Project type: App
File created date: 31.10.2017
Last modified: 31.10.2017
*/

function getNote(){
	if(localStorage.getItem('note')){
		var note = localStorage.getItem('note');
	}else{
		var note = 'Please type a note';
	}
	//insert note in the div
	 document.getElementById('note').textContent = note;
}

function saveNote(id){
	var note = document.getElementById('note').textContent;
	localStorage.setItem('note',note);
}

function clearNote(){
	localStorage.clear();
	
	//return false to avoid following the link
	return false;
}

// Calling function getNote
getNote();