var url = {
	"css": {
		"focus": "color: rgb(255,0,0); transition: .2s;",
		"blur": "color: rgb(60,60,60); transition: .2s;",
		"add": "display: block;",
		"rem": "transform: translate(0,-3em); opacity: 0; transition: .2s;"
	},
	"mainmenu": {
		// "before": "bt-services",
		// "after": "bt-services",

		// For work on!
		"before": "bt-about",
		"after": "bt-about",


		"layerbefore": "layer-home",
		"layerafter": "layer-home",
	},
	"home": {
		"current": "content-creativity",
		"before": "content-inspiration",
		"css": {
			"button": {
				"focus": "background: rgb(255,0,0); transition: .2s;",
				"blur": "background: rgb(220,220,220); transition: .2s;"
			},
			"border": {
				"focus": "border: 4px solid rgb(255,0,0); transition: .2s;",
				"blur": "border: 4px double rgb(220,220,220); transition: .2s;"
			}
		}
	},
	// "services": {
	// 	"current": "content-service-description",
	// 	"before": "content-service-description"
	// },

	// For work on!
	"services": {
		"current": "content-included-into-service",
		"before": "content-included-into-service"
	},

	"gallery": {
		"current": "content-product-catalogue",
		"before": "content-product-catalogue"
	},
	"pricing": {
		"current": "content-details",
		"before": "content-details"
	},
	"hire": {
		"current": "content-developer",
		"before": "content-developer"
	},
	"about": {
		"current": "content-credits",
		"before": "content-credits"
	},
	"tablog": "bt-home",
	"panelarrows": {
		"current": 0,
		"max": 2,
		"domain": "input-home"
	}
}