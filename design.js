
function changeImage(){
    var pic=document.getElementById("bulb");
    if(pic.src.match("on"))
    {
        console.log("on");
        pic.src="image_off.jpg";
    }
    else
    {
        console.log("off");
        pic.src="image_on.jpg";
    }
}