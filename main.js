//Criar uma referência para tela
var mycanvas= document.getElementById("myCanvas");
var context=mycanvas.getContext("2d");

//Dê altura e largura específicas para a imagem do pug
var height=100;
var width=75;
 var backgroundImage = "parkingLot.jpg";
 var pugImage = "pug_car.webp";

//Defina a posição inicial para uma imagem de pug.
var pugX=5;
var pugY=225;
var newpug;
var newbackground;
function add() {
	//carregar pug e imagens de fundo na tela.
    newbackground=new Image();
	newbackground.onload=uploadBackground;
	newbackground.src=backgroundImage;

	newpug=new Image();
	newpug.onload=uploadpug;
	newpug.src=pugImage;
}

function uploadBackground() {
	//Defina a função ‘uploadBackground’
    context.drawImage(newbackground, 0, 0, mycanvas.width, mycanvas.height);
}

function uploadpug() {
	//Defina a função ‘pug’.
	context.drawImage(newpug, pugX,pugY , width, height);
	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Definir função para mover o carro para cima
	if(pugY>=0){
		pugY=pugY-10;
		uploadBackground();
		uploadpug();
	}
}

function down()
{
	//Definir função para mover o carro para baixo
	if(pugY<=350){
		pugY=pugY+10;
		uploadBackground();
		uploadpug();
	}
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
	if(pugX>=0){
		pugX=pugX-10;
		uploadBackground();
		uploadpug();
	}
}

function right()
{
	//Definir função para mover o lado direito do carro
	if(pugX<=750){
		pugX=pugX+10;
		uploadBackground();
		uploadpug();
	}
}
