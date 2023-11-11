document.querySelector('#INPUT_FEEDBACK').insertAdjacentHTML('beforeend', `                                  

    
		<form>

		<inputcolumn>
  
  		<!-- colors -->
    		  <inputdivider> Colors </inputdivider>
		  <div class="form-control">        
			<name>Target mesh success color:</name>
   			<inputs>
   			<label for="TARGET_COLOR_S_R">R:</label>
			<input id="TARGET_COLOR_S_R" name="targetScript,targetMeshColorSuccessR" type="number" value="0" />
   			<label for="TARGET_COLOR_S_G">G:</label>
			<input id="TARGET_COLOR_S_G" name="targetScript,targetMeshColorSuccessG" type="number" value="0.75" />
   			<label for="TARGET_COLOR_S_B">B:</label>
			<input id="TARGET_COLOR_S_B" name="targetScript,targetMeshColorSuccessB" type="number" value="0.4" />
   			<label for="TARGET_COLOR_S_A">Alpha:</label>
			<input id="TARGET_COLOR_S_A" name="targetScript,targetMeshColorSuccessAlpha" type="number" value="0.5" />
   			</inputs>            
			<name>Target mesh failure color:</name>
   			<inputs>
   			<label for="TARGET_COLOR_U_R">R:</label>
			<input id="TARGET_COLOR_U_R" name="targetScript,targetMeshColorUnsuccessR" type="number" value="1" />
   			<label for="TARGET_COLOR_U_G">G:</label>
			<input id="TARGET_COLOR_U_G" name="targetScript,targetMeshColorUnsuccessG" type="number" value="0" />
   			<label for="TARGET_COLOR_U_B">B:</label>
			<input id="TARGET_COLOR_U_B" name="targetScript,targetMeshColorUnsuccessB" type="number" value="0" />
   			<label for="TARGET_COLOR_U_A">Alpha:</label>
			<input id="TARGET_COLOR_U_A" name="targetScript,targetMeshColorUnsuccessAlpha" type="number" value="0.5" />
   			</inputs>    
   		        <note>Target color changes online based on success criteria</note>   
      
			<name>Particle effect success color:</name>
   			<inputs>
   			<label for="EFFECT_COLOR_S_R">R:</label>
			<input id="EFFECT_COLOR_S_R" name="plateAndGrapeScript,plateGrapeColorSuccessR" type="number" value="0" />
   			<label for="EFFECT_COLOR_S_G">G:</label>
			<input id="EFFECT_COLOR_S_G" name="plateAndGrapeScript,plateGrapeColorSuccessG" type="number" value="0.75" />
   			<label for="EFFECT_COLOR_S_B">B:</label>
			<input id="EFFECT_COLOR_S_B" name="plateAndGrapeScript,plateGrapeColorSuccessB" type="number" value="0.4" />
   			<label for="EFFECT_COLOR_S_A">Alpha:</label>
			<input id="EFFECT_COLOR_S_A" name="plateAndGrapeScript,plateGrapeColorSuccessAlpha" type="number" value="0.5" />
   			</inputs>            
			<name>Particle effect failure color:</name>
   			<inputs>
   			<label for="EFFECT_COLOR_U_R">R:</label>
			<input id="EFFECT_COLOR_U_R" name="plateAndGrapeScript,plateGrapeColorUnsuccessR" type="number" value="1" />
   			<label for="EFFECT_COLOR_U_G">G:</label>
			<input id="EFFECT_COLOR_U_G" name="plateAndGrapeScript,plateGrapeColorUnsuccessG" type="number" value="0" />
   			<label for="EFFECT_COLOR_U_B">B:</label>
			<input id="EFFECT_COLOR_U_B" name="plateAndGrapeScript,plateGrapeColorUnsuccessB" type="number" value="0" />
   			<label for="EFFECT_COLOR_U_A">Alpha:</label>
			<input id="EFFECT_COLOR_U_A" name="plateAndGrapeScript,plateGrapeColorUnsuccessAlpha" type="number" value="0.5" />
   			</inputs>    
   		        <note>Particle effect appears on plate upon trial change</note>    
		   </div>


  		<!-- message -->
    		  <inputdivider> Messages </inputdivider>
		 

<div class="form-control">  
<name>Display feedback message?</name> 


   			<inputs>
			<input id="OMH" name="trialScript,stage5_outcomeMessageDuration" type="hidden" value="FALSE">
			<input id="OM" name="trialScript,stage5_outcomeMessageDuration" type="checkbox" value="TRUE" checked>	
			<label for="OM">Yes</label>	
 
 


	</inputs>       

<name> </name> <inputs> </inputs>    
			<name>Success:</name>   
   			<inputs>      
			<label for="SUCC"></label>
<textarea id="SUCC" name="messagesScript,successText" rows="1" cols="50">success!</textarea>
   			</inputs>         	
<name> </name> <inputs> </inputs>
			<name>Failure:</name>   
   			<inputs>    </inputs>      
  
			<name>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
- - -> Plate too tilted:</name>
  
		

   			<inputs>      
			<label for="FAIL1"></label>
			<textarea id="FAIL1" name="messagesScript,fail1Text" rows="1" cols="50">failed</textarea>
   			</inputs>      
<name> </name> <inputs> </inputs>
			<name>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
- - -> Plate exited target:</name>
   			<inputs>      
			<label for="FAIL2"></label>
<textarea id="FAIL2" name="messagesScript,fail2Text" rows="1" cols="50">
failed
</textarea>
   			</inputs>   
<name> </name> <inputs> </inputs>           
			<name>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
- - -> Plate fell:</name>
   			<inputs>      
			<label for="FAIL3"></label>
			<textarea id="FAIL3" name="messagesScript,fail3Text" rows="1" cols="50">failed</textarea>
   			</inputs>        
<name> </name> <inputs> </inputs>  
			<name>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
- - -> Time limit reached:</name>
   			<inputs>      
			<label for="FAIL4"></label>
<textarea id="FAIL4" name="messagesScript,fail4Text" rows="1" cols="50">too slow</textarea>
   			</inputs> 
<name> </name> <inputs> </inputs>
			<name>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
- - -> Workspace exited:</name>   
   			<inputs>      
			<label for="FAIL5"></label>
<textarea id="FAIL5" name="messagesScript,fail5Text" rows="1" cols="50">failed</textarea>
   			</inputs>  
<name> </name> <inputs> </inputs> 
			<name>Message duration [seconds]:</name>
   			<inputs>
   			<label for="FAIL_TIME"></label>
			<input id="FAIL_TIME" name="trialScript,stage5_outcomeMessageDuration" type="number" value="1" />
   			</inputs> 
<name> </name> <inputs> </inputs>  


 
  </div>
     













 

     
  		<!-- bird sound -->
    		  <inputdivider> Bird sound </inputdivider>
 
		  <div class="form-control">        
			<name>Volume [0 to 1]:</name>
   			<inputs>      
			<label for="BIRDVOL"></label>
			<input id="BIRDVOL" name="setupScript,targetBirdVolume" type="number" value="1" />
   			</inputs>      
   		        <note>Change sounds by replacing failure and success mp3 files in Resources</note>    
		   </div>
     


	</inputcolumn>  

	<figurecolumn>
    		<img src="website/inputpage/figures/feedback.png"  style="width:100%">
	</figurecolumn>
 
	</form>

     
  
      

  `);


