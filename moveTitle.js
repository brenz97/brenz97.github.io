function shift(event){
				var x = event.clientX;
				var y = event.clientY;
				var xmiddle = window.innerWidth/2;
				var ymiddle = window.innerHeight/2;
				var temp;
				if(x > xmiddle){
					temp = 6*(1-(x/xmiddle));
					document.getElementById('moveTitleText2').style.marginLeft = temp + "px";
					
				}else{
					temp = -6*((x/xmiddle)-1);
					document.getElementById('moveTitleText2').style.marginLeft = temp + "px";
				}

				if(y > ymiddle){
					temp = 8*(1-(y/ymiddle));
					document.getElementById('moveTitleText2').style.marginTop = temp + "px";
				}else{
					temp = -8*((y/ymiddle)-1);
					document.getElementById('moveTitleText2').style.marginTop = temp + "px";
				}
			}
