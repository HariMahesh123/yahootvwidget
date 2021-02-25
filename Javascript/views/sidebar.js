/**
  pdilip84@yahoo.com
 **/

var SidebarView = new KONtx.Class({
 	ClassName: 'SidebarView',
	
	Extends: KONtx.system.SidebarView,
	
	createView: function() {

//define the button height
       		var buttonHeight = KONtx.utility.scale(32);
//

//define varialbles		
		
		var __baseID = (this.id||this.ClassName||this._ktxID+'.ImageGrid');

//end of variables


//define the base url and streaming url 

//		KONtx.messages.store("base_url","http://localhost");
		KONtx.messages.store("base_url","http://www.dreamtvs.com/roku");
		KONtx.messages.store("streaming_url","http://smeraproductions.com/roku");
		KONtx.messages.store("ad_url_php_file","http://www.smeraproductions.com/ecosystem/ads/paads.php");
				


		var parse_category_file = (KONtx.messages.fetch("base_url")+"/"+"categories.xml");
//end of code of storing variables value      
 		
//code to define the top space        
		var topContainer = new KONtx.control.EmptySpace({
			    styles: {
					height: KONtx.utility.scale(150)
			    }
			}).appendTo(this);
//end of top space
						
//code to define the image in the empty space
		topimage = new KONtx.element.Image({	
					src: "Images/wait.png",					    
					styles: {
					vAlign: "center",					
					loadingSrc: 'Images/wait.png',
					missingSrc: 'Images/missing.png',
					hAlign: "center",
					width: 295,
					height: 150,	
					}
				}).appendTo(topContainer);
//end of empty space

//create page indicator in bottom
		this.controls.pageindicator = new KONtx.control.PageIndicator({
			id: __baseID+'.PageIndicator',
			styles: {
				height: 24,				
				width: this.width,
				vAlign: 'bottom',
				hAlign: "center",
			},
			textStyles: {
					color: '#FFFFFF',
					fontFamily: "Helvetica Neue Condensed Bold",					
				    },
		}).appendTo(this);
//end of page indicator


//-------------------------------------------logic to parse categories.xml file---------------------------------
		try
		{
		var request = new XMLHttpRequest();

		request.open("GET",parse_category_file,false);
		request.send();

		// if successfully requested then
		if(request.status == 200)
		{
			var res = request.responseXML;

			var total_title = res.documentElement.getElementsByTagName("Title");

			var total_categories = total_title.length;

			KONtx.messages.remove("total_categories");
			KONtx.messages.store("total_categories",total_categories);

			print("******************************total_categories founds are:::::::::::"+total_categories);

			category = [];
			category_type = [];
			category_picture = [];
			imagepath = [];

		for(var k = 0 ; k < total_categories ; k++)
		{
						//find the tagname		 	
						try
						{			
						var category_title = res.documentElement.childNodes.item(k).tagName;

						var category_name = res.documentElement.childNodes.item(k).childNodes.item(0).firstChild.data;

						var category_picture_name = res.documentElement.childNodes.item(k).childNodes.item(1).firstChild.data;		
						
						//////////////get category title						
						category.push({
							name: category_title,
							});
						print ("category title:::::::::::::::::::::::::::::::::::::"+ category[k].name);

						/////////////get category name
						category_type.push({
							name: category_name,
							});
						print ("category Name:::::::::::::::::::::::::::::::::::::"+ category_type[k].name);

						////////////get image name
						category_picture.push({
							name: category_picture_name,
							});
						print ("category picture Name:::::::::::::::::::::::::::::::::::::"+ category_picture[k].name);

						///////////make full image source path
						var image_source = (KONtx.messages.fetch("streaming_url")+ "/"+category_picture[k].name);
						imagepath.push({
							name: image_source,
							});
						print ("Image source from server:::::::::::::::::::::::::::::::::::::"+ imagepath[k].name);
			
						}//end of inner try block
						catch(e)
						{
						print ("******ERROR*******ERROR********ERROR*********category name not defined");
						}//end of inner catch block
		}//end of for loop

		}//end of if statement
		}//end of try block
		catch(e)
		{
		print ("ERROR*************ERROR*****************ERROR*****************ERROR**************");
		}//end of catch block
//-------------------------------------------end of logic of parsing-----------------------------------------------------------
        
//code to create grid
		this.controls.listGrid = new KONtx.control.Grid({
		    columns: 1,
		    rows: 9,
		    carousel: true,
				cellCreator: this._cellCreator,
				cellUpdater: this._cellUpdater,
		    styles: {
		        vOffset: topContainer.outerHeight + 1 ,
		        width: this.width,
		        height: buttonHeight * (9)
		    },
		    manageWaitIndicator: true
		}).appendTo(this);
//

//code to active the page indicator in bottom of sidebar
		this.controls.listGrid.attachAccessories( this.controls.pageindicator );
//end of code of page indicator
	      
		},//end of createview

	
//code for cellcreator
		_cellCreator: function() {
			var cell = new KONtx.control.GridCell({
				styles: {
					height: KONtx.utility.scale(33),
					width: this.width,
				},
				events: {
					onSelect: function(event) {
						log("************************************************You selected Button with original 'i' # of: " + this.originalButtonNumber);

						
						log("************************************************you selected category named:::::" + this.textLabel.data);

						KONtx.messages.remove("selected_category");
						KONtx.messages.remove("category_no");
						KONtx.messages.remove("category_xml_name");

						KONtx.messages.store("selected_category",category_type[this.originalButtonNumber].name);
						KONtx.messages.store("category_no",this.originalButtonNumber);
						KONtx.messages.store("category_xml_name",category[this.originalButtonNumber].name);

						KONtx.application.loadView('view-Sub400');
						
					},
					onFocus: function(event) {
					log("******************************************image path::"+ imagepath[this.originalButtonNumber].name);
					topimage.setSource(imagepath[this.originalButtonNumber].name);
					},
				}
			});
			cell.textLabel = new KONtx.element.Text({
				styles: {
					color: '#FFFFFF',
		        fontSize: KONtx.utility.scale(18),
		        hAlign: 'left',
			paddingLeft: KONtx.utility.scale(5),
		        vAlign: 'center'
				}
			}).appendTo(cell);
			return cell;
		},
//end of cell creator
	
//code for cell updator
		_cellUpdater: function(cell, dataitem) {
			cell.textLabel.data = dataitem.label;
			cell.originalButtonNumber = dataitem.buttonNumber;
			//this.topimage.setSource(imagepath[dataitem]);
			log("******************************************image path::");
		},
//end of cell updator
	
		updateView: function() {

		//declare the variable that gives the idea whethe we have to parse the file on screen2 update or not.
		//at the 
		KONtx.messages.remove("target");
		KONtx.messages.store("target","0");

		var arr = [];
		for (var i = 0; i < (KONtx.messages.fetch("total_categories")); i++) {
		    arr.push({
					label: category_type[i].name,
					buttonNumber: i,
				});
	       	}//end of for loop
			this.controls.listGrid.changeDataset(arr);
				
		}//end of update view


});//end of class

