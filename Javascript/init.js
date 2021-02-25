/**
 * pdilip84@yahoo.com
 */

include("Framework/kontx/1.3/src/all.js");

include("Javascript/core/event_handlers.js");
include("Javascript/core/api.js");
include("Javascript/core/preferences.js");

include("Javascript/views/snippet.js");
include("Javascript/views/now_playing_snippet.js");
include("Javascript/views/sidebar.js");
include("Javascript/views/basicplayer.js");
include("Javascript/views/realplayer.js");
include("Javascript/views/support.js");


include("Javascript/views/screen2.js");
include("Javascript/views/screen3.js");
include("Javascript/views/nextscreen3.js");

KONtx.application.init({
	views: [
		{ id: 'view-Main', viewClass: SidebarView },
		{ id: 'view-Player', viewClass: BasicPlayerView },
		{ id: 'view-RealPlayer', viewClass: RealPlayerView },
		{ id: 'view-NewPlayer', viewClass: PlayerView },
		{ id: 'view-Sub400', viewClass: Sub400View },
		{ id: 'view-Sub401', viewClass: Sub401View },
		{ id: 'view-Sub402', viewClass: Sub402View },

		{ id: 'view-Settings', viewClass: KONtx.views.AboutBox },
		{ id: 'snippet-main', viewClass: SampleSnippetView },

	],
	defaultViewId: 'view-Main',
	settingsViewId: 'view-Settings',
});

EventHandlers.onApplicationStartup.subscribeTo(KONtx.application, ['onApplicationStartup'], EventHandlers);
EventHandlers.onNetworkHideDialog.subscribeTo(KONtx.application, ['onNetworkHideDialog'], EventHandlers);
EventHandlers.handlerPlayerEvent.subscribeTo(KONtx.mediaplayer, ['onStateChange'], EventHandlers);
