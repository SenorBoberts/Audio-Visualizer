// P5.js file

//vars
let fft;
let song;
let toggle;

//funcs
function preload(){
	song = loadSound('assets/skate.mp3');
}

function setup(){
	createCanvas(256,256);
	angleMode(DEGREES);
	//toggle = createButton('toggle');
	//toggle.mousePressed(toggleSong);
	song.play();
	fft = new p5.FFT(0,256);
}

function draw(){
	background(0);
	let spect = fft.analyze();
	for(let i = 0; i < spect.length; i++){
		let tall = spect[i];
		let y = map(tall, 0, 256, height, 0);
		line(i, height, i, y);
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
