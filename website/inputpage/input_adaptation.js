document.querySelector('#INPUT_ADAPT').insertAdjacentHTML('beforeend', `                                 
            

    
		<form>

		<inputcolumn>
  
  	 
  		<!-- adaptation gain -->
    		  <inputdivider> Hand perturbation </inputdivider>
		  <div class="form-control">           
			<name>Left hand gain [%]</name>
   			<inputs>
   			<label for="L_GAIN_X">X:</label>
			<input id="L_GAIN_X" name="trialScript,leftHandGainX" type="number" value="0" />
			<label for="L_GAIN_Y">Y:</label>
			<input id="L_GAIN_Y" name="trialScript,leftHandGainY" type="number" value="0" />
			<label for="L_GAIN_Z">Z:</label>
			<input id="L_GAIN_Z" name="trialScript,leftHandGainZ" type="number" value="0" />
   			</inputs>      
			<name>Right hand gain [%]</name>
   			<inputs>
   			<label for="R_GAIN_X">X:</label>
			<input id="R_GAIN_X" name="trialScript,rightHandGainX" type="number" value="0" />
			<label for="R_GAIN_Y">Y:</label>
			<input id="R_GAIN_Y" name="trialScript,rightHandGainY" type="number" value="-50" />
			<label for="R_GAIN_Z">Z:</label>
			<input id="R_GAIN_Z" name="trialScript,rightHandGainZ" type="number" value="0" />
   			</inputs> 
   		        <note>-100% means hand will not move at all, 100% means not perturbed, 200% means it will move twice as fast</note>              
   		        <note>Hand gain will be applied wrt to "hand origin" position (no shift when hand is at 0,0,0).</note>           
   		        <note>"Hand origin" position is the position where hand makes contact with plate,</note>        
   		        <note>Computed as the median of selected (e.g., baseline) trials:</note>   
			<name>Trials to compute gain origin:</name>
   			<inputs>
   			<label for="GAIN_TRIAL_I">From trial:</label>
			<input id="GAIN_TRIAL_I" name="trialScript,gainOriginComputationTrialRangeStart" type="number" value="1" />
   			<label for="GAIN_TRIAL_F">To trial:</label>
			<input id="GAIN_TRIAL_F" name="trialScript,gainOriginComputationTrialRangeEnd" type="number" value="50" />
   			</inputs>         
		   </div>


        <inputdivider> Paradigm </inputdivider>
		  <div class="form-control">           
			<name>Number of baseline trials:</name>
            <inputs>
			<input id="NT_BL" name="trialScript,paradigmBaseline" type="number" value="30" />
   			<label for="NT_BL"> (no perturbation) </label>
   			</inputs> 
			<name>Number of adaptation trials - gradual portion:</name>
            <inputs>
			<input id="NT_AG" name="trialScript,paradigmGradual" type="number" value="60" />
   			<label for="NT_AG"> (perturbation lineraly increases from zero to value specified above) </label>
   			</inputs> 
            <note> set "gradual portion = 0" for abrupt schedule paradigms. </note>
			<name>Number of adaptation trials - full perturbation portion:</name>
            <inputs>
			<input id="NT_AP" name="trialScript,paradigmFullPerturbation" type="number" value="60" />
   			<label for="NT_AP"> (perturbation equals value specified above) </label>
   			</inputs> 
			<name>Number of washout trials:</name>
            <inputs>
			<input id="NT_AP" name="trialScript,paradigmWashout" type="number" value="60" />
   			<label for="NT_AP"> (no perturbation) </label>
   			</inputs> 	

<name> </name>
	<inputs></inputs> 	    
   		
	<name>Manual override with trials.csv:</name>
   		
	<inputs>	    	  	    
			<input id="NTOH" name="trialScript,paradigmManual" type="hidden" value="FALSE">
			<input id="NTO" name="trialScript,paradigmManual" type="checkbox" value="TRUE">	
			<label for="NTO">Override</label>	 
   			</inputs> 
   		        <note>You can provide trial-by-trial gain perturbation values using a .csv file.</note>   
<note>Name of file: trials.csv</note>
<note> Fill as follows:</note>
   		        <note>First column = trialScript</note>
<note> Second column = leftHandGainY (or desired hand and direction)</note>   
<note> From 3rd to last column = value of gain on each trial"</note>   
<note> (i.e., 3rd column -> trial 1, 2nd column -> trial 2, etc...)</note>  
<note> Check the "override" box above to use the trials.csv file</note>    
		   
</div>

	</inputcolumn> 
	<figurecolumn>
    		<img src="website/inputpage/figures/adapt.png"  style="width:100%">
	</figurecolumn>

 
	</form>

     
  
      

  `);



