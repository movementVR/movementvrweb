
const allTabsDefinition = getAllTabsDefinition();
const blockData=getBlockData();
var allTrialDesignForms = {};
var lastClickedTabName = "";

// JavaScript code for trial design 
document.addEventListener("DOMContentLoaded", function() { 
    
    
    
    
    // create containers for trial blocks  
    const parentcontainer = document.getElementById("trialDesignParentContainer");
    parentcontainer.className = "trialContainerParent";  
    const container = document.createElement("div");
    container.className = "trialContainer";     
    parentcontainer.appendChild(container); 
    
    
    // Counts number of rows and columns based on blockData definition
    let maxRow = 0;
    let maxColumn = 0;
    let currColumn = 0;
    blockData.forEach(block => {
        if (typeof block.gridColumn === 'string') {
            currColumn= parseInt(block.gridColumn.split('/')[0].trim()) +  
                parseInt(block.gridColumn.split('span')[1].trim()) -1;
            maxColumn = Math.max(maxColumn, currColumn); 
        } else {
            maxColumn = Math.max(maxColumn, block.gridColumn);
        }
        maxRow = Math.max(maxRow, block.gridRow);
    });    
     
    //container.style.gridTemplateColumns = `repeat(${maxColumn},1fr)`; 
    container.style.gridTemplateColumns = `repeat(${maxColumn-1},1fr) 0.3fr`; 
    container.style.gridTemplateRows = `repeat(${maxRow},1fr)`; 
    
     
   
    // Creates the clickable trial blocks 
    blockData.forEach(block => {
        const blockElement = document.createElement("div");
        container.appendChild(blockElement);
        // graphic properties 
        blockElement.className = `trialBlockBase ${block.class || ""}`;
        blockElement.title = block.title;
        blockElement.textContent = block.text;
        blockElement.style.gridColumn = block.gridColumn;
        blockElement.style.gridRow = block.gridRow;
        if (block.hasOwnProperty("color")){
            blockElement.style.backgroundColor = block.color;
        }
        // link to page
        if (block.hasOwnProperty("onclick") &&   block.onclick.trim() !== ""){   
            console.log( block.text);
            blockElement.setAttribute("ondblclick", `openOptionsWindow('${block.onclick}','${block.tab}')`); 
            console.log(blockElement);
        }
    });  
    
    
    // Download Button 
    const trialDownloadButtonContainer = document.createElement('div');
    trialDownloadButtonContainer.className = 'trialDownloadButtonContainerClass';
    parentcontainer.appendChild(trialDownloadButtonContainer); 
    
    const trialDownloadButton = document.createElement("button");
    trialDownloadButton.className = "trialDownloadButtonClass";    
    trialDownloadButton.textContent = "Download";    
   // trialDownloadButton.addEventListener('click', downloadCsvTEMP); 
    trialDownloadButton.addEventListener('click', downloadCsvCurr); 
    trialDownloadButtonContainer.appendChild(trialDownloadButton);   
    
});

function downloadCsvTEMP() {
    // Your CSV download logic here
    console.log('TEEEMP CSV Download initiated');
}


function openOptionsWindow(htmlFileName,htmlFileTab) {  
        const windowSizePercent = 0.9;  
        var newWindow = createWindow(windowSizePercent);   
        robustOnLoad(newWindow,function() {
            populateOptionWindow(newWindow,htmlFileName,htmlFileTab);
        });  
}  


 
  
 




