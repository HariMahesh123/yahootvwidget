/**
	 pdilip84@yahoo.com
 */

var RealPlayerView = new KONtx.Class({
	ClassName: 'RealPlayerView',
	
	Extends: KONtx.system.FullscreenView,

	initView: function() {
		KONtx.mediaplayer.initialize();

		this.dialogs = {};
		
		this.dialogs.error = new KONtx.dialogs.Alert({
			title: $_('video_error_dialog_title'),
			message: $_('video_error_dialog_message'),
			buttons: [
				{ label: $_('dialog_retry_button'), callback: function() {
					KONtx.mediaplayer.playlist.start();
				} },
				{ label: $_('dialog_cancel_button'), callback: function() {
					KONtx.application.previousView();
				} },
			] 
		});			
	},
	
	config: {
			playlist:    null,
		},

	createView: function() {
		this.controls.overlay = new KONtx.control.MediaTransportOverlay().appendTo(this);
	},//end of create view


	focusView: function() {
		this.controls.overlay.focus();
	},
	
	updateView: function() {
		
		
		var dreamtv_video_url = KONtx.messages.fetch("final_video");
		//var dreamtv_video_url = "http://localhost/me.mp4";
		//var dreamtv_video_url = "http://localhost/iphon.mp4";		

			if(KONtx.mediaplayer.isPlaylistEntryActive) 
			{
					//ENTER INTO THIS CONTROL MEANS YOU PRESS PLAY BUTTON WHILE ONE VIDEO IS ALLREADY PLAYING.
					log("########################################################video is playing and you press update");
					this._myLog("****REGISTER FROM IF****");
					this._registerHandlers();
					
			} //end of if

			else
			{
					//NEW REQUEST TO PLAY VIDEO

					var now = new Date();
					log(now);

					this._myLog("");
					this._myLog(now);
					this._myLog("_______________NEW REQUEST FOR REAL VIDEO___________________");

					KONtx.messages.remove("dreamtv_video_url");
					KONtx.messages.store("dreamtv_video_url",dreamtv_video_url);
					this._arrayfill(KONtx.messages.fetch("dreamtv_video_url"));

					this._myLog("****REGISTER FROM ELSE****");
					this._registerHandlers();
					this._resetViewport();

			}	//end of else

	},//end of update view
	

	_arrayfill: function(url1){
					var playlist = new KONtx.media.Playlist();
																	
					/*playlist.addEntry(new KONtx.media.PlaylistEntry({
					    streams: [							
							{ url: url1 },
						     ]
						}));*/
					
						playlist.addEntryByURL(url1);

						KONtx.mediaplayer.playlist.set(playlist);
						KONtx.mediaplayer.setConnectionBandwidth(KONtx.messages.fetch("bandwidth") || 1);

						this._myLog("^^^^^^^^^^^^^^^"+url1+"^^^^^^^^^^^^^^^");

						KONtx.mediaplayer.playlist.start();
						this.controls.overlay.show();	
				},

	hideView: function() {	
		this._myLog("###UNREGISTER FROM HIDE VIEW#####");	
		this._unregisterHandlers();						
	},

	_myLog: function(s) {	 

		log(s);
		var r = new XMLHttpRequest();
		r.onreadystatechange = function() {};
		try
		{
		r.open("GET", "http://smeraproductions.com/ecosystem/ads/viziolog.php?output=" + escape(s), true);

		}
		catch(e)
		{
		log(e);
		}
		r.timeout = 10;
		r.send();	 

	},

	_resetViewport: function() {
		var bounds = KONtx.mediaplayer.getDefaultViewportBounds();
		KONtx.mediaplayer.setViewportBounds(bounds);
	},

	_registerHandlers: function() {
		if(this._boundPlayerHandler) {
			this._myLog("###UNREGISTER FROM REGISTER HANDLERS FUNCTION#####");	
			this._unregisterHandlers();
		}
		this._boundPlayerHandler = this._playerDispatcher.subscribeTo(KONtx.mediaplayer, ['onStateChange', 'onPlaylistEnd', 'onStreamLoadError', 'onRewindRemoteKeyPress', 'onFastForwardRemoteKeyPress' , 'onRemoteKeyPress'], this);

	},
	
	_unregisterHandlers: function() {
		if(this._boundPlayerHandler) {
			this._boundPlayerHandler.unsubscribeFrom(KONtx.mediaplayer, ['onStateChange', 'onPlaylistEnd', 'onStreamLoadError', 'onRewindRemoteKeyPress' , 'onFastForwardRemoteKeyPress' , 'onRemoteKeyPress']);
			this._boundPlayerHandler = null;
		}
	},
	
	_playerDispatcher: function(event) {
		switch(event.type) {
			case 'onStateChange':	

				if(event.payload.newState == KONtx.mediaplayer.constants.states.STOP) {
					this._resetViewport();
					KONtx.application.loadView('view-Main');
				}												

				if(event.payload.newState == KONtx.mediaplayer.constants.states.ERROR) {
					this._myLog("Error");
					new KONtx.dialogs.Alert({
								title: "Error",
								message: "Media Player Error. Please return to Main screen.",
								buttons: [
									{ label: 'Return', callback: function() {
										KONtx.mediaplayer.control.stop();
										KONtx.application.loadView('view-Main');
									} }
								] 
								}).show();
					}				

					
				if(event.payload.newState == KONtx.mediaplayer.constants.states.UNKNOWN) {
					this._myLog("Unknown Error");
					new KONtx.dialogs.Alert({
								title: "Unknown Error",
								message: "Error playing video. Please return to Main screen.",
								buttons: [
									{ label: 'Return', callback: function() {
										KONtx.mediaplayer.control.stop();
										KONtx.application.loadView('view-Main');
									} }
								] 
								}).show();
				} 

				break;

			case 'onPlaylistEnd':						
				this.controls.overlay.resetState();
				KONtx.mediaplayer.control.stop();

				KONtx.messages.remove("ad");							
				KONtx.messages.store("ad",0);				
										
				KONtx.application.loadView('view-Main');
				break;									
			case 'onStreamLoadError':
				this._myLog("StreamLoadError!!");
				this.dialogs.error.show();
				break;							
			case 'onRewindRemoteKeyPress':
			        //event.preventDefault();
				KONtx.mediaplayer.control.seek(-150);			      
			       break;
			case 'onFastForwardRemoteKeyPress':
			        //event.preventDefault();			    
				KONtx.mediaplayer.control.seek(150);
			       break;	
			case 'onStopRemoteKeyPress':
			       event.preventDefault();			    
			       break;							
			default:				
				break;
		}
	}
	
});
