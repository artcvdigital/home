// boxes
	var d, btMainMenu, layer, on, off, li, keyName, saveKeyName;

// file
	d = document;
	btMainMenu = d.getElementsByClassName('bt-main-menu');
	li = d.getElementsByClassName('li');

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

/************************************/
// console.log(keyName);
/************************************/

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
			}else{
				neededShortcuts();
			};
		});
	};

	function neededShortcuts(){
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
		keyListen();
	};


// events
	window.oncontextmenu = ()=>{
		return false;
	};

	window.onload = ()=>{
		setTimeout(()=>{
			d.getElementById('bt-home').click();
		}, 99);
		listenTo();
	};