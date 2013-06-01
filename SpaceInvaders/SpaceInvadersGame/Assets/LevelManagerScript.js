#pragma strict

static var level = 1;

static function NextLevel() {
	level++;
	
	var backgroundScript = GameObject.Find("Plane").GetComponent(BackgroundController);
	
	switch (level) {
		case 2:
			backgroundScript.Set(1);
			GameObject.Find("Swarm").GetComponent(AlienGenerator).generateAliens(3, 5);
			break;
		case 3:
			backgroundScript.Set(2);
			GameObject.Find("Swarm").GetComponent(AlienGenerator).generateAliens(4, 5);
			break;
		case 4:
			Application.LoadLevel(3);
			break;
	}
}