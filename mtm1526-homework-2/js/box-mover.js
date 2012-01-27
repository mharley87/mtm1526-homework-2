var posy=100;

function changeText2(){
	
	
	newLi = document.createElement('li'); //.createElement() makes a new empty HTML tag
	
	newLi.className = 'box'; // className allows us to manipulate the classes fro a tag
	
	document.getElementById('list').appendChild(newLi);
	newLi.innerHTML = document.getElementById('userInput').value;
	
	
	posy+=20;
	newLi.style.top = posy + 'px';
	


	
}




document.documentElement.addEventListener('click', function(ev) {
	if (ev.target.tagName == 'LI') {
	
		ev.target.className = 'box active';
		newLi = ev.target;
	}
}, false);