function populateOptionWindow(newWindow,htmlFileName,htmlFileTab){ 
        // Populate the new window with content from htmlFileName.html
    baseHtmlFileName='trialDesignFiles/tabHtml.html';
        fetch(baseHtmlFileName)
            .then(response => response.text())
            .then(html => {
                newWindow.document.write(html); // loads base html code 
                newWindow.document.title=htmlFileName; // changes the html page title 
             
                // Creates Containers 
                var tabContainer = newWindow.document.createElement("div"); // container for navigation tabs
                tabContainer.id = "input-window-tabcontainer";
                tabContainer.className = "input-subtab-container";                
                var contentContainer = newWindow.document.createElement("div"); //  container to display content
                contentContainer.id = "contentContainer";
                contentContainer.className = "contentcontainerclass";            
                newWindow.document.body.appendChild(tabContainer); // Append the containers to the body of the new window
                newWindow.document.body.appendChild(contentContainer);
                newWindow.document.body.style.overflow = "hidden";
            

                // Includes styles and scripts 
                includeStyle( 'trialDesignFiles/tabHtmlStyle.css',newWindow); 
                includeStyle( 'trialDesignFiles/trialDesignChildrenStyles.css',newWindow); 
                includeScript( 'generalScript.js',newWindow); 
       
                // Creates tabs             
                const tabsDefinition =allTabsDefinition[htmlFileName] ;  
                let initialTab = htmlFileTab;

                if (initialTab == "") {
                    initialTab = Object.keys(tabsDefinition)[0];
                }; 
            
                createTabs(newWindow,tabsDefinition,initialTab);  
                
                // window adjustments 
            //    createOKButton(newWindow); // Creates OK button
                
            
            
            // Create a container for the button
        const buttonContainer = newWindow.document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.flexDirection = 'column';
        buttonContainer.style.alignItems = 'center';
        buttonContainer.style.justifyContent = 'center';
        buttonContainer.style.height = '100%';
        buttonContainer.id = 'button-container';
   // Create an "OK" button
        const okButton = newWindow.document.createElement('button');
        okButton.textContent = 'OK';
        okButton.style.marginTop = '20px'; // Adjust as needed for spacing
        // Add event listener to close the window when the button is clicked
        okButton.addEventListener('click', function() {
            trialDesignStoreValues(newWindow);
            newWindow.close();
        });
        // Append the button to the buttonContainer
        buttonContainer.appendChild(okButton);
        // Append the buttonContainer to the document body
        newWindow.document.body.appendChild(buttonContainer);
            
            
            
            
            changeHeightToFitParent(newWindow,'contentcontainerclass'); // Makes the tabcontent scrollable and makes OK final button always visible    
       
            
            
            
            });
} 
 
 



 
function trialDesignStoreValues(newWindow){
    allFormPages = newWindow.document.forms;
    allTrialDesignForms[lastClickedTabName] = allFormPages[0];
}

function downloadCsvCurr(newWindow){
			optionsRows = []; 
			for (var iikey in allTrialDesignForms) { 
			var myFormData = new FormData(allTrialDesignForms[iikey]);
                
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
			optionsUrl = window.URL.createObjectURL(optionsBlob);
		//	a = newWindow.document.createElement('a');
			a = window.document.createElement('a');
			a.setAttribute('href', optionsUrl);
			a.setAttribute('download', 'options.csv');
			a.click()	;
            downloadURI() ;
            downloadURI2() ;
		}





// Function to create navigation tabs
function createTabs(newWindow,tabsDefinition,initialTab) {  
    const tabContainer = newWindow.document.getElementById('input-window-tabcontainer');
    for (const tabName in tabsDefinition) {
        const button = newWindow.document.createElement('button');
        button.textContent = tabName;
        button.className = 'input-subtab-button';
        button.addEventListener('click', () => clickTab(newWindow,button,tabsDefinition[tabName],false));
        tabContainer.appendChild(button);
 
        if (tabName == initialTab){ 
            clickTab(newWindow,button,tabsDefinition[tabName],true);
        }
    }  
}
 

// Function to fetch and display content
function clickTab(newWindow,clickedTab,htmlFileName,flagNewWindow) {  
    
    if (flagNewWindow==false){
            trialDesignStoreValues(newWindow);        
    }
    
    const folderName = "trialDesignPages";
    const htmlFile = `${folderName}/${htmlFileName}.html`;
    fetch(htmlFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            newWindow.document.getElementById('contentContainer').innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    newWindow.document.querySelectorAll('.input-subtab-button').forEach(button => {
        button.classList.remove('active');
    });
    clickedTab.classList.add('active'); 
    lastClickedTabName=htmlFileName;
}






















function trialDesignStoreValuesOOOLLDD(newWindow){


            console.log('VATEEEMP CSV Download initiated');
		  	allFormPages = newWindow.document.forms;
    console.log("AAA");
    
     
    allTrialDesignForms[lastClickedTabName] = allFormPages[0];
    
    console.log(allFormPages);
    
			optionsRows = [];
		//	for (i = 0; i < allTrialDesignForms.length; i++) { 
			for (var iikey in allTrialDesignForms) {
               // myFormData = new FormData(allTrialDesignForms[i]);
			var myFormData = new FormData(allTrialDesignForms[iikey]);
                
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
    console.log(optionsRows);
				}
			}
			
			
			optionsData = optionsRows.join('\r');
			optionsBlob = new Blob([optionsData], { type: 'text/csv' });
			optionsUrl = window.URL.createObjectURL(optionsBlob);
			a = newWindow.document.createElement('a');
			a.setAttribute('href', optionsUrl);
			a.setAttribute('download', 'options.csv');
			a.click()	;
            downloadURI() ;
            downloadURI2() ;
		}

