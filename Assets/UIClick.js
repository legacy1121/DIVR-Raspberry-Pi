#pragma strict

var titleBar : UnityEngine.UI.Text;
var titleBarString : String;
var info : UnityEngine.UI.Text;
var infoString : String;
var container : CanvasGroup;

function OnMouseUp () {
	titleBar.text = titleBarString;
	info.text = infoString;
	container.alpha = 1;
}