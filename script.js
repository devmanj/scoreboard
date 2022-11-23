class ScoreBoard {
	constructor(home,away){
		//SCOREBOARD CONTAINER
		this.scoreBoard = document.createElement('div');
		this.scoreBoard.classList.add('scoreBoard');
		this.upToBat = 'away';
		this.clockTime;

		//HOME CONTAINER
		this.homeTeam = home;
		this.homeContainer = document.createElement('div');
		this.homeContainer.classList.add('homeContainer');
		this.homeContainer.classList.add('z-depth-5');
		this.homeText = document.createElement('div');
		this.homeText.classList.add('homeText');
		this.homeText.innerHTML = home;
		this.homeContainer.append(this.homeText);
		this.homeScore = 0;
		this.homeScoreDiv = document.createElement('div');
		this.homeScoreDiv.classList.add('homeScore');
		this.homeScoreDiv.innerHTML = this.homeScore;
		this.homeContainer.append(this.homeScoreDiv);

		//AWAY CONTAINER
		this.awayTeam = away;
		this.awayContainer = document.createElement('div');
		this.awayContainer.classList.add('up');
		this.awayContainer.classList.add('awayContainer');
		this.awayContainer.classList.add('z-depth-5');
		this.awayText = document.createElement('div');
		this.awayText.classList.add('awayText');
		this.awayText.innerHTML = this.awayTeam;
		this.awayContainer.append(this.awayText);
		this.awayScore = 0;
		this.awayScoreDiv = document.createElement('div');
		this.awayScoreDiv.classList.add('awayScore');
		this.awayScoreDiv.innerHTML = this.awayScore;
		this.awayContainer.append(this.awayScoreDiv);

		//HEADERS ARRAY
		this.teamHeaders = []
		this.teamHeaders.push(this.homeContainer);
		this.teamHeaders.push(this.awayContainer);

		//INNING CONTAINER
		this.inningContainer = document.createElement('div');
		this.inningContainer.classList.add('inningContainer');
		this.inningSide = 'Top';
		this.inningSideContainer = document.createElement('div');
		this.inningSideContainer.classList.add('inningSide');
		this.inningSideIcon = document.createElement('i');
		this.inningSideIcon.classList.add('material-icons');
		this.inningSideIcon.innerHTML = "arrow_drop_up";
		this.inningSideContainer.append(this.inningSideIcon);
		this.inningContainer.append(this.inningSideContainer);
		this.inningCount = document.createElement('div');
		this.inningCount.classList.add('inningCount');
		this.inningContainer.append(this.inningCount);
		this.inning = 1;
		this.inningNumber = document.createElement('div');
		this.inningNumber.classList.add('inningNumber');
		this.inningNumber.innerHTML = this.inning;
		this.inningContainer.append(this.inningNumber);

		//BASE CONTAINER
		this.baseContainer = document.createElement('div');
		this.baseContainer.classList.add('baseContainer');
		this.secondBase = document.createElement('div');
		this.secondBase.classList.add('base');
		this.secondBase.dataset.baseNum = 2;
		this.baseContainer.append(this.secondBase);
		this.firstBase = document.createElement('div');
		this.firstBase.classList.add('base');
		this.firstBase.dataset.baseNum = 1;
		this.baseContainer.append(this.firstBase);
		this.thirdBase = document.createElement('div');
		this.thirdBase.classList.add('base');
		this.thirdBase.dataset.baseNum = 3;
		this.baseContainer.append(this.thirdBase);
		this.homePlate = document.createElement('div');
		this.homePlate.classList.add('base');
		this.homePlate.classList.add('hide');
		this.homePlate.dataset.baseNum = 4;
		this.baseContainer.append(this.homePlate);
		this.bases = [this.firstBase,this.secondBase,this.thirdBase,this.homePlate];

		//OUT CONTAINER [INSIDE BASE CONTAINER]
		this.outCount = 0;
		this.outContainer = document.createElement('div');
		this.outContainer.classList.add('outContainer');
		this.outOne = document.createElement('div');
		this.outOne.classList.add('outs');
		this.outOne.dataset.outNum = 1;
		this.outContainer.append(this.outOne);
		this.outTwo = document.createElement('div');
		this.outTwo.classList.add('outs');
		this.outTwo.dataset.outNum = 2;
		this.outContainer.append(this.outTwo);
		this.baseContainer.append(this.outContainer);

		//COUNT CONTAINER
		this.strikeCount = 1;
		this.ballCount = 1;
		this.countContainer = document.createElement('div');
		this.countContainer.classList.add('countContainer');
		this.countContainer.innerHTML = `${this.ballCount}-${this.strikeCount}`;

		//TIMER CONTAINER
		this.timerContainer = document.createElement('div');
		this.timerContainer.classList.add('timerContainer');
		this.timerContainer.innerHTML = '50:00';

		//ADD ALL SCOREBOARD PARTS TOGETHER
		this.scoreBoard.append(this.homeContainer);
		this.scoreBoard.append(this.awayContainer);
		this.scoreBoard.append(this.inningContainer);
		this.scoreBoard.append(this.baseContainer);
		this.scoreBoard.append(this.countContainer);
		this.scoreBoard.append(this.timerContainer);
		this.controller = document.createElement('div');
		this.controller.classList.add('scoreController');

		//STRIKE BUTTON CREATION
		this.strikeButton = document.createElement('a');
		this.strikeButton.classList.add('btn');
		this.strikeButton.innerHTML = '+1 Strike';
		this.strikeButton.addEventListener('click', e=>{
			e.preventDefault();
			this.addStrike();
		})
		this.controller.append(this.strikeButton);

		//BALL BUTTON CREATION
		this.ballButton = document.createElement('a');
		this.ballButton.classList.add('btn');
		this.ballButton.innerHTML = '+1 Ball';
		this.ballButton.addEventListener('click', e=>{
			e.preventDefault();
			this.addBall();
		})
		this.controller.append(this.ballButton);

		//OUT BUTTON CREATION
		this.outButton = document.createElement('a');
		this.outButton.classList.add('btn');
		this.outButton.innerHTML = '+1 Out';
		this.outButton.addEventListener('click', e=>{
			e.preventDefault();
			this.addOut();
		})
		this.controller.append(this.outButton);

		//RESET BUTTON CREATION
		this.resetButton = document.createElement('a');
		this.resetButton.classList.add('btn');
		this.resetButton.classList.add('red');
		this.resetButton.innerHTML = 'Reset Board';
		this.resetButton.addEventListener('click', e=>{
			e.preventDefault();
			this.resetBoard();
		})
		this.controller.append(this.resetButton);

		//HOME BUTTON CREATION
		this.homeButton = document.createElement('a');
		this.homeButton.classList.add('btn');
		this.homeButton.innerHTML = '+1 Home';
		this.homeButton.addEventListener('click', e=>{
			e.preventDefault();
			this.addRun('home');
		})
		this.controller.append(this.homeButton);

		//AWAY BUTTON CREATION
		this.awayButton = document.createElement('a');
		this.awayButton.classList.add('btn');
		this.awayButton.innerHTML = '+1 Away';
		this.awayButton.addEventListener('click', e=>{
			e.preventDefault();
			this.addRun('away');
		});
		this.controller.append(this.awayButton);

		//TIMER START BUTTON CREATION
		this.timerButton = document.createElement('a');
		this.timerButton.classList.add('btn');
		this.timerButton.innerHTML = 'Start Timer';
		this.timerButton.addEventListener('click', e=>{
			e.preventDefault();
			this.toggleTimer();
		})
		this.controller.append(this.timerButton);

		this.print();
		this.updater = setInterval(this.getData.bind(this),1000);
	}
	addRun(team){
		this[team + 'Score'].innerHTML = parseInt(this[team + 'Score'].innerHTML)+1;
		this.saveData();
	}
	addBall(){
		if(this.ballCount===3){
			this.walk();
		}else{
			this.ballCount++;
			this.countContainer.innerHTML = `${this.ballCount}-${this.strikeCount}`;
		}
		this.saveData();
	}
	walk(){
		this.ballCount = 1;
		this.strikeCount = 1;
		this.countContainer.innerHTML = `${this.ballCount}-${this.strikeCount}`;
		if(this.bases[0].classList.contains('active')){
			if(this.bases[1].classList.contains('active')){
				if(this.bases[2].classList.contains('active')){
					//console.log(this.upToBat);
					this.addRun(this.upToBat);
				}else{
					this.bases[2].classList.add('active');
				}	
			}else{
				this.bases[1].classList.add('active');
			}
		}else{
			this.bases[0].classList.add('active');
		}
		this.saveData();
	}
	addStrike(){
		if(this.strikeCount==2){
			this.strikeOut();
		}else{
			this.strikeCount++;
			this.countContainer.innerHTML = `${this.ballCount}-${this.strikeCount}`;
			this.saveData();
		}
	}
	strikeOut(){
		this.addOut();
		this.strikeCount = 1;
		this.ballCount = 1;
		this.countContainer.innerHTML = `${this.ballCount}-${this.strikeCount}`;
		this.saveData();
	}
	addOut(){
		this.outCount++;
		if(this.outCount>2){
			this.nextInning();
		}else{
			document.querySelector(`[data-out-num="${this.outCount}"]`).classList.add('active');
		}
	}
	nextInning(){
		this.outCount = 0;
		document.querySelectorAll('[data-out-num]').forEach(out=>{
			out.classList.remove('active');
		})
		console.log(this.inningSide);
		if(this.inningSide==='Top'){
			this.upToBat = 'home';
			this.inningSide='Bottom';
			this.inningSideIcon.innerHTML = "arrow_drop_down";
		}else{
			this.inningSide = 'Top';
			this.upToBat = 'away';
			this.inning++;
			this.inningSideIcon.innerHTML = "arrow_drop_up";
			this.inningNumber.innerHTML = this.inning;
		}
		if(this.upToBat === 'home'){
			this.homeContainer.classList.add('up');
			this.awayContainer.classList.remove('up');
		}else{
			this.awayContainer.classList.add('up');
			this.homeContainer.classList.remove('up');
		}
	}
	print(location = document.body){
		location.append(this.scoreBoard);
		location.append(this.controller);
	}
	resetBoard(){
		this.homeScore = 0;
		this.awayScore = 0;
		this.inning = 1;
		this.inningSide = 'Top';
		this.ballCount = 1;
		this.strikeCount = 1;
		this.outCount = 0;
		this.clearBases();
		this.clearOuts();
		this.saveData();
		this.updateDisplay();
	}
	clearBases(){
		let bases = document.querySelectorAll('[data-base-num]');
		bases.forEach(base=>{
			base.classList.remove('active');
		});
	}
	clearOuts(){
		let outs = document.querySelectorAll('[data-out-num]');
		outs.forEach(out=>{
			out.classList.remove('active');
		});
	}
	toggleTimer(){
		if(!this.gameInterval){
			this.timerButton.innerHTML = 'Stop Timer';
			this.endTime = new Date();
			this.endTime.setSeconds(this.endTime.getSeconds() + 5);
			this.gameInterval = setInterval(this.timerExec.bind(this),1000);
		}else{
			console.log('Timer is already going.');
		}
		
	}
	timerExec(){
		let now = new Date().getTime();
		this.timeRemaining = this.endTime - now;
		let minutes = Math.floor((this.timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
		if(minutes<10){
			minutes = `0${minutes}`;
		}
		let seconds = Math.floor((this.timeRemaining % (1000 * 60)) / 1000);
		if(seconds<10){
			seconds = `0${seconds}`;
		}
		console.log(`${minutes}:${seconds}`);
		console.log(this.timeRemaining);
		document.querySelector('.timerContainer').innerHTML = `${minutes}:${seconds}`;
		if (this.timeRemaining < 0) {
			let audio = new Audio('AirHorn.mp4');
			audio.play();
			let timerContainer = document.querySelector('.timerContainer')
			timerContainer.innerHTML = '00:00';
			timerContainer.classList.add('expired');
			console.log(this);
			clearInterval(this.gameInterval);
		}
	}
	saveData(){
		let currentData = {
			strikeCount: this.strikeCount,
			ballCount: this.ballCount,
			outCount: this.outCount,
			upToBat: this.upToBat,
			homeScore: this.homeScore.innerHTML
		};
		var form_data = new FormData();
		for ( var key in currentData ) {
			form_data.append(key, currentData[key]);
		}
		fetch('submit.php',{
			method:'POST',
			body:form_data
		});
	}
	getData(){
		fetch('data.json')
		.then(res => res.json())
		.then(data =>{
			console.log(data);
			this.ballCount = data.ballCount;
			this.strikeCount = data.strikeCount;
			this.outCount = data.outCount;
			this.countContainer.innerHTML = `${this.ballCount}-${this.strikeCount}`;
		});
	}
	updateDisplay(data){
		this.homeScoreDiv.innerHTML = this.homeScore;
		this.awayScoreDiv.innerHTML = this.awayScore;
		this.countContainer.innerHTML = `${this.ballCount}-${this.strikeCount}`;
		this.inningNumber.innerHTML = this.inning;
		if(this.inningSide = 'Top'){
			this.inningSideIcon.innerHTML = "arrow_drop_up";
		}else{
			this.inningSideIcon.innerHTML = "arrow_drop_down";
		}
	}
}
let exampleSB = new ScoreBoard('The Nice Guys','Other Guys');