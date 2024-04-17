

function openTab(selectedTabID,selectedTabLink) {
			
		  	allTabs = document.getElementsByClassName("tabcontent"); // initialized allTabs variable			
		  	for (i = 0; i < allTabs.length; i++) {   // "closes" all the tabs
		    		allTabs[i].style.display = "none";
		  	}
			document.getElementById(selectedTabID).style.display = "block";  // opens selected tab

		  	allTabLinks = document.getElementsByClassName("tablink");  			
		  	for (i = 0; i < allTabLinks.length; i++) {   // resets tab link colors
		    		allTabLinks[i].style.backgroundColor = 'Azure';
		  	}			
			selectedTabLink.style.backgroundColor = 'LightBlue';
			
		}


		function downloadCsv(){


			optionsRows = [];
		  	allFormPages = document.forms;
			for (i = 0; i < allFormPages.length; i++) { 
				myFormData = new FormData(allFormPages[i]);
			
			    data = Object.fromEntries(myFormData.entries());	
			
				headers = Object.keys(data);	
				values = Object.values(data);
                
				for (j = 0; j < headers.length; j++) {
                    
                    if  (headers[j].includes('originMessageTextSize')){
               //     if  (headers[j]=== 'setupScript,originMessageTextSize'){
                        
                        console.log('AAA');
                        headers[j]='setupScript,originAAMessageTextSize';
                    } else{
                        
                        console.log('BB');
                        console.log(typeof headers[j]);
                    }
					line = [ headers[j], values[j] ];		
					optionsRows.push(line.join(','));
				}
			}
			
			
			optionsData = optionsRows.join('\r');
			optionsBlob = new Blob([optionsData], { type: 'text/csv' });
			optionsUrl = window.URL.createObjectURL(optionsBlob)
			a = document.createElement('a')
			a.setAttribute('href', optionsUrl)
			a.setAttribute('download', 'options.csv');
			a.click()	;
            downloadURI() ;
            downloadURI2() ;
		}



function downloadURI() 
{
    var link = document.createElement("a");
    // If you don't know the name or want to use
    // the webserver default set name = ''
    uri="website/files/default.csv";
    link.setAttribute('download', 'default.csv');
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
}
function downloadURI2() 
{
    var link = document.createElement("a");
    // If you don't know the name or want to use
    // the webserver default set name = ''
    uri="website/files/trials.csv";
    link.setAttribute('download', 'trials.csv');
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
}

  
      
    function toggleExpandableWindow(button,windowId) {
      var expandableWindow = document.getElementById(windowId);
     console.log('HH');
     console.log(expandableWindow.style.display);
      expandableWindow.style.display = (expandableWindow.style.display === 'inline-block') ? 'none' : 'inline-block';
      button.classList.toggle('expanded', expandableWindow.style.display === 'inline-block');
    }

      
    

