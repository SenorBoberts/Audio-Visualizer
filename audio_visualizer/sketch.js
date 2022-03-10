// P5.js file

//vars
let fft;
let fft_lips;
let song = null;
let vocals = null;
let toggle;

//funcs
function preload(){
	if(song != null){
		song.pause();
	}
	song = loadSound($("#songSelect").val());
//	vocals = loadSound("assets/black_vocals.mp3");
}

function setup(){
	createCanvas(1024,512);
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

function drawLips(amp){
	beginShape();
	vertex(width/4,height/2);
	quadraticVertex(width/2, height/2 - amp, 3*width/4,height/2);
	endShape();
	beginShape();
	vertex(width/4,height/2);
	quadraticVertex(width/2, height/2 + amp, 3*width/4,height/2);
	endShape();
	noFill();
}

function toggleSong(){
	if(song.isPlaying()){
		song.pause();
		//vocals.pause();
	}else{
		song.play();
		//vocals.play();
	}
}
