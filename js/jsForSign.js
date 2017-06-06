var canvas= document.getElementById('canvasEdit');
var context = canvas.getContext('2d');
var btt=document.getElementsByClassName("btt");
utils.addHandler(btt[0],"click",clean);
function clean(){
	context.clearRect(0,0,canvas.width,canvas.height);
}
