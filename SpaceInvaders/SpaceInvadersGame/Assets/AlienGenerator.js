#pragma strict
var alien:Rigidbody;
var rows:int;
var columns:int;




function generateAliens(rows:int,columns:int)
{
	transform.position.x = 0;
	var ypos = transform.position.y;
	
	for(var rowscounter=0;rowscounter<rows;rowscounter++)
	{
		var tempAlien:Rigidbody;
		//repeat for COLUMNS times
		for(var counter=0;counter<columns;counter++)
		{
			//y position of swarm.
			tempAlien = Instantiate(alien,Vector3(counter*2,ypos-(rowscounter*1.5),1),Quaternion.identity);
			//place this object INSIDE the swarm
			tempAlien.transform.parent = this.transform;
	
		}
	}
}



function Start () {
	LevelManagerScript.level = 1;
	generateAliens(rows,columns);
}

function Update () {
	CheckEnemies();
}

function CheckEnemies() {
	if (transform.childCount == 0) {
		LevelManagerScript.NextLevel();
	}
}