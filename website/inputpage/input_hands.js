document.querySelector('#INPUT_HANDS').insertAdjacentHTML('beforeend', `                                 
            

    
		<form>

		<inputcolumn>
  
  		<!-- Tracking -->
    		  <inputdivider> Hand Tracking </inputdivider>
		  <div class="form-control">        
			<name>Tracking system:</name>
   			<inputs>
			<input id="MULTIPLECHOICE_QUEST" name="setupScript,rigSystem" type="radio" value="Quest" checked>
			<label for="MULTIPLECHOICE_QUEST">Quest</label> 
			<input id="MULTIPLECHOICE_LEAP" name="setupScript,rigSystem" type="radio" value="Leap" >
			<label for="MULTIPLECHOICE_LEAP">Leap</label>		    
   			</inputs>            
			<name>Active hands:</name>
   			<inputs>	    	  	    
			<input id="ACTIVE_L_H" name="handsAndSaveScript,leftHandActiveFlag" type="hidden" value="FALSE">
			<input id="ACTIVE_L" name="handsAndSaveScript,leftHandActiveFlag" type="checkbox" value="TRUE" checked>	
			<label for="ACTIVE_L">Left</label>	
			<input id="ACTIVE_R_H" name="handsAndSaveScript,rightHandActiveFlag" type="hidden" value="FALSE">
			<input id="ACTIVE_R" name="handsAndSaveScript,rightHandActiveFlag" type="checkbox" value="TRUE" checked>	
			<label for="ACTIVE_R">Right</label>	  
   			</inputs>             
			<name>Required to be tracked:</name>
   			<inputs>	    	  	    
			<input id="TRACKED_L_H" name="handsAndSaveScript,leftHandTrackingFlag" type="hidden" value="FALSE">
			<input id="TRACKED_L" name="handsAndSaveScript,leftHandTrackingFlag" type="checkbox" value="TRUE" checked>	
			<label for="TRACKED_L">Left</label>	
			<input id="TRACKEDE_R_H" name="handsAndSaveScript,rightHandTrackingFlag" type="hidden" value="FALSE">
			<input id="TRACKED_R" name="handsAndSaveScript,rightHandTrackingFlag" type="checkbox" value="TRUE" checked>	
			<label for="TRACKED_R">Right</label>	  
   			</inputs> 
   		        <note>Plate freezes if checked hands are not tracked by cameras</note>   
		   </div>
         	 

     		<!-- Data saving -->
    		  <inputdivider> Data saving </inputdivider>
		  <div class="form-control">        
			<name>Save for each frame:</name>
   			<inputs>	    	  	    
			<input id="SAVE_PERTURBATION" name="handsAndSaveScript,savePerturbationOffset" type="hidden" value="FALSE">
			<input id="SAVE_PERTURBATION" name="handsAndSaveScript,savePerturbationOffset" type="checkbox" value="TRUE" checked>	
			<label for="SAVE_PERTURBATION">Hand perturbation offsets</label>	  
   			</inputs>       
			<name></name>
   			<inputs>	
			<input id="SAVE_TRANSFORM" name="handsAndSaveScript,saveBoneTransforms" type="hidden" value="FALSE">
			<input id="SAVE_TRANSFORM" name="handsAndSaveScript,saveBoneTransforms" type="checkbox" value="TRUE" checked>	
			<label for="SAVE_TRANSFORM">All bone transforms</label>	    
   			</inputs>       
			<name></name>
   			<inputs>		
			<input id="SAVE_COLLIDER" name="handsAndSaveScript,saveBoneColliderShapes" type="hidden" value="FALSE">
			<input id="SAVE_COLLIDER" name="handsAndSaveScript,saveBoneColliderShapes" type="checkbox" value="TRUE" checked>	
			<label for="SAVE_COLLIDER">All bone shapes</label>	  
   			</inputs> 
   		        <note>Wrist and headset position is always saved.</note>   
		   </div>

	</inputcolumn> 
	<figurecolumn>
    		<img src="website/inputpage/paradigmSmall-01.png"  style="width:100%">
	</figurecolumn>

 
	</form>

     
  
      

  `);



