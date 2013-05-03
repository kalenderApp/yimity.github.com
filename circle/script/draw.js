var circle = {
	options : {
		fillstyle : '#FFFFFF',
		radius : 47,
		strokestyle : '#D7F59A',
		linewidth : 10,
		width : document.getElementById('canvas').width,
		height : document.getElementById('canvas').height,
		cx : document.getElementById('canvas').height/2,
		cy : document.getElementById('canvas').width/2
	},
	rotate : function(object){
		var object = document.getElementById(object);
		var context = object.getContext("2d");
			context.fillStyle = circle.options.fillstyle;
			context.fillRect(0,0,circle.options.width,circle.options.height);
			context.translate(0,circle.options.height);
			context.rotate(-Math.PI/2);
	},
	draw : function(object,audio,i,strokestyle){
		var object = document.getElementById(object);
		var audio = document.getElementById(audio);
		if (!object){
			return
		}
		if (!audio){
			return
		}
		//audio.preload.metadata;
		//console.log(audio.buffered.start(0)); //第index段区域的开始位置
		//console.log(audio.buffered);

		var context = object.getContext("2d");
		//var i = i || (currenttime/alltime)*2;
		context.globalCompositeOperation = 'source-in';
		context.beginPath();
		context.arc(circle.options.cx,circle.options.cy,circle.options.radius,0,(Math.PI*i),false);
		//context.arc(circle.options.cx,circle.options.cy,circle.options.radius,0,(Math.PI*bfrpret),false);
		context.strokeStyle = strokestyle || circle.options.strokestyle;
		context.lineWidth = circle.options.linewidth;
		context.stroke();
	},
	curtTime : function(object){
		return parseInt(object.currentTime);
	},
	allTime : function(object){
		return parseInt(object.duration);
	},
	play : function(object,play){
		var audio = document.getElementById(object);
		if (!audio){
			return
		}
		var play = document.getElementById(play);
		if (!play){
			return
		}
		var status = play.getAttribute('class');
		if (status == 'stop') {
			audio.play();
			var timer = setInterval(function(){
										var alltime = circle.allTime(audio);
										var currenttime = circle.curtTime(audio);
										if (audio.buffered.length == 1) {
											//console.log(audio.buffered.start(0));
											console.log(parseInt(audio.buffered.end(0)));
											console.log(alltime);
											var buffered = audio.buffered.end(0);
											var bfrpret = (buffered/alltime)*2;
											if (parseInt(buffered) <= alltime) {
												circle.draw('canvas','audios',bfrpret,'#DDFDFD');
											}
										};
										var i = (currenttime/alltime)*2;
										circle.draw('canvas','audios',i)
										//circle.draw('canvas','audios',0.7,'#FDFDFD');
									},1000);
			play.setAttribute('class','playing');
		}else{
			circle.stop(audio,play);
			
		}
	},
	stop : function(object,play,timer){
		object.pause();
		clearTimeout(timer);
		play.setAttribute('class','stop');
	}
};
