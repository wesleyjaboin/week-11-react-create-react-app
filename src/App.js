import React from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component{
  /* `constructor` is part of `class` and `React component`.Always called when an instance of our `class` is created AKA ``construct`d */
  //`componentIsMount`is standard in react. This is where we load our data otherwise initialize data.
  constructor(props){
    super(props)
    this.state = {displayTime: '',
  visitorName: ''}
  }
  componentDidMount(){
    this.timerID = setInterval(() => {
      this.tick()
    },1000);
  }
  //custom method see on reactjs.org
  tick(){
    console.log("tick")
    this.setState({
      displayTime: new Date().toString(),
      visitorName: ''
    })
  }
  /* `Render` standard fro getting html to our web page */
  render (){
    const displayTime  = this.state.displayTime;
    const visitorName ='Athur Fleck';
    return (
      <div className = "Clock"> 
      <h2>Today is {displayTime}</h2>
    <div> Thanks for visiting {visitorName}</div>
      </div>
    )
  }
}

function App(){
  return (
    <div className = 'App'>
     <header className = "App-header"> 
     <img src ={logo}className=""alt="logo"/>
     </header> 
     <Clock> </Clock>
        </div>
  )
}
export default App;
