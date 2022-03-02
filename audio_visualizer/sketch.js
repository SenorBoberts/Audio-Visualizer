// P5.js file

//vars
let fft;
let song;
let toggle;

//funcs
function preload(){
	song = loadSound($("#songSelect").val());
}

function setup(){
	createCanvas(1024,512);
	angleMode(DEGREES);
	fft = new p5.FFT(0,512);
}

function draw(){
	background(0);
	let spect = fft.analyze();
	for(let i = 0; i < spect.length; i++){
		let tall = spect[i];
		let y = map(tall, 0, 256, height, 0);
		line(i, height, i, y);
		line(1024-i, height, 1024-i, y);
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
