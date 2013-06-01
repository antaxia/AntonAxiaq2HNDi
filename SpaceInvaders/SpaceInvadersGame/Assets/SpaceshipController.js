#pragma strict

var laserSlot:Rigidbody;
static var score = 0;
//health set to 100
static var health:int=50;
static var highScore:int = 0;
static var gameOver = false;
static var noshotsfired = 0;
static var noshotshit = 0;
static var noshotsmissed = 0;

var spaceship:Material[];

static var playerName:String = "";

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag=="enemylaser")
	{
		//player was hit, reduce health and change colour
		//this.renderer.material = spaceship[1];
		
		health--;
	}
}

function OnTriggerExit(other:Collider)
{
	//when the laser leaves the spaceship, set the colour back to default
	//this.renderer.material = spaceship[0];
}



function OnGUI()
{
	GUI.color = Color.green;
	
	GUI.Label(Rect(5,0,100,25),"Score: "+score);
	GUI.Label(Rect(70,0,100,25),"Health: "+health);
	GUI.Label(Rect(170,0,100,25),"Name: "+ playerName);
	GUI.Label(Rect(300,0,100,25),"Fired: "+ noshotsfired);
	GUI.Label(Rect(380,0,100,25),"Hits: "+ noshotshit);
	GUI.Label(Rect(450,0,100,25),"Missed: "+ noshotsmissed);
	
	if(gameOver)
	{
		GUI.Label(new Rect(Screen.width/2.0f - 50, Screen.height/2.0f, 120, 20),"GAME OVER!");
	}
}


function Start () {
	BorderController.Calculate();
}

function Update () {
	BorderController.EnableBorders(this.transform);
	transform.Translate(Vector3.right * 15 * Input.GetAxis("Horizontal") * Time.deltaTime);

		//shoot the laser
	if(Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate(laserSlot,transform.position,transform.rotation);
		noshotsfired++;
		noshotsmissed = noshotsfired  - noshotshit;
	}
	
	if (health == 0)
	{
		//game ends
		Application.LoadLevel(2);
	}
	
}