document.querySelector('#INPUT_STYLE').insertAdjacentHTML('beforeend', `     


    /* Style to show expandable window when the form is focused */
    .form-container:focus-within .expandable-window {
      display: block;
    }
		/* Style the tab (top row with buttons) */
		.tab {
		  overflow: hidden;
		  border: 1px solid #ccc;
		  background-color: #f1f1f1;
		}
		
		/* Style the buttons inside the tab (buttons to toggle windows) */
		.tab button {
		  background-color: inherit;
		  float: left;
		  border: 1px solid #ccc;
		  outline: none;
		  cursor: pointer;
		  padding: 14px 16px;
		  transition: 0.3s;
		  font-family: Arial;
		  font-size: 15px; /* this is the font size for the tob buttons to toggle between tabs */ 
		}
		
				
		/* Style the tab content - outside of the user inputs */
		.tabcontent {
		  display: none;
		  border: 1px solid #ccc;
		  border-top: none;
		  font-family: Arial;
		  font-size: 15px; /* this is the font size for the non-input text within the form tabs */ 
		  line-height: 0.75;
    		  text-align: left;
		  width: 100%
        	  vertical-align: top;
	   	  padding: 0px;
       		  margin: 0px;
		}
  
		.tabcontent inputcolumn{
  		  display: inline-block;
    		  width: 69%;
	   	  padding: 0px;
       		  margin: 0px;
		}
  
		.tabcontent figurecolumn{
  		  display: inline-block;
    		  width: 29%;
        	  vertical-align: middle;
	  	  height: 100%;
       		  vertical-align:top; 
	   	  padding: 0px;
       		  margin: 0px;
		}
  
		.tabcontent inputdivider{
  		  display: block;
    		  width: 100%;
		  background-color: #E0FFFF;   
    		  color: #191970;
		  font-weight: bold;
		  padding-top: 10px;		  
    		  padding-bottom: 10px;
    		  margin-top: 15px;
    		  margin-bottom: 10px;
    		  font-size: 15px;
	          text-align: center;
			
		}



		.tabcontent inputcolumn name {
		font-weight: bold;
  		display: inline-block;
    		width: 35%;
                padding-top: 15px;
                padding-left: 10px;
                padding-right: 10px;
                padding-bottom: 0px;
		margin: 0px;
        vertical-align: top;

      		} 
	
  		.tabcontent inputcolumn inputs {
  		 display: inline-block;
    		 width: 61%;  
		 margin: 0px;  
  		}
	
		.tabcontent inputcolumn name:before
		{
		    content: "";
		    display: block;  
		}
	
	
		.tabcontent label {
                  padding-right: 2px;
      		  padding-left:2px;
  		}

  
		.tabcontent inputcolumn note {
		font-size: 90%;
		color: #2F4F4F;
  		font-style: italic;
		display: block; 
                padding-top: 5px;
                padding-left: 10px;
                padding-right: 10px;
                padding-bottom: 0px;}
  
		
		/* Style for form inputs - text inputed by users in stirng or number places (not text areas) */
		input  {  
            margin-top: 10px;
            margin-bottom: 5px;
		}
  		input[type=number] {
		  	font-family: Arial;
			font-size: 15px; 
   			width: 55px;
            margin-right: 10px;
padding: 0px
    		}
  		input[type=radio] {
            margin-right: 0px; 
            margin-left: 20px; 
    		}
  		input[type=checkbox] {
            margin-right: 0px; 
            margin-left: 20px; 
    		}

 
		
		/* Style for form "textarea" inputs - inputed by users */
		textarea{
		  	font-family: Arial;
			font-size: 15px;
            margin-bottom: 0px;
            margin-top: 0px; 
    position: relative;
    top: 5px; 

		} 


		
		/* Style of the overall container for download button  */
		.buttoncontainer{	
    		  text-align: center;
		}
		
		/* Style of the "download" button underneath tabs */
		.btn{			
		  padding: 30px 30px;
		  font-family: Arial;
		  font-size: 20px;
  		  font-weight: bold;
		}



 .expwindow {
      display: none;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 10px;
      padding-right: 0px;
      margin: 0px;
      border: none;
        background-color:Azure;  
    		  width: 100%; 
    }
.expand-button {
      padding-top: 20px;
      padding-bottom: 0px;
      padding-left: 10px;
      padding-right: 0px;
      border: none;
   /*   font-size: smaller;
      color: gray; */ 
color: indigo;
text-decoration: underline;
      font-style: italic;
        background-color:white;
font-size: 14px;
		  font-family: Arial;
      display: block;
        
    }
.expand-button::before { 
      content: '\\25B6'; 
        font-style: normal;
      display: inline-block;
      transform: rotate(0deg);
      transition: transform 0.3s ease-in-out;
    }
    
.expand-button.expanded::before {
      content: '\\25B6'; 
      transform: rotate(90deg);
    }

  `);

document.querySelector('#INPUT_PAGE').insertAdjacentHTML('beforeend', `     


<div class="tab">
		<button class="tablink" onclick="openTab('INPUT_TASK',this)">      <!-- Menu to open tabs  -->
			Task
		</button>
		<button class="tablink" onclick="openTab('INPUT_FEEDBACK',this)">
			Reinforcement
		</button>
		<button class="tablink" onclick="openTab('INPUT_ADAPT',this)">
			Adaptation
		</button>
		<button class="tablink" onclick="openTab('INPUT_HANDS',this)">
			Motion Capture
		</button>
		<button class="tablink" onclick="openTab('INPUT_GAMEOBJECTS',this)">
			Game Objects
		</button>
		<button class="tablink" onclick="openTab('INPUT_BETWEENTRIALS',this)">
			Between Trials
		</button>
		<button class="tablink" onclick="openTab('INPUT_PHASES',this)">
			Phases
		</button>
		<button class="tablink" onclick="openTab('INPUT_INSTRUCT',this)">
			Download Instructions
		</button>
	</div>

	<div id="INPUT_TASK" class="tabcontent"></div>
	<div id="INPUT_HANDS" class="tabcontent"></div>
	<div id="INPUT_ADAPT" class="tabcontent"></div>
	<div id="INPUT_FEEDBACK" class="tabcontent"></div>
	<div id="INPUT_GAMEOBJECTS" class="tabcontent"></div>
	<div id="INPUT_BETWEENTRIALS" class="tabcontent"></div>
	<div id="INPUT_PHASES" class="tabcontent"></div>
	<div id="INPUT_INSTRUCT" class="tabcontent"></div>


	<br><br>

	<div class="buttoncontainer">
		<button class="btn" onclick="downloadCsv()">     <!-- GENERAL DOWNLOAD BUTTON:  -->
			Download
		</button>
	</div>

  `);


document.getElementsByClassName("tablink")[0].click();

/* allTabL = document.getElementsByClassName("tablink");  
allTabL[0].click(); */


