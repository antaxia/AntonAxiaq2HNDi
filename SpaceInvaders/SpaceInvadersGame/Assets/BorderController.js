#pragma strict

static var leftmost:float;
static var rightmost:float;
static var topmost:float;
static var bottommost:float;

static function Calculate() {
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).x;
	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,Screen.height,0)).x;
	topmost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;
	bottommost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,Screen.height,0)).y;
}

static function EnableBorders(object:Transform)
{

	//if the object leaves the screen to the left
	if (object.position.x < leftmost)
	{
		object.position.x = rightmost;
	}

	//if object leaves the screen to the right
	if (object.position.x > rightmost)
	{
		object.position.x = leftmost;
	}
	
	
}