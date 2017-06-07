var canvas= document.getElementById('canvasEdit');
var context = canvas.getContext('2d');
var xhr=new XMLHttpRequest();
var btt=document.getElementsByClassName("btt");
utils.addHandler(btt[0],"click",clean);
utils.addHandler(btt[1],"click",restore);
function clean(){
	context.clearRect(0,0,canvas.width,canvas.height);
}
function restore(){
	if(confirm("是否保存图片？")){
		var imgdata = canvas.toDataURL("image/png");   
		
		context.clearRect(0,0,canvas.width,canvas.height);

	}
}
