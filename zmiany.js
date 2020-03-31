var number = Math.floor(Math.random()*4)+1;
var description='<div class="mess">Efektywnie zarządzaj własnym budżetem!</div>';

function changeposition()
{
	
	if (number == 1)
		 description='<div class="mess2">Efektywnie zarządzaj własnym budżetem!</div>';
	if (number == 2)
		 description='<div class="mess3">Zadbaj o stabilny przyrost gotówki!</div>';
	if (number == 3)
		description='<div class="mess">Zrób użytek z każdego grosza, zamień go w prawdziwy majątek!</div>';
	if (number == 4)
		description='<div class="mess4">Regularność przerodzi się w sukces!</div>';
}
function hideslide()
{
	$("#slider").fadeOut(300);
}

function changeslide()
{
	number++; 
	if (number > 4) number=1;
	
	var plik = "<img src=\"img/img"+number+".png\" width = 70% height = 350px />";
	
	changeposition();
	document.getElementById("slider").innerHTML = plik+description;
	
	$("#slider").fadeIn(300);
	
	setTimeout("changeslide()", 6000);
	
	setTimeout("hideslide()",5700);
}

var points;// = [40, 100, 1, 5, 25, 10];
//document.getElementById("demo").innerHTML = points;

function changetoregister() 
{
	var register = '<form class="p-2 my-2 bg-light text-black rounded"><div class="form-group"><label for="przykladowyEmail" class="text-center"> Imię </label><div class="input-group mb-2"><div class="input-group-prepend"><span class="input-group-text button-size" id="basic-addon1"><i class="icon-user"></i></span></div><input type="text" class="form-control" placeholder="Imię " aria-label="Username" aria-describedby="basic-addon1"></div><label for="przykladowyEmail" class="text-center"> Nazwisko </label><div class="input-group mb-2"><div class="input-group-prepend"><span class="input-group-text button-size" id="basic-addon1"><i class="icon-user"></i></span></div><input type="text" class="form-control" placeholder="Nazwisko " aria-label="Username" aria-describedby="basic-addon1"></div><label for="przykladowyEmail" class="text-center"> Adres Email </label><div class="input-group mb-1"><div class="input-group-prepend"><span class="input-group-text button-size" id="basic-addon1">@</span></div><input type="text" class="form-control" placeholder="Adres Email " aria-label="Username" aria-describedby="basic-addon1"></div><small id="podpowiedzEmail" class="form-text text-muted">W powyższym polu wpisujesz swój adres email.</small></div><div class="form-group"><label for="przykladoweHaslo">Hasło</label><div class="input-group mb-1"><div class="input-group-prepend"><span class="input-group-text" id="basic-addon1"><i class="icon-lock"></i></span></div><input type="password" class="form-control" placeholder="Hasło " aria-label="password" aria-describedby="basic-addon1"></div></div><div class = "text-center mt-2"><button type="submit" class="btn btn-primary"> Zarejestruj się </button></div></form>';
	
	var newtitle = '<h2>Od skutecznego oszczędzania dzieli Cię już tylko 1 krok.</h2>';
	
	document.getElementById("loginButt").innerHTML = register;
	document.getElementById("paneltitle").innerHTML = newtitle;
}
function changetologin()
{
	var login = '<form id="loginButt" class="p-4 my-3 bg-light text-black rounded"><div class="form-group"><label for="przykladowyEmail" class="text-center"> Adres Email </label><div class="input-group mb-1"><div class="input-group-prepend"><span class="input-group-text button-size" id="basic-addon1">@</span></div><input type="text" class="form-control" placeholder="Adres Email " aria-label="Username" aria-describedby="basic-addon1"></div></div><div class="form-group"><label for="przykladoweHaslo">Hasło</label><div class="input-group mb-1"><div class="input-group-prepend"><span class="input-group-text" id="basic-addon1"><i class="icon-lock"></i></span></div><input type="password" class="form-control" placeholder="Hasło " aria-label="password" aria-describedby="basic-addon1"></div></div><div class="form-check"><input class="form-check-input" type="checkbox" id="autoSizingCheck2"><label class="form-check-label" for="autoSizingCheck2">Zapamiętaj mnie</label></div><div class = "text-center mt-3"><button type="submit" class="btn btn-primary"> Zaloguj się </button></div></form>';
	
	var newtitle = '<h2>Zaloguj się na własne darmowe konto!</h2>';
	
	document.getElementById("loginButt").innerHTML = login;
	document.getElementById("paneltitle").innerHTML = newtitle;
}
