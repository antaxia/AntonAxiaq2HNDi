#pragma strict

function Start () {

}

function Update () {
	transform.Translate(Vector3.up * 15 * Time.deltaTime);
	
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="alien")
	{
		SpaceshipController.noshotshit++;
		SpaceshipController.score++;
		//destroy the alien
		Destroy(other.gameObject);
		//destroy the laser
		Destroy(this.gameObject);
	}
}


function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

function OnDestroy() {
	GameObject.Find("Swarm").GetComponent(AlienGenerator).CheckEnemies();
}