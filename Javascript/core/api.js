/**
 * @author jstone
 */


$API = function() {
	
	// this code here is just a stub for now
	// future samples will contain more real examples
	
	var playlists = [
		//{ ID: 1, entries: [ { url: "http://www.smeraproductions.com/roku/film/Omega35.mp4", bitrate: 300, entryID: 1}]},
		//{ ID: 2, entries: [ { url: "http://www.smeraproductions.com/roku/film/177_SD_MP4_480p.mp4", bitrate: 300, entryID: 2}]},
	];
	
	return {
		fetchPlaylists: function() {
			KONtx.messages.store("playlists", playlists);
			for each(var playlist in playlists) {
				KONtx.messages.store("playlist." + playlist.ID, playlist);
			}
		}
	}
}();

