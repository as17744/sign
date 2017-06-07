window.onload=function(){
	var canvas = document.getElementById('canvasEdit');
	 canvas.width=document.documentElement.clientWidth*0.99;
	 canvas.height=document.documentElement.clientHeight*0.6;
	 utils.addHandler(canvas,"contextmenu",function(e){e.preventDefault();});
	 utils.addHandler(canvas,"touchstart",onMouseDown);
	 utils.addHandler(canvas,"touchmove",onMouseMove);
	 utils.addHandler(canvas,"touchend",onMouseUp);
	 utils.addHandler(canvas,"mousedown",onMouseDown);
	 utils.addHandler(canvas,"mousemove",onMouseMove);
	 utils.addHandler(canvas,"mouseup",onMouseUp);
	var context = canvas.getContext('2d');
	var linex = new Array();
	var liney = new Array();
	var lastX = 1;
	var lastY = 30;
	var flag = 0;
	var canArea=document.getElementById("canArea");
	var rect = canvas.getBoundingClientRect();  

	function onMouseMove(evt)
	{
		if (flag == 1)
		{   
			var x=evt.clientX-rect.left * (canvas.width / rect.width);
			var y=evt.clientY-rect.top * (canvas.height / rect.height);
			linex.push(x);
			liney.push(y);
			context.save();
			context.beginPath();
			context.lineWidth = 5;
			for (var i = 0; i < linex.length; i++)
			{
				lastX = linex[i];
				lastY = liney[i];		
				context.lineTo(lastX, lastY);
			}
			
			context.stroke();
			context.restore();
		}
	}
	function onMouseDown(evt)
	{
		flag = 1;
		var x=evt.clientX-rect.left * (canvas.width / rect.width);
		var y=evt.clientY-rect.top * (canvas.height / rect.height);
		context.moveTo(x, y);
		linex.push(x);
		liney.push(y);
	}
	function onMouseUp(evt)
	{
		flag = 0;
		linex.splice(0,linex.length);
		liney.splice(0,liney.length);
	}
}