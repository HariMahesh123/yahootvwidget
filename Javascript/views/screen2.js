/**
  pdilip84@yahoo.com
 **/


var Sub400View = new KONtx.Class({
	ClassName: 'Sub400View',
	
	Extends: KONtx.system.FullscreenView,

	//code to focus on image button
	focusView : function() {							
		
		//take value focus_view from update view, if it comes from sidebar, the value for first_time is 0 so focus will set to middle one
		//we allready set target value = 1 when we get target value = 0 from update view
 
		if((KONtx.messages.fetch("first_time")) === "yes")
		{
			print("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&get focus first time that is in center");
			print(KONtx.messages.fetch("target")); 
			//when page parsed first time , it must be on page one o.w from screen3 to screen2 it will be on last focused image.
			var page = 1;
			this.controls.grid.changePage((page - 1), {refresh:true});
			this.controls.grid.focus();
			this.controls.grid.focusCell({row: 0, column: 2 });
		}
		else
		{
			print("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&get focus on previous image");
			print(KONtx.messages.fetch("target"));

			//screen3 to screen2, focus on that image that is last visited on sc3
			var final_new_no = (KONtx.messages.fetch("sc3_number") + 1);
			var final_new_page = Math.floor((final_new_no) / (5));
			var final_new_position = Math.floor((final_new_no) % (5));

			print ("###########from sc3 array no is------------>"+(KONtx.messages.fetch("sc3_number")));
			print ("###########from sc3 insert random no is------------>"+final_new_no);
			print ("###########from sc3  current page------------>"+final_new_page);
			print ("###########from sc3 current position------------>"+(final_new_position - 1));    

			if( KONtx.messages.fetch("sc3_number") === 4)
			{
			this.controls.grid.changePage(0, {refresh:false});
			this.controls.grid.focusCell({row: 0, column: 4 });
			}
			else
			{
			this.controls.grid.changePage((final_new_page), {refresh:false});
			this.controls.grid.focusCell({row: 0, column: (final_new_position - 1) });
			}
			
		}

			
		},   
	//end of code

	//define the variables
		config: {
			rows:    1,
			columns: 5,		
		},
	//end of variables

	createView: function() {

//define varialbles		
		var count = 3;
		
		var __baseID = (this.id||this.ClassName||this._ktxID+'.ImageGrid');
//end of variables


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
//end of line image

//create lable to show dreamtv link on left top

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
//end of dreamtv link on left top

//code to define the logo image
	this.controls.logoimage = new KONtx.element.Image({
						    src: "Images/top_logo.png",
						    styles: {
								vOffset: KONtx.utility.scale(7),
								hOffset: KONtx.utility.scale(10),
						   	}
						}).appendTo(this);
//end code for dremtv logo


//create lable to show error in case on wrong parsing
		this.controls.label = new KONtx.element.Text({
		styles: {
				fontSize: KONtx.utility.scale(20),
				vAlign: "center",
				hAlign: "center",
				color: "#FFFFFF",				
			},
		}).appendTo(this);
//end of lable in center

//create lable to show catagory at bottom end

		this.controls.catlabel = new KONtx.element.Text({
		styles: {
				fontSize: KONtx.utility.scale(18),
				fontFamily: "Helvetica Neue Bold",
				paddingTop: KONtx.utility.scale(70),		
				vAlign: "top",
				hAlign: "left",
				color: "#FFFFFF",
				
			},
		}).appendTo(this);
//end of catagory label


//create page indicator in bottom
		this.controls.pageindicator = new KONtx.control.PageIndicator({
			id: __baseID+'.PageIndicator',
			styles: {
				height: 25,
				width: KONtx.utility.scale(140),
				paddingTop: KONtx.utility.scale(170),	
				//hOffset: (140),				
				//vAlign: 'top',
				hAlign: "center",
				vOffset: (this.height - 180),
			},
			textStyles: {
					color: '#FFFFFF',
					fontFamily: "Helvetica Neue Condensed Bold",					
				    },
		}).appendTo(this);
//end of page indicator

//metadata control
		this.controls.metadata = new KONtx.control.MetadataDisplay({
			id: __baseID+'.Metadata',
			wrap: true,
			content: new KONtx.element.Image({
					src: "Images/back_line.png",
				    }),
			styles: {
				height: 27,
				wrap: true,
				width: ((this.width)),
				vAlign: 'bottom',
				hAlign: "center",
				vOffset: this.height - this.controls.pageindicator.height - 90,
			},
			textStyles: {
					color: '#FFFFFF',	
					wrap: true,				
					fontSize: KONtx.utility.scale(14),
					fontFamily: "Helvetica Neue",						
					hAlign: 'center',
					vAlign: 'center',
				    },			
		}).appendTo(this);

//end of printing in metadata


//code the define the home button
	this.controls.homeButton = new KONtx.control.TextButton({
            id: 'standard-text-button2',
            styles: {
			height: KONtx.utility.scale(40),
			width: KONtx.utility.scale(60),
			hOffset: (this.width - 100),   
			vOffset: KONtx.utility.scale(70),						
            },
	events: {
		onSelect: function(event) {	
			KONtx.application.loadView('view-Main');
			}
		},	
        }).appendTo(this);				
//end code for home button

//code to define the home image on button
	this.controls.homeimage = new KONtx.element.Image({
		src: "Images/home.png",
		styles: {
			height: KONtx.utility.scale(40),
			width: KONtx.utility.scale(40),
			hOffset: (this.width - 90),   
			vOffset: KONtx.utility.scale(70),
		/*vOffset: KONtx.utility.scale(480),
		vAlign: "bottom",
		hAlign: "center",*/
			},							
		}).appendTo(this);
//end to put the home image on button


//define grid view and style
		this.controls.grid = new KONtx.control.Grid({
			id: __baseID+'.Grid',
			rows: this.config.rows,
			columns: this.config.columns,
			styles: {
				width: this.width,
				height:230,
				vOffset: (this.height - 
							this.controls.logoimage.height - 
							this.controls.pageindicator.height - 
							this.controls.metadata.height - 200) / 2
			},
			cellCreator: this.imageCellCreator,
			cellUpdater: this.imageCellUpdater,			
			manageWaitIndicator: true,
		}).appendTo(this);
//end of grid view



//define page
		this.controls.grid.attachAccessories( this.controls.pageindicator, this.controls.metadata );
//end of page

		//this._start();

			},//end of function create view

	_start: function() {

log("*********************************WELCOME TO SCREEN 2*********************************");

var category_title = KONtx.messages.fetch("selected_category");
var category_no = KONtx.messages.fetch("category_no");
var category_xml = KONtx.messages.fetch("category_xml_name");

//xml_url is needed to parse the xml file
var xml_url = (KONtx.messages.fetch("base_url")+"/"+category_xml+"/"+category_xml+".xml");
//end of code

//store full url to load the image
KONtx.messages.store("thumbnail_url",(KONtx.messages.fetch("streaming_url")+"/"+category_xml+"/"));
//end of code to load full url of image fromsmeraproduction server

//set the category title in bottom of screen
this.controls.catlabel.setText(("     "+category_title));
//end of category title

log("**************************xml going to be parse****************************"+xml_url);


//this.controls.label.setText(xml_url);

	this._parse(xml_url);
	},
	
	_parse: function(xml_url) {

		try
		{
		var request = new XMLHttpRequest();
		request.open("GET",xml_url,false);
		request.send();

		// if successfully requested then
		if(request.status == 200)
		{
		var res = request.responseXML;
		var parent_tag = res.documentElement.tagName;

		//find total child in xml file
		var total_title = res.documentElement.getElementsByTagName("Title");

		ary_title = [];
		ary_short_desc = [];
		ary_desc = [];
		ary_url = [];
		ary_image = [];
		ary_dir = [];
		ary_dur = [];
		ary_date = [];
		ary_actor1 = [];
		ary_actor2 = [];
		ary_actor3 = [];

		var total_length = total_title.length;
		KONtx.messages.remove("total_length");
		KONtx.messages.store("total_length",total_length);

		//will print total children in xml type
		//this.controls.label.setText(total_length);

		//for each children find out subchildren
		for(var j = 0 ; j < total_length ; j++)
		{
		print ("**********************************child No::"+(j+1)); 
			try
			{
			var suc = (res.documentElement.childNodes.item(j).childNodes.length);
			//set this simple_funda variables to fill null values in array to resp the title
			var simple_funda_short_desc = 0;
			var simple_funda_director = 0;
			var simple_funda_releasedate = 0;
			var simple_funda_duration = 0;
			var simple_funda_actor1 = 0;
			var simple_funda_actor2 = 0;
			var simple_funda_actor3 = 0;
			
			//this will print the total tags in subchild
			print ("***********total tags in this child:::::::::::"+suc);
				for(var k = 0 ; k < suc ; k++)			
				{
					
					try
					{
					
							//print the tagname		 	
							var tagname = res.documentElement.childNodes.item(j).childNodes.item(k).tagName;
							print ("**************tag value"+(k+1)+":::::::::" + tagname);
					
							if(tagname === "Title")
							{
								ary_title.push({
								name: res.documentElement.childNodes.item(j).childNodes.item(k).firstChild.data,
								});

								print ("*******************Title:::::::::"+ary_title[k].name);
							}

							if(tagname === "ShortDesc")
							{
								ary_short_desc.push({
								name: res.documentElement.childNodes.item(j).childNodes.item(k).firstChild.data,
								});
								simple_funda_short_desc = 1;
								print ("*******************Short Description:::::::::"+ary_short_desc[k].name);
						
						
							}
					
							if(tagname === "Description")
							{
								ary_desc.push({
								name: res.documentElement.childNodes.item(j).childNodes.item(k).firstChild.data,
								});

								print ("*******************Description:::::::::"+ary_desc[k].name);
							}
					
							if(tagname === "Streamurls")
							{
								ary_url.push({
								name: res.documentElement.childNodes.item(j).childNodes.item(k).firstChild.data,
								});

								print ("*******************Streamurls:::::::::"+ary_url[k].name);
							}
					
							if(tagname === "Thumbnail")
							{
								ary_image.push({
								name: res.documentElement.childNodes.item(j).childNodes.item(k).firstChild.data,
								});

								print ("*******************Thumbnail:::::::::"+ary_image[k].name);
							}
					
							if(tagname === "Director")
							{								
								ary_dir.push({
								name: res.documentElement.childNodes.item(j).childNodes.item(k).firstChild.data,
								});
								simple_funda_director = 1;
								print ("*******************Director:::::::::"+ary_dir[k].name);
							}
							
							if(tagname === "Duration")
							{								
								ary_dur.push({
								name: res.documentElement.childNodes.item(j).childNodes.item(k).firstChild.data,
								});
								simple_funda_duration = 1;
								print ("*******************Duration:::::::::"+ary_dur[k].name);
							}

							if(tagname === "ReleaseDate")
							{								
								ary_date.push({
								name: res.documentElement.childNodes.item(j).childNodes.item(k).firstChild.data,
								});
								simple_funda_releasedate = 1;
								print ("*******************Release Date:::::::::"+ary_date[k].name);
							}

							if(tagname === "Actor1")
							{								
								ary_actor1.push({
								name: res.documentElement.childNodes.item(j).childNodes.item(k).firstChild.data,
								});
								simple_funda_actor1 = 1;
								print ("*******************Actor1:::::::::"+ary_actor1[k].name);
							}	

							if(tagname === "Actor2")
							{								
								ary_actor2.push({
								name: res.documentElement.childNodes.item(j).childNodes.item(k).firstChild.data,
								});
								simple_funda_actor2 = 1;
								print ("*******************Actor2:::::::::"+ary_actor2[k].name);
							}	
					

							if(tagname === "Actor3")
							{								
								ary_actor3.push({
								name: res.documentElement.childNodes.item(j).childNodes.item(k).firstChild.data,
								});
								simple_funda_actor3 = 1;
								print ("*******************Actor3:::::::::"+ary_actor3[k].name);
							}	

					}//end of inner try block
					catch(e)
					{
						print ("**************ERROR***************some value are not found");
					}			
										
				}//end of inner for loop				


				//set null values in array if that video have not short description
				if (simple_funda_short_desc === 0)
				{
					ary_short_desc.push({
							name: "NOT",
							});
					print ("******************************************NOT**************SHORT DESCRIPTION");
					
				}
				//end of null director

				//set null values in array if that video have not director value
				if (simple_funda_director === 0)
				{
					ary_dir.push({
							name: "NOT",
							});
					print ("******************************************NOT**************DIRECTOR");
					
				}
				//end of null director

				//set null values in array if that video have not release date value
				if (simple_funda_releasedate === 0)
				{
					ary_date.push({
							name: "NOT",
							});
					print ("******************************************NOT**************RELEASEDATE");
					
				}
				//end of null release date

				//set null values in array if that video have not duration time
				if (simple_funda_duration === 0)
				{
					ary_dur.push({
							name: "NOT",
							});
					print ("******************************************NOT**************DURATION");
					
				}
				//end of null duration time

				//set null values in array if that actor1 have not any value
				if (simple_funda_actor1 === 0)
				{
					ary_actor1.push({
							name: "NOT",
							});
					print ("******************************************NOT**************ACTOR1");
					
				}
				//end of null actor1

				//set null values in array if that actor2 have not any value
				if (simple_funda_actor2 === 0)
				{
					ary_actor2.push({
							name: "NOT",
							});
					print ("******************************************NOT**************ACTOR2");
					
				}
				//end of null actor2

				//set null values in array if that actor3 have not any value
				if (simple_funda_actor3 === 0)
				{
					ary_actor3.push({
							name: "NOT",
							});
					print ("******************************************NOT**************ACTOR3");
					
				}
				//end of null actor3


			}//end of try block
			catch(e)
			{
			print ("not found tags in child no::"+(j+1));
			}
			
		};//end of outer for loop
		
					log("****************************************************Array values********************************************");

					print ("**********************************title"+ary_title.length);
					print ("**********************************shortdesc"+ary_short_desc.length);
					print ("**********************************description"+ary_desc.length);
					print ("**********************************url"+ary_url.length);
					print ("**********************************thumbnail"+ary_image.length);
					print ("**********************************director"+ary_dir.length);
					print ("**********************************duration"+ary_dur.length);
					print ("**********************************releasedate"+ary_date.length);
					print ("**********************************Actor1"+ary_actor1.length);
					print ("**********************************Actor2"+ary_actor2.length);
					print ("**********************************Actor3"+ary_actor3.length);

					//this.controls.label.setText(ary_short_desc.length);
			

		log("*****************************successfully parse*****************");
		}//end of if block
		}//end of try block
		catch(e)
		{
		print ("ERROR*************ERROR*****************xml parsing error*****************ERROR**************");
		}//end of catch block

		//declare one blank array

		new_ary_image = [];
		new_ary_title = [];

		//declare one variable
		var j = 0;

		//code to create full link to display the images form smeraproduction server
		log("**********************new url for image**********************"+(KONtx.messages.fetch("thumbnail_url")));
		//edn of code to create full link

		ary_image.forEach(function (o) {
				new_ary_image[j] = ((KONtx.messages.fetch("thumbnail_url"))+o.name);	

				if((ary_short_desc[j].name) === "NOT")
				{
				new_ary_title[j] = ary_title[j].name;	
				}
				else
				{			
				new_ary_title[j] = (ary_title[j].name +"   ::  "+ ary_short_desc[j].name);
				}
				j++;
        		});

		//we use this code so declared array demo is assing to this.cache.imgData

				this.cache.imgData = new_ary_image;
				this.cache.imgData =this.cache.imgData .slice(0,total_length).map(function(src,i){return{src:src,label:new_ary_title[i]}});

		//filling images in grid
				this.controls.grid.changeDataset(this.cache.imgData);
				this.controls.grid.focusCell({row: 0, column: 2 });
		//end filling	
				

		},//end of parse function

	updateView: function() {
		//target value always set to 0 if it comes from sidebar and set value first_time = yes the control goes to focus view

		if((KONtx.messages.fetch("target")) === "0")
		{
		KONtx.messages.remove("first_time");
		KONtx.messages.store("first_time","yes");
		print ("################parse new category#################");
		this._start();

		//on sidebar it is 0 so it goes in first time parsing and it takes value 1 so it will not again parse with back from screen3
		KONtx.messages.remove("target");
		KONtx.messages.store("target","1");
		}
		else
		{
		KONtx.messages.remove("first_time");
		KONtx.messages.store("first_time","no");
		print ("################do not parse category#################");
		}


	},//end of function

	imageCellCreator: function () {
		return new KONtx.control.PhotoGridCell({
			styles: this.getCellDimensions(),
			cellPadding: KONtx.utility.scale(8),//that will define the space between two images
			events: {
				// this onSelect fires in context of cell
				onSelect: function (event){

					var dataItemNumber = this.getCellDataIndex();


					KONtx.messages.remove("sc3_number");
					KONtx.messages.store("sc3_number",dataItemNumber);

					KONtx.messages.remove("sc3_title");
					KONtx.messages.remove("sc3_description");
					KONtx.messages.remove("sc3_image");
					KONtx.messages.remove("sc3_video");
					KONtx.messages.remove("sc3_director");
					KONtx.messages.remove("sc3_releasedate");
					KONtx.messages.remove("sc3_duration");
					KONtx.messages.remove("sc3_actor1");
					KONtx.messages.remove("sc3_actor2");
					KONtx.messages.remove("sc3_actor3");

					KONtx.messages.store("sc3_title",ary_title);
					KONtx.messages.store("sc3_description",ary_desc);
					KONtx.messages.store("sc3_image",ary_image);
					KONtx.messages.store("sc3_video",ary_url);
					KONtx.messages.store("sc3_director",ary_dir);
					KONtx.messages.store("sc3_releasedate",ary_date);
					KONtx.messages.store("sc3_duration",ary_dur);
					KONtx.messages.store("sc3_actor1",ary_actor1);
					KONtx.messages.store("sc3_actor2",ary_actor2);
					KONtx.messages.store("sc3_actor3",ary_actor3);

					var sc2_selected_title = ary_title[dataItemNumber].name;
					var sc2_selected_description = ary_desc[dataItemNumber].name;	
					var sc2_selected_image = ary_image[dataItemNumber].name;
					var sc2_selected_video = ary_url[dataItemNumber].name;
					var sc2_selected_director = ary_dir[dataItemNumber].name;
					var sc2_selected_releasedate = ary_date[dataItemNumber].name;
					var sc2_selected_duration = ary_dur[dataItemNumber].name;
					var sc2_selected_actor1 = ary_actor1[dataItemNumber].name;					
					var sc2_selected_actor2 = ary_actor2[dataItemNumber].name;					
					var sc2_selected_actor3 = ary_actor3[dataItemNumber].name;					
					KONtx.messages.store("video_to_paly", sc2_selected_video);

					KONtx.application.loadView('view-Sub401', { pass_number: dataItemNumber , pass_title: sc2_selected_title , pass_description: sc2_selected_description , pass_image: sc2_selected_image, pass_video: sc2_selected_video , pass_director: sc2_selected_director , pass_releasedate: sc2_selected_releasedate , pass_duration: sc2_selected_duration , pass_actor1: sc2_selected_actor1 , pass_actor2: sc2_selected_actor2 , pass_actor3: sc2_selected_actor3});
															
				}//end of onselect
			}//end of events:
		});//end of return new
	},//end of function()

	
	imageCellUpdater: function (cell, dataitem) {
		cell.setSources(dataitem);
//		this.controls.demolabel.setText(dataitem);
	},


});//end of main class
