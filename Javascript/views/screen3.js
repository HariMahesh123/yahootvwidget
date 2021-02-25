/**
	pdilip84@yahoo.com
 **/

var Sub401View = new KONtx.Class({
	ClassName: 'Sub401View',
	
	Extends: KONtx.system.FullscreenView,


	createView: function() {

//define the background image
		new KONtx.element.Image({
			 src: "Images/one.png",
			 styles: {
					width: this.width,
					height: this. height,
			     	}
			}).appendTo(this);
//end of background image
		

//code to define the line image
		this.controls.lineimage = new KONtx.element.Image({
						    src: "Images/back_line.png",
						    styles: {
								vOffset: KONtx.utility.scale(0),
								hOffset: KONtx.utility.scale(0),								
								width: this.width,
								height: KONtx.utility.scale(60),	
						   	}
						}).appendTo(this);
//end to define the background line image


///create lable to show dreamtv link
		this.controls.linklabel = new KONtx.element.Text({
		label: "dreamtvs.com     ",
		styles: {
				fontSize: KONtx.utility.scale(18),
				fontFamily: "Helvetica Neue Bold Italic",
				paddingTop: KONtx.utility.scale(15),	
				vAlign: "top",
				hAlign: "right",
				color: "#FFFFFF",
				
			},
		}).appendTo(this);
//end of link lable

//code to define the logo image
	this.controls.logoimage = new KONtx.element.Image({
						    src: "Images/top_logo.png",
						    styles: {
								vOffset: KONtx.utility.scale(7),
								hOffset: KONtx.utility.scale(10),
						   	}
						}).appendTo(this);
//end of logo image


//code to define the top space for the image of the vedio
		var demowidth = (this.width/2);
		var realwidth = (demowidth/2);		
		
		var topContainer = new KONtx.control.EmptySpace({
		    styles: {
		        height: (this.height /2 - 40),
			width: (this.width /2 - 90),
			vOffset: 80,
	                hOffset: 20,					
		    }
		}).appendTo(this);
//end of top space


//code to define the image in the empty space
		this.controls.image = new KONtx.element.Image({
						   loadingSrc: 'Images/wait.png',
						   missingSrc: 'Images/missing.png',
						    styles: {
								vAlign: "center",
								hAlign: "center",
								height: (this.height /2 - 40),
								width: (this.width /2 - 90),
						   	}
						}).appendTo(topContainer);
//end of image in empty space
	

//code to define the label as the video title
		this.controls.titlelabel = new KONtx.element.Text({
		wrap: true,
		styles: {
				fontSize: KONtx.utility.scale(23),
				fontFamily: "Helvetica Neue Condensed Bold",
				vAlign: "center",
				hOffset: (demowidth + realwidth),
				hAlign: "center",
				vOffset: 100,		               
				color: "#FFFFFF",
			},
		}).appendTo(this);
//end of video title


//code to define the label as vedio description
		this.controls.desclabel = new KONtx.element.Text({
		wrap: true,
		styles: {
				fontSize: KONtx.utility.scale(16),
				fontFamily: "Helvetica Neue",
				width: (this.width - 10) ,
				height: KONtx.utility.scale(100),
				vOffset: (topContainer.outerHeight + 30),
		                hOffset: KONtx.utility.scale(10),
				color: "#FFFFFF"
			},
		}).appendTo(this);	
//end code for description


//code todefine the duration of vedio

		this.controls.durationlabel = new KONtx.element.Text({
			wrap: true,
			styles: {
					fontSize: KONtx.utility.scale(16),
					fontFamily: "Helvetica Neue",
					width: (this.width / 2) ,
					height: KONtx.utility.scale(30),
					vOffset: (this.controls.desclabel.outerHeight),
				        hOffset: KONtx.utility.scale(10),
					color: "#FFFFFF"
				},
			}).appendTo(this);

//end of duration

//code to define the actor1

		this.controls.actor1label = new KONtx.element.Text({
			wrap: true,
			styles: {
					fontSize: KONtx.utility.scale(16),
					fontFamily: "Helvetica Neue",
					width: (this.width / 2) ,
					height: KONtx.utility.scale(30),
					vOffset: (this.controls.desclabel.outerHeight),
				        hOffset: (this.width / 2),
					color: "#FFFFFF"
				},
			}).appendTo(this);

//end of actor1

//code to define the actor2

		this.controls.actor2label = new KONtx.element.Text({
			wrap: true,
			styles: {
					fontSize: KONtx.utility.scale(16),
					fontFamily: "Helvetica Neue",
					width: (this.width / 2) ,
					height: KONtx.utility.scale(30),
					vOffset: (this.controls.actor1label.outerHeight),
				        hOffset: (this.width / 2),
					color: "#FFFFFF"
				},
			}).appendTo(this);

//end of actor2

//code to define the actor3

		this.controls.actor3label = new KONtx.element.Text({
			wrap: true,
			styles: {
					fontSize: KONtx.utility.scale(16),
					fontFamily: "Helvetica Neue",
					width: (this.width / 2) ,
					height: KONtx.utility.scale(30),
					vOffset: (this.controls.actor2label.outerHeight),
				        hOffset: (this.width / 2),
					color: "#FFFFFF"
				},
			}).appendTo(this);

//end of actor3

//code to define the release date

		this.controls.datelabel = new KONtx.element.Text({
			wrap: true,
			styles: {
					fontSize: KONtx.utility.scale(16),
					fontFamily: "Helvetica Neue",
					width: (this.width / 2) ,
					height: KONtx.utility.scale(30),
					vOffset: (this.controls.durationlabel.outerHeight),
				        hOffset: KONtx.utility.scale(10),
					color: "#FFFFFF"
				},
			}).appendTo(this);

//end of release date

//code to define the director name

		this.controls.directorlabel = new KONtx.element.Text({
			wrap: true,
			styles: {
					fontSize: KONtx.utility.scale(16),
					fontFamily: "Helvetica Neue",
					width: (this.width / 2) ,
					height: KONtx.utility.scale(30),
					vOffset: (this.controls.datelabel.outerHeight),
				        hOffset: KONtx.utility.scale(10),
					color: "#FFFFFF"
				},
			}).appendTo(this);

//end code for director name

//code the define the play button
		this.controls.standardButton1 = new KONtx.control.TextButton({
		    id: 'standard-text-button1',
		    label: 'Play',
		    styles: {
			height: KONtx.utility.scale(35),
			width: KONtx.utility.scale(150),
		        vOffset: this.controls.titlelabel.outerHeight,
		        hOffset: (demowidth + realwidth),
			hAlign: "center",
		    },
		 textStyles: {
		        color: '#FFFFFF',
		        fontSize: KONtx.utility.scale(18),
		        paddingLeft: KONtx.utility.scale(5),
		        hAlign: 'center',
		        vAlign: 'center'
		    },
		events: {	
				onSelect: function(event) {
						var selected_final_video = (KONtx.messages.fetch("thumbnail_url")+KONtx.messages.fetch("video_to_paly"));				
						KONtx.messages.remove("final_video");	
						KONtx.messages.store("final_video", selected_final_video);

						print("****************************************THE URL GOING TO PASS IS::::::::"+KONtx.messages.fetch("final_video"));

						KONtx.application.loadView('view-Player', { PlaylistID: KONtx.messages.fetch("final_video") }); 
					}	
			},
		}).appendTo(this);
			
//end code for play button
	
//code the define the return button
		this.controls.standardButton2 = new KONtx.control.TextButton({
		    id: 'standard-text-button2',
		    label: 'Return',
		    styles: {
			height: KONtx.utility.scale(35),
			width: KONtx.utility.scale(150),
		        vOffset: (this.controls.standardButton1.outerHeight + 20),
		        hOffset: (demowidth + realwidth),
			hAlign: "center",
		    },
		textStyles: {
		        color: '#FFFFFF',
		        fontSize: KONtx.utility.scale(18),
		        paddingLeft: KONtx.utility.scale(5),
		        hAlign: 'center',
		        vAlign: 'center'
		    },
		events: {	
				onSelect: function(event) {
						KONtx.application.loadView('view-Sub400');
					}	
			},	
		}).appendTo(this);			
//end code for return button

//code the define the next button
			this.controls.nextButton2 = new KONtx.control.TextButton({
			    id: 'standard-text-button2',

			    styles: {
				height: KONtx.utility.scale(35),
				width: KONtx.utility.scale(50),
				vOffset: (this.controls.standardButton1.outerHeight + 20),
				hOffset: (demowidth + realwidth + 100),
				hAlign: "center",
			    },
			events: {	
					onSelect: function(event) {
						
							var tempo1 = (KONtx.messages.fetch("sc3_number") + 1);

							if(tempo1 >= (KONtx.messages.fetch("total_length")))
							{
								KONtx.application.loadView('view-Sub400');
							}

							KONtx.messages.remove("sc3_number");
							KONtx.messages.store("sc3_number",tempo1);								
				

							var prev_title = KONtx.messages.fetch("sc3_title");
							var prev_description = KONtx.messages.fetch("sc3_description");
							var prev_image = KONtx.messages.fetch("sc3_image");
							var prev_video = KONtx.messages.fetch("sc3_video");
							var prev_director = KONtx.messages.fetch("sc3_director");
							var prev_releasedate = KONtx.messages.fetch("sc3_releasedate");
							var prev_duration = KONtx.messages.fetch("sc3_duration");
							var prev_actor1 = KONtx.messages.fetch("sc3_actor1");
							var prev_actor2 = KONtx.messages.fetch("sc3_actor2");
							var prev_actor3 = KONtx.messages.fetch("sc3_actor3");


							KONtx.messages.remove("video_to_paly");	
							KONtx.messages.store("video_to_paly", prev_video[tempo1].name);
					
					KONtx.application.loadView('view-Sub402', { pass_number: tempo1 , pass_title: (prev_title[tempo1].name) , pass_description: (prev_description[tempo1].name) , pass_image: (prev_image[tempo1].name) , pass_video: (prev_video[tempo1].name) , pass_director: (prev_director[tempo1].name) , pass_releasedate: (prev_releasedate[tempo1].name) , pass_duration: (prev_duration[tempo1].name) , pass_actor1: (prev_actor1[tempo1].name) , pass_actor2: (prev_actor2[tempo1].name) , pass_actor3: (prev_actor3[tempo1].name)});

						}	
				},	
			}).appendTo(this);				
//end code of next button


//code to define the next button image
	this.controls.nextimage = new KONtx.element.Image({
						    src: "Images/3.png",
						    styles: {
								Height: KONtx.utility.scale(10),
								width: KONtx.utility.scale(30),
								vOffset: (this.controls.standardButton1.outerHeight + 25),
								hOffset: (demowidth + realwidth + 100),
								hAlign: "center",
						   	},
							
							}).appendTo(this);
//end code to fix nex image arrow



//code the define the previous button
			this.controls.prevButton2 = new KONtx.control.TextButton({
			    id: 'standard-text-button2',
			    styles: {
				height: KONtx.utility.scale(35),
				width: KONtx.utility.scale(50),
				vOffset: (this.controls.standardButton1.outerHeight + 20),
				hOffset: (demowidth + realwidth - 100),
				hAlign: "center",
			    },
			events: {	
					onSelect: function(event) {
						
							var tempo1 = (KONtx.messages.fetch("sc3_number") - 1);

							if(tempo1 < 0)
							{
								KONtx.application.loadView('view-Sub400');
							}

							KONtx.messages.remove("sc3_number");
							KONtx.messages.store("sc3_number",tempo1);					

							var prev_title = KONtx.messages.fetch("sc3_title");
							var prev_description = KONtx.messages.fetch("sc3_description");
							var prev_image = KONtx.messages.fetch("sc3_image");
							var prev_video = KONtx.messages.fetch("sc3_video");
							var prev_director = KONtx.messages.fetch("sc3_director");
							var prev_releasedate = KONtx.messages.fetch("sc3_releasedate");
							var prev_duration = KONtx.messages.fetch("sc3_duration");
							var prev_actor1 = KONtx.messages.fetch("sc3_actor1");
							var prev_actor2 = KONtx.messages.fetch("sc3_actor2");
							var prev_actor3 = KONtx.messages.fetch("sc3_actor3");

							KONtx.messages.remove("video_to_paly");	
							KONtx.messages.store("video_to_paly", prev_video[tempo1].name);

					
					KONtx.application.loadView('view-Sub402', { pass_number: tempo1 , pass_title: (prev_title[tempo1].name) , pass_description: (prev_description[tempo1].name) , pass_image: (prev_image[tempo1].name) , pass_video: (prev_video[tempo1].name) , pass_director: (prev_director[tempo1].name) , pass_releasedate: (prev_releasedate[tempo1].name) , pass_duration: (prev_duration[tempo1].name) , pass_actor1: (prev_actor1[tempo1].name) , pass_actor2: (prev_actor2[tempo1].name) , pass_actor3: (prev_actor3[tempo1].name)});

						}	
				},	
			}).appendTo(this);				
	//

//---------
//code to define the previous button image
		this.controls.previmage = new KONtx.element.Image({
							    src: "Images/4.png",
							    styles: {
									Height: KONtx.utility.scale(10),
									width: KONtx.utility.scale(30),
									vOffset: (this.controls.standardButton1.outerHeight + 25),
									hOffset: (demowidth + realwidth - 100),
									hAlign: "center",
							   	},
							
								}).appendTo(this);
//
//-------

	},
	updateView: function() {
		this.parent();
		
		//print director value on sc3
		if((this.persist.pass_director) === "NOT")
		{
		this.controls.directorlabel.setText("");
		}
		else
		{ 
		this.controls.directorlabel.setText("Director :: "+this.persist.pass_director);
		}
		//end of director value

		//print duration value on sc3
		if((this.persist.pass_duration) === "NOT")
		{
		this.controls.durationlabel.setText("");
		}
		else
		{
		this.controls.durationlabel.setText("Duration :: "+( Math.floor((this.persist.pass_duration) / (60)))+" m");
		}
		//end of duration

		//print releasedate value on sc3
		if((this.persist.pass_releasedate) === "NOT")
		{
		this.controls.datelabel.setText("");
		}
		else
		{
		this.controls.datelabel.setText("Relase Date :: "+this.persist.pass_releasedate);
		}
		//end of date
		
		//print actor1 value		
		if((this.persist.pass_actor1) === "NOT")
		{
		this.controls.actor1label.setText("");
		}
		else
		{
		this.controls.actor1label.setText("Actors ::   "+this.persist.pass_actor1);
		}
		//end of actor1

		//print actor2 value
		if((this.persist.pass_actor2) === "NOT")
		{
		this.controls.actor2label.setText("");
		}
		else
		{		
		this.controls.actor2label.setText("                  "+this.persist.pass_actor2);
		}
		//end of actor2

		//print actor3 value
		if((this.persist.pass_actor3) === "NOT")
		{
		this.controls.actor3label.setText("");
		}
		else
		{
		this.controls.actor3label.setText("                  "+this.persist.pass_actor3);
		}
		//end of actor3

		this.controls.titlelabel.setText(this.persist.pass_title);
		this.controls.desclabel.setText(this.persist.pass_description);

		var load_picture = (KONtx.messages.fetch("thumbnail_url")+(this.persist.pass_image));
		this.controls.image.setSource(load_picture);			

		//this.controls.standardButton1.focus();	
						
	},//end of update view
	

});
