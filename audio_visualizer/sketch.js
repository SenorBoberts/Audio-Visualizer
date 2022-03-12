// P5.js file

//vars
let fft;
let fft_lips;
let song = null;
let toggle;
let canvas;

//funcs
function preload(){
	if(song != null){
		song.pause();
	}
	song = loadSound($("#songSelect").val());
}

function setup(){
	canvas = createCanvas(1024,512);
	canvas.parent('sketch');
	angleMode(DEGREES);
	fft = new p5.FFT(0,128);
}

function draw(){
	background(0);
	drawBars();
}

function drawBars(){
	let spect = fft.analyze();
	for(let i = 0; i < spect.length; i++){
		let tall = spect[i];
		let y = map(tall, 0, 256, height, 0);
		rect(i*4, y, 4, height);
		rect(1024-(i*4), y, 4, height);
	}
	stroke(255);
	noFill();		
}

function toggleSong(){
	if(song.isPlaying()){
		song.pause();
	}else{
		song.play();
	}
}
