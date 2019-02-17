import React, { Component } from 'react';
import About from './Components/About/About'
import Interests from './Components/Interests/Interests'
import Experiences from './Components/Experiences/Experiences'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import './App.css';

class App extends Component {
// Add active class to the current button (highlight it)
changeActive(event){
  var header = document.getElementById("dot-navbar");
  var dots = header.getElementsByClassName("dot");
  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }
}
  render() {
    return (
      <div className="App">
        <div class="dot-navbar">
            <nav>
                <ul>
                    <li><a href="#about" class="dot active"><span>About</span></a></li>
                    <li><a href="#interests" class="dot"><span>Interests</span></a></li>
                    <li><a href="#experiences" class="dot"><span>Experiences</span></a></li>
                    <li><a href="#projects" class="dot"><span>Projects</span></a></li>
                    <li><a href="#contact" class="dot"><span>Contact</span></a></li>
                </ul>
            </nav>
        </div>

        <About />
        <Interests />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
