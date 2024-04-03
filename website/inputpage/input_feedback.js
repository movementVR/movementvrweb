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
			<input id="OMH" name="trialScript,stage5_displayMessageFlag" type="hidden" value="FALSE">
			<input id="OM" name="trialScript,stage5_displayMessageFlag" type="checkbox" value="TRUE" checked>	
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



<!-- Expandable Feedback Message Position -->
 
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableOutcomeMessagePositions')">
        Expand message position & size
        </button>
 
        <inputcolumn>
        <div class="expwindow" id="expandableOutcomeMessagePositions"> 

 
           <name> Success </name> <inputs></inputs>	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Position [meters] </name>
   			<inputs>
   			<label for="MSGSUCC_POS_X">X:</label>
			<input id="MSGSUCC_POS_X" name="setupScript,successMessagePositionX" type="number" value="0.4" />
			<label for="MSGSUCC_POS_Y">Y:</label>
			<input id="MSGSUCC_POS_Y" name="setupScript,successMessagePositionY" type="number" value="0.3" />
			<label for="MSGSUCC_POS_Z">Z:</label>
			<input id="MSGSUCC_POS_Z" name="setupScript,successMessagePositionZ" type="number" value="0.6" />
   			</inputs>  	   
           <name> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - - > Size </name>
   			<inputs>
   			<label for="MSGSUCC_POS_X">Width [meters]:</label>
			<input id="MSGSUCC_POS_X" name="setupScript,successMessageSizeX" type="number" value="0.55" />
			<label for="MSGSUCC_POS_Y">Height [meters]:</label>
			<input id="MSGSUCC_POS_Y" name="setupScript,successMessageSizeY" type="number" value="0.4" />
			<label for="MSGSUCC_POS_Z">Font Size:</label>
			<input id="MSGSUCC_POS_Z" name="setupScript,successMessageFontSize" type="number" value="1" />
   			</inputs>  
		
 	</div>
  	</inputcolumn>

 
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


 
	<name>Change bird:</name> 
	<inputs>
		<input id="CHANGEBIRD_ANY" name="trialScript,changeBirdAnyCondition" type="radio" value="TRUE"  checked >
		<label for="CHANGEBIRD_ANY">After every trial</label> 
		<input id="CHANGEBIRD_ANYF" name="trialScript,changeBirdAnyCondition" type="radio" value="FALSE" >
		<label for="CHANGEBIRD_ANYF">For selected conditions (expand below) </label>  
   	</inputs>

 

<!-- Expandable Change Bird Condition -->
 
       <button class="expand-button"  type="button" onclick="toggleExpandableWindow(this,'expandableChangeBird')">
        Expand conditions for changing bird
        </button>
 
        <inputcolumn>
        <div class="expwindow" id="expandableChangeBird"> 
 
 <name>Change bird for conditions:</name> <inputs></inputs>  
 
 <name> </name> <inputs> 
 <input id="OMH" name="trialScript,changeBirdOnSuccess" type="hidden" value="FALSE">
<input id="OM" name="trialScript,changeBirdOnSuccess" type="checkbox" value="TRUE" checked>	
<label for="OM">Success</label>	 
 </inputs>  

 
 <name> </name> <inputs> 
 <input id="OMH" name="trialScript,changeBirdOnFailure1" type="hidden" value="FALSE">
<input id="OM" name="trialScript,changeBirdOnFailure1" type="checkbox" value="TRUE" checked>	
<label for="OM">Failure - Plate too tilted</label>	 
 </inputs>  


 <name> </name> <inputs> 
 <input id="OMH" name="trialScript,changeBirdOnFailure2" type="hidden" value="FALSE">
<input id="OM" name="trialScript,changeBirdOnFailure2" type="checkbox" value="TRUE" checked>	
<label for="OM">Failure - Plate exited target</label>	 
 </inputs>  


 <name> </name> <inputs> 
 <input id="OMH" name="trialScript,changeBirdOnFailure3" type="hidden" value="FALSE">
<input id="OM" name="trialScript,changeBirdOnFailure3" type="checkbox" value="TRUE" checked>	
<label for="OM">Failure - Plate fell</label>	 
 </inputs>  
	    


 <name> </name> <inputs> 
 <input id="OMH" name="trialScript,changeBirdOnFailure4" type="hidden" value="FALSE">
<input id="OM" name="trialScript,changeBirdOnFailure4" type="checkbox" value="TRUE" checked>	
<label for="OM">Failure - Time limit reached</label>	 
 </inputs>  



 <name> </name> <inputs> 
 <input id="OMH" name="trialScript,changeBirdOnFailure5" type="hidden" value="FALSE">
<input id="OM" name="trialScript,changeBirdOnFailure5" type="checkbox" value="TRUE" checked>	
<label for="OM">Failure - Workspace exited</label>	 
 </inputs>  
 
		
 	</div>
  	</inputcolumn>

 


		   </div>
     


	</inputcolumn>  

	<figurecolumn>
    		<img src="website/inputpage/figures/feedback.png"  style="width:100%">
	</figurecolumn>
 
	</form>

     
  
      

  `);


