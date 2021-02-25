/**
  @author dilip parmar
 **/

var SampleSnippetView = new KONtx.Class({
	ClassName: 'SnippetView',
	
	Extends: KONtx.system.AnchorSnippetView,
		
	createView: function() {

var c2 = new KONtx.element.Image({
    src: "Images/dock_logo.png",//right now scale for logo is 224 by 70 pxls
    styles: {
	width: (this.width),
	height: (this.height), //when we remove the comments, it will expands 4 pxl on top and 4 pxl on bottom
        vAlign: "center",
        hAlign: "center",
	//hOffset: (this.height - 2),
		
    }
}).appendTo(this);

	},
});






