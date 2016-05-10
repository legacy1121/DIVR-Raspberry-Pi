private var initialColor : Color;

var canvas : Canvas;

private var opened : boolean = false;

private var menuAnim : Animator;

function Start() {
	initialColor = GetComponent.<Renderer>().material.color;
}

function OnMouseOver() {
	if(!opened) 
		GetComponent.<Renderer>().material.color = new Color(0.8, 0, 0, 0.2); 
}

function OnMouseExit() {
	GetComponent.<Renderer>().material.color = initialColor;
}

function Update() {
	if(Input.GetMouseButtonDown(0) && !opened){
		menuAnim = canvas.GetComponent(Animator);
		menuAnim.Play("Opening");
		opened = true;
		GetComponent.<Renderer>().material.color = initialColor;
	}
}

function CloseMenu() {
	if(opened){
		menuAnim = canvas.GetComponent(Animator);
		menuAnim.Play("Closing");
		opened = false;
	}
}