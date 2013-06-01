	#pragma strict
	var x:float;
	var y:float;
	
	var background:Texture;
	
	//theme for menu style
	var theme:GUISkin;
	
	function Start () {
	
	}
	
	function Update () {
	
	}
	function OnGUI(){
		GUI.DrawTexture(Rect((Screen.width - background.width) / 2, (Screen.height - background.height) / 2, background.width, background.height), background);
	
		x = Screen.width/2;
		y = Screen.height/2;
	//tocustomize the style of the label
	GUI.skin=theme;
	
	
	if(GUI.Button(Rect(x+20,y+70,100,25),"Menu"))
	{
	
		//new game was pressed
		//print("New Game");
		//scene 1..the main screen scene
		Application.LoadLevel(0);
	}
	else if(GUI.Button(Rect(x+20,y+120,100,25),"Quit"))
	{
	
		//Quit game was pressed
		//print("Quit");
		Application.Quit();
	}
	}