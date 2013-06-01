#pragma strict

var materials:Material[];

function Set(which:int) {
	renderer.material = materials[which];
}