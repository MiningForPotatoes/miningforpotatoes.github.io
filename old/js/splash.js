function getSplash() { 
	var ar = new Array(20) 
	ar[0] = "Minecraft!" 
	ar[1] = "Dayum, look at that girls potato!" 
	ar[2] = "Baked goodness unite!" 
	ar[3] = "Potatoes > Diamonds" 
	ar[4] = "Comes in many forms!" 
	ar[5] = "Gangsta" 
	ar[6] = "<i>woosh</i>" 
	// add as many more that you can stand but make 
	// sure you update the value '7' in the alert box 
	var now = new Date() 
	var sec = now.getSeconds() 
	alert("Random thingies:\n\n" + ar[sec % 7]) 
} 
		