#pragma strict
var x:float;
var y:float;

var background:Texture;

var nameInput:boolean = false;

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
	
	if (nameInput) {
		NameInput();
		return;
	}
	
	
	if(GUI.Button(Rect(x-140,y+80,100,25),"Start Game"))
	{
		nameInput = true;
	}
	else if(GUI.Button(Rect(x-140,y+120,100,25),"Quit"))
	{
		
		//Quit game was pressed
		//print("Quit");
		Application.Quit();
	}
}

function NameInput() {
GUI.Label(Rect(x-250, y+90, 150, 30), "Please Enter Your Name");
	SpaceshipController.playerName = GUI.TextField(Rect(x-100, y+90, 150, 30), SpaceshipController.playerName);
	
	if(GUI.Button(Rect(x-70,y+130,100,25),"OK"))
	{
		//scene 1..the main screen scene
		Application.LoadLevel(1);
	}
}