var controller : CharacterController;
var speed : float;
var cam : Transform;

function FixedUpdate () {
	var targetVelocity : Vector3 = new Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Fly"), Input.GetAxis("Vertical"));
	var flyVelocity : Vector3 = new Vector3(0, Input.GetAxis("Fly"), 0);
	targetVelocity = cam.transform.TransformDirection(targetVelocity);
	targetVelocity *= speed;
	flyVelocity *= speed;
	if (Input.GetAxis("Run")) 
		controller.Move(new Vector3(targetVelocity.x, flyVelocity.y, targetVelocity.z));
	controller.Move(new Vector3(targetVelocity.x, flyVelocity.y, targetVelocity.z));
}