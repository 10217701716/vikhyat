function funcOne()
{ 
  var val = confirm("Do you want to continue");
    if(val==true)
       { document.getElementById("div1").style.display = "none";
        document.getElementById("div2").style.display = "block";
        document.body.style.background="transparent";
	dispimg(0);
	document.getElementById("bgmusic").src = document.getElementById("music").value;
       }
}

                  
function openFile(event) {
    var input = document.getElementById("pic");
    var div = document.getElementById("div2");
    div.innerHTML = '';
    for(var i=0;i<input.files.length;i++) {
        var file = input.files[i];
        var url = URL.createObjectURL(file);
        div.innerHTML += "<br><img src='" + url + "' width ='500px' /><br>";
    }
}
function dispimg(i)
{
	var input = document.getElementById("pic");
	var div = document.getElementById("images");
	var file = input.files[i];
        var url = URL.createObjectURL(file);
	div.innerHTML = "<img src='" + url + "' width=500px />";
	if(input.files.length - 1 > i) {
		setTimeout(function () { dispimg(i+1); }, 3100);
	}
    else {
        console.log("Pausing");
        setTimeout(function () {
            document.getElementById("bgmusic").pause();
        }, ani == 'fadeInOut' ? 3000 : 2000);
    }
	var ani = document.getElementById("anim").value;
	if(ani=="FadeInOut")
	fadeInOut(div);
	else if(ani=="FadeIn")
	fadeIn(div);
	else if(ani=="FadeOut")
	fadeOut(div);

}

function fadeIn(element) {
	
	var opacity = 0;
	element.style.opacity = opacity;
	var t = setInterval(function () {
		opacity += 0.05;
		element.style.opacity = opacity;
	}, 100);
	setTimeout(function () { 
        clearInterval(t); 
    }, 2000);

}

function fadeInOut(element) {
	var opacity1 = 0, opacity2 = 1;
	var turn = 1;
	element.style.opacity = opacity1;

	var t = setInterval(function () {
		if(turn) {
			opacity2 -= 0.05;
			element.style.opacity = opacity2;
		}
		else {
			opacity1 += 0.05;
			element.style.opacity = opacity1;
		}
		turn = !turn;
	}, 75);
	setTimeout(function () {
        clearInterval(t); 
    }, 3000);

}

function fadeOut(element) {
	
	var opacity = 1;
	element.style.opacity = opacity;
	var t = setInterval(function () {
		opacity -= 0.05;
		element.style.opacity = opacity;
	}, 100);
	setTimeout(function () { 
        clearInterval(t); 
    }, 2000);

}