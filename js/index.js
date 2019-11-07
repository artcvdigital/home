// boxes
	var d, btMainMenu, layer, on, off, li, keyName, saveKeyName, txtLauncherShortcut,
			clientLabelBox, btSwipe;

// file
	d = document;
	btMainMenu = d.getElementsByClassName('bt-main-menu');
	li = d.getElementsByClassName('li');
	txtLauncherShortcut = d.getElementsByClassName('txt-launcher-shortcut');
	clientLabelBox = d.getElementsByClassName('client-fb-label-wrapper');
	btSwipe = d.getElementsByClassName('bt-swipe-to');

// methods
	function btMainMenuFn(){
		url.mainmenu.after = event.currentTarget.id;
		if(url.mainmenu.before != url.mainmenu.after){
			d.getElementById(url.mainmenu.before).style = url.css.blur;
			d.getElementById(url.mainmenu.after).style = url.css.focus;
			layer = d.getElementById(url.mainmenu.before).getAttribute('name');
			url.tablog = `bt-${layer}`;
			url.mainmenu.layerbefore = `layer-${layer}`;
			off = d.getElementById(`layer-${layer}`);
			layer = d.getElementById(url.mainmenu.after).getAttribute('name');
			var autoclick = d.getElementsByName(url[layer].current)[0].id;
			d.getElementById(autoclick).click();
			url.mainmenu.layerafter = `layer-${layer}`;
			on = d.getElementById(`layer-${layer}`);
			off.style = `display: block; ${url.css.rem}`;
			setTimeout(()=>{
				off.style = 'display: none;';
				on.style = url.css.add;
			}, 100);
			d.getElementById(`sub-${url.mainmenu.before}`).style = url.css.rem;
			setTimeout(()=>{
				d.getElementById(`sub-${url.mainmenu.before}`).style = 'display: none;';
				d.getElementById(`sub-${url.mainmenu.after}`).style = url.css.add;
			}, 200);
			url.mainmenu.before = url.mainmenu.after;
		};
	};

	function btLeftPanel(){
		var target, name, blurTo, reqId, showoff, geton;
		target = event.currentTarget.id;
		name = d.getElementById(url.mainmenu.after).getAttribute('name');
		if(name == 'home'){
			blurTo = d.getElementsByName(url[name].before)[0];
			reqId = blurTo.id;
			d.getElementById(reqId).style = url.home.css.button.blur;
			d.getElementById(`bd-${reqId}`).style = url.home.css.border.blur;
			d.getElementById(target).style = url.home.css.button.focus;
			d.getElementById(`bd-${target}`).style = url.home.css.border.focus;
		}else{
			blurTo = d.getElementsByName(url[name].before)[0];
			reqId = blurTo.id;
			d.getElementById(reqId).style = url.css.blur;
			d.getElementById(target).style = url.css.focus;
		};
		showoff = d.getElementById(url[name].before).id;
		d.getElementById(showoff).style = `display: block; ${url.css.rem}`;
		geton = d.getElementById(target).getAttribute('name');
		setTimeout(()=>{
			d.getElementById(showoff).style = 'display: none;';
			d.getElementById(geton).style = url.css.add;
		}, 200);
		url[name].current = d.getElementById(target).getAttribute('name');
		url[name].before = url[name].current;
	};

	function keyListen(){
		d.addEventListener('keydown', ()=>{
		  keyName = event.key;
		  saveKeyName = keyName;
			if(keyName == 1 || keyName == 'i'  || keyName == 'I'){
				d.getElementById('bt-home').click();
			}else if(keyName == 2	|| keyName == 's'	|| keyName == 'S'){
				d.getElementById('bt-services').click();
			}else if(keyName == 3	|| keyName == 'g'	|| keyName == 'G'){
				d.getElementById('bt-gallery').click();
			}else if(keyName == 4	|| keyName == 'p'	|| keyName == 'P'){
				d.getElementById('bt-pricing').click();
			}else if(keyName == 5	|| keyName == 'c'	|| keyName == 'C'){
				d.getElementById('bt-hire').click();
			}else if(keyName == 6	|| keyName == 'a'	|| keyName == 'A'){
				d.getElementById('bt-about').click();
			}else if(keyName == 'Tab'){
				d.getElementById(url.tablog).click();
			}else if(keyName == 'ArrowLeft'){
				if(url.mainmenu.after == 'bt-hire'){
					btSwipe[0].click();
					d.getElementById('client-public-opinions').scrollIntoView();
				};
			}else if(keyName == 'ArrowRight'){
				if(url.mainmenu.after == 'bt-hire'){
					btSwipe[1].click();
					d.getElementById('client-public-opinions').scrollIntoView();
				};
			}else if(keyName == ' '){
				console.log('La tecla "Espacio" aún no ha sido configurada');
			}else if(keyName == 'b' || keyName == 'B'){
				console.log('La tecla "B" aún no ha sido configurada');
			}else if(keyName == 'Enter' || keyName == 'Enter'){
  		  launchFullScreen();
			}else if(keyName == 'r' || keyName == 'R'){
				var answer = confirm('La página será recargada, desea continuar?');
				if(answer){
					location.reload();
				};
			};
		});
	};

	function exchancheCards(){
		url.swipe.bt = event.currentTarget.id;
		url.swipe.max = clientLabelBox.length-1;
		d.getElementsByClassName('swipe-flag')[url.swipe.index].style = 'display: grid; transform: scale(.95); opacity: 0; transition: .3s;';
		if(url.swipe.bt == 'bt-swipe-left'){
				setTimeout(()=>{
					d.getElementsByClassName('swipe-flag')[url.swipe.index].style = 'display: none;';
					if(url.swipe.index != 0){
						url.swipe.index = url.swipe.index - 1;
					}else if(url.swipe.index == 0){
						url.swipe.index = url.swipe.max;
					};
					d.getElementsByClassName('swipe-flag')[url.swipe.index].style = 'display: grid;';
				}, 200);
			btSwipe[1].style = 'background: rgba(60,60,60,.2) url(media/bt-swipe-right.png) center no-repeat; background-size: 40% 40%;';
			btSwipe[0].focus();
			btSwipe[0].style = 'background: rgb(250,0,0) url(media/bt-swipe-left.png) center no-repeat; background-size: 40% 40%; transform: scale(.8);';
			setTimeout(()=>{
				btSwipe[0].style = 'background: rgb(220,220,220) url(media/bt-swipe-left.png) center no-repeat; background-size: 40% 40%;';
				btSwipe[0].blur();
			}, 200);
		}else if(url.swipe.bt == 'bt-swipe-right'){
			setTimeout(()=>{
				d.getElementsByClassName('swipe-flag')[url.swipe.index].style = 'display: none;';
				if(url.swipe.index < url.swipe.max){
					url.swipe.index = url.swipe.index + 1;
				}else if(url.swipe.index == url.swipe.max){
					url.swipe.index = 0;
				};
				d.getElementsByClassName('swipe-flag')[url.swipe.index].style = 'display: grid;';
			}, 200);
			btSwipe[0].style = 'background: rgba(60,60,60,.2) url(media/bt-swipe-left.png) center no-repeat; background-size: 40% 40%;';
			btSwipe[1].focus();
			btSwipe[1].style = 'background: rgb(250,0,0) url(media/bt-swipe-right.png) center no-repeat; background-size: 40% 40%; transform: scale(.8);';
			setTimeout(()=>{
				btSwipe[1].style = 'background: rgb(220,220,220) url(media/bt-swipe-right.png) center no-repeat; background-size: 40% 40%;';
				btSwipe[1].blur();
			}, 200);
		};
	};

	function txtLauncherShortcutFn(){
		var target = event.currentTarget.id;
		if(target == 'req-launch-subscribe-box'){
		}else if(target == 'go-to-hire'){
			url.hire.current = 'content-fill-out-application';
			d.getElementById('bt-hire').click();
		}else if(target == 'go-to-upt-request'){
			url.hire.current = 'content-request-for-updating-information';
			d.getElementById('bt-hire').click();
		}else if(target == 'go-to-pricing'){
			url.pricing.current = 'content-details';
			d.getElementById('bt-pricing').click();
		}else if(target == 'go-to-feedback-form-field'){
			url.about.current = 'content-feedback';
			d.getElementById('bt-about').click();
		}else if(target == 'go-to-google-signup'){
			console.info(`It's not enabled yet...`);
		};
	};

	function listenTo(){
		for(var i=0; i<btMainMenu.length; i++){
			btMainMenu[i].addEventListener('click', ()=>{
				btMainMenuFn();
			});
		};
		for(var i=0; i<li.length; i++){
			li[i].addEventListener('click', ()=>{
				btLeftPanel();
			});
		};
		for(var i=0; i<txtLauncherShortcut.length; i++){
			txtLauncherShortcut[i].addEventListener('click', ()=>{
				txtLauncherShortcutFn();
			});
		};
		for(var i=0; i<btSwipe.length; i++){
			btSwipe[i].addEventListener('click', ()=>{
				exchancheCards();
			});
		};
		d.getElementById('logo-main').addEventListener('click', ()=>{
			launchFullScreen();
		});
		// keyListen();
	};

	function launchFullScreen(){
	  if((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)){
	    if(document.documentElement.requestFullScreen){
	      document.documentElement.requestFullScreen();
	    }else if(document.documentElement.mozRequestFullScreen){
	      document.documentElement.mozRequestFullScreen();
	    }else if(document.documentElement.webkitRequestFullScreen){
	      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	    };
	  }else {
	    if(document.cancelFullScreen){
	      document.cancelFullScreen();
	    }else if(document.mozCancelFullScreen){
	      document.mozCancelFullScreen();
	    }else if(document.webkitCancelFullScreen){
	      document.webkitCancelFullScreen();
	    };
	  };
	};
// events
	// window.oncontextmenu = ()=>{
		// return false;
	// };

	window.onload = ()=>{
		setTimeout(()=>{
			// d.getElementById('bt-home').click();
			// url.pricing.current = 'content-payment-methods';
			// d.getElementById('bt-pricing').click();
			url.hire.current = 'content-request-for-updating-information';
			url.hire.current = 'content-fill-out-application';
			d.getElementById('bt-hire').click();
		}, 99);
		listenTo();
	};



