	



function processdata(inputarray){
		console.log("process data");		
		console.log(inputarray[0]);
		console.log(inputarray);
		
	}
 	


const upload = async (event) => {
  
    // Convert the FileList into an array and iterate
    let files = Array.from(event.target.files).map(file => {

        // Define a new file reader
        let reader = new FileReader();

        // Create a new promise
        return new Promise(resolve => {

            // Resolve the promise after reading file
            reader.onload = () => resolve(reader.result);

            // Read the file as a text
            reader.readAsArrayBuffer(file);

        });

    });

    // At this point you'll have an array of results
    let res = await Promise.all(files);
	console.log("here");
	console.log(res);
	for (i=0;i<res.length;i++){
		console.log(i);
		floatarray = new  Float32Array(res[i]);
		console.log(floatarray);
		console.log( new  Float32Array(res[i]));
	}
  
}
    



document.querySelector('#EXPORT_PAGE').insertAdjacentHTML('beforeend', `     
<br>
<h2>Export the motion tracking data collected to MovementVR to .csv file. </h2>
<br>
Select individual .bin files or the folder containing the files to export:

 
		<br><br>
		<p> Load .bin files:
</p>	 
	<button style="display:block;width:120px; height:30px;" onclick="document.getElementById('LOAD_FILES').click()">Load files</button>
   	<input id="LOAD_FILES" style="visibility:hidden;" type="file" onchange = 'upload(event)' multiple/>

	<p>   OR     </p>
	<br><br>
	<button style="display:block;width:120px; height:30px;" onclick="document.getElementById('LOAD_FOLDER').click()">Load folder</button>
   	<input id="LOAD_FOLDER" style="visibility:hidden;"  type="file" webkitdirectory directory  onchange = 'upload(event)' multiple/>
	
	 <br><br>
<p>  
<h3>- - - Info - - <br></h3>
Each row is a frame.<br>
Each column is a variable as follows:<br>
1) Trial Number<br>
2) Time from game start <br>
3-8) left, right hand offsets (from gain perturbation)<br>
9-end) Position X,Y, Z, Rotation X,Y,Z of the following variables, in order:<br>
- plate
- grape 
- headset 
- left wrist
- right wrist
 - * if selected, then individual hand bones follow

[units are seconds or meters]<br>
[positive x = right, positive y = up, positive x = forward]
   </p>

  `);

