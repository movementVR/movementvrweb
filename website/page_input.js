

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


            console.log('ATEEEMP CSV Download initiated');
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

      
    
 
document.querySelector('#INPUT_PAGE').insertAdjacentHTML('beforeend', ` 
    <div id="trialDesignParentContainer" > </div>
  `);

/*<div class="buttoncontainer">
		<button class="btn" onclick="downloadCsv()">     <!-- GENERAL DOWNLOAD BUTTON:  -->
			Download
		</button>
	</div>*/


document.getElementsByClassName("tablink")[0].click();

/* allTabL = document.getElementsByClassName("tablink");  
allTabL[0].click(); */


