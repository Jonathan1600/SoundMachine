import React from 'react';
import reactDOM from 'react-dom';
import './styles/style.css'

class SoundBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = ({
        display: ''
      })
       this.handleClick = this.handleClick.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    };
    //Handles click on pads.
    handleClick = (id) => {
        document.getElementById(id).play();
         switch (id) {
           case 'Q':
             this.setState({
             display: 'Kono Giorno Giovanna'});
             break;
             case 'W':
             this.setState({
             display: 'Windows XP'});
             break;
             case 'E':
             this.setState({
             display: 'GameCube'});
             break;
             case 'A':
             this.setState({
             display: 'Monsters Inc.'});
             break;
             case 'S':
             this.setState({
             display: 'Rick Rolled'});
             break;
             case 'D':
             this.setState({
             display: 'Congratulations!'});
             break;
             case 'Z':
             this.setState({
             display: 'Sans!'});
             break;
             case 'X':
             this.setState({
             display: 'Omae Wa Mou Shinderu '});
             break;
             case 'C':
             this.setState({
             display: 'Sempai Call Me Obama'});
             break; 
             
             
             
       };
       };
     
       // Initializes event listeners for key presses.
     componentDidMount() {
         document.addEventListener("keypress", this.handleKeyPress);
       };
       
       componentWillUnmount() {
         document.removeEventListener("keypress", this.handleKeyPress);
       };
     // Handles key presses.
       handleKeyPress = (event) => {
         switch (event.charCode) {
           case 113:
             this.handleClick('Q');
             break;
           case 119:
             this.handleClick('W');
             break;
           case 101:
             this.handleClick('E');
             break;
           case 97:
             this.handleClick('A');
             break;
           case 115: 
             this.handleClick('S');
             break;
           case 100:
             this.handleClick('D');
             break;
           case 122:
             this.handleClick('Z');
             break;
           case 120:
             this.handleClick('X');
             break;
           case 99: 
             this.handleClick('C');
             break;
             case 81:
             this.handleClick('Q');
             break;
           case 87:
             this.handleClick('W');
             break;
           case 69:
             this.handleClick('E');
             break;
           case 65:
             this.handleClick('A');
             break;
           case 83: 
             this.handleClick('S');
             break;
           case 68:
             this.handleClick('D');
             break;
           case 90:
             this.handleClick('Z');
             break;
           case 88:
             this.handleClick('X');
             break;
           case 67: 
             this.handleClick('C');
             break;
         }
        
       };
       // Renders the pads.
    render() {
        return <div id="drum-machine">
            
            <div onClick = {() => this.handleClick('Q')}  id="Qa" class="drum-pad" >
              Q
              <audio id="Q" class="clip" src="https://www.myinstants.com/media/sounds/test_TUQkBD1.mp3"></audio>
              </div>
             
            <div onClick = {() => this.handleClick('W')} id="Wa" class="drum-pad">
              W
              <audio id="W" class="clip" src="https://www.myinstants.com/media/sounds/windows-xp-shutdown-earrape.mp3"></audio>
            </div>
            
            <div onClick = {() => this.handleClick('E')} id="Ea" class="drum-pad">
              E
              <audio id="E" class="clip" src="https://www.myinstants.com/media/sounds/gamecube_intro.mp3"></audio>
            </div>
            
            <div onClick = {() => this.handleClick('A')} id="Aa" class="drum-pad">
              A
              <audio id="A" class="clip" src="https://www.myinstants.com/media/sounds/monsters_inc_themeer.mp3"></audio>
            </div>
            
            <div onClick = {() => this.handleClick('S')} id="Sa" class="drum-pad">
              S
              <audio id="S" class="clip" src="https://www.myinstants.com/media/sounds/chickenguy70db.mp3"></audio>
            </div>
            
            <div onClick = {() => this.handleClick('D')}id="Da" class="drum-pad">
              D
              <audio id="D" class="clip" src="https://www.myinstants.com/media/sounds/kc78v26.mp3"></audio>
            </div>
            
            <div onClick = {() => this.handleClick('Z')} id="Za" class="drum-pad">
              Z
              <audio id="Z" class="clip" src="https://www.myinstants.com/media/sounds/sanes.mp3"></audio>
            </div>
            
            <div onClick = {() => this.handleClick('X')} id="Xa" class="drum-pad">
              X
              <audio id="X" class="clip" src="https://www.myinstants.com/media/sounds/omae-wa-mou-shindeiru.mp3"></audio>
            </div>
            
            <div onClick = {() => this.handleClick('C')} id="Ca" class="drum-pad">
              C
              <audio id="C" class="clip" src="https://www.myinstants.com/media/sounds/senpai-cum-in-my-ass-and-call-me-obama-audio-clip.mp3"></audio>
            
            
        </div> 
          <div id="display"><p>{this.state.display}</p></div>
        </div>
         
      }
    };


    //Renders the react into the element 'root'.
reactDOM.render(<SoundBox />, document.getElementById('root'));