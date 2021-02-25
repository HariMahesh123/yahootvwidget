/**
  pdilip84@yahoo.com
 **/

var PlayerView = new KONtx.Class({
	ClassName: 'PlayerView',
	
	Extends: KONtx.system.FullscreenView,

focusView : function() {

		if((KONtx.messages.fetch("ad") === 1))
		{
			KONtx.application.loadView('view-RealPlayer');	
		}
		else
		{
			KONtx.messages.remove("ad");							
			KONtx.messages.store("ad",0);	
		}
	},		
	
	createView: function() {
	},

	updateView: function() {								
	},
	
});
