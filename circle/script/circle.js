var circle = {
	options : {
		fillstyle : '#FFFFFF',
		radius : 47,
		strokestyle : '#F0F0F0',
		linewidth : 10,
		width : 400,
		height : 400,
		cx : 200,
		cy : 200
	},
	getId : function(object){
		if (document.getElementById(object)) {
			return document.getElementById(object)
		}else{
			return
		}
	},
	rotate : function(object,i){
		var object = this.getId(object);
		var context = object.getContext("2d");
			context.fillStyle = this.options.fillstyle;
			context.fillRect(0,0,this.options.width,this.options.height);
			context.translate(0,this.options.height);
			context.rotate(-Math.PI/i);
	},
	draw : function(object,i){
		var object = this.getId(object);
		var context = object.getContext("2d");
			//context.globalCompositeOperation = 'source-in';
			context.beginPath();
			context.arc(this.options.cx,this.options.cy,this.options.radius,0,(Math.PI*i),false);
			context.strokeStyle = this.options.strokestyle;
			context.lineWidth = this.options.linewidth;
			context.stroke();
	},
	curtTime : function(object){
		var object = this.getId(object);
		return parseInt(object.currentTime);
	},
	allTime : function(object){
		var object = this.getId(object);
		return parseInt(object.duration);
	},
	play : function(object,plays){
		var audio = this.getId(object);
		var plays = this.getId(plays);
		var status = plays.getAttribute('class');
		if (status == 'stop') {
			audio.play();
			timer = setInterval(function(){processBar()},1000);
			plays.setAttribute('class','playing');
		}else{
			stopIt(audio,plays);
		}
	}
	
}
