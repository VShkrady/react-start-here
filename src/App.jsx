import React from "react";
import "./App.css";
import Disney from "./examples/Disney";
import * as carService from "./services/carsServices";

class App extends React.Component {
state = {
    currentUser:{
      firstName: "Mickey",
      lastName: "Mouse",
      friends: [{name: "Minnie"}, {name: "Pluto"}],
      age: 80
    },
    other: {prop: "Same"},
    somethingElse: "Same"
  }
  sayHello = (msg) =>{
  //  console.log (msg);
  }

  componentDidMount(){
  //  console.log("componentDidMount");
  //  console.log(this.state);

  //pass an object as an argument (one of the options to change state)
   /* var newUser = {...this.state.currentUser}
    newUser.firstname = "Michael";
    var newState = {currentuser: newUser}
    this.setState(newState);*/

    //second option and preferred method to use to setState
   /* var updater = (prevState, props) =>{
    var newUser = {...prevState.currentUser}
    newUser.firstname = "Michael";
 
      return {currentuser: newUser};
    }
    this.setState(updater);*/
    
    carService.getPing().then(this.onSuccess).catch(this.onError);
   
    carService.logOut().then(this.onLogOutSuccess).catch(this.onLogOutError);

    //above function could be written like that
    this.setState(prevState =>{
      //creates a copy of the currentUser
      let currentUser = {...prevState.currentUser};
      //change the firstname
      currentUser.firstname = "Michael";
      //creates new array of friends and add "Goofy"
     const newFriends = [...currentUser.friends, {name: "Goofy"} ];
     currentUser.friends = newFriends;
     //update the state with the new currentUser object
      return {currentUser};

    })}

    onSuccess = (response)=>{
      console.log ("ping ok",response);
    }

    onError = (err)=>{
     console.log ("ping err", err);
    }
  

   onLogOutSuccess = (response)=>{
      console.log ("LogOut success",response);
    }

    onLogOutError = (err)=>{
     console.log ("LogOut err", err);
    }

  onClickChangeLName = (e)=>{
    console.log("OnClickChangeLName in Class");
    e.preventDefault();
    this.setState((prevState=>{
      let currentUser = {...prevState.currentUser};
      currentUser.lastName = "Smith";
      return {currentUser};
    }))
  }

  onClickRemove = (e)=>{
    console.log("OnClickRemove in Class");
    e.preventDefault();
    this.setState((prevState=>{
      let currentUser = {...prevState.currentUser};
      currentUser.friends = [];
      return {currentUser};
    }))
  }

  render(){
    this.sayHello("From App Component");
   
    return ( 

   <div className="App">
    <header className="App-header">
    <div>
        <Disney friend = {this.state.currentUser} showGreeting = {this.sayHello}></Disney>
        </div>
        <div>
          <button onClick={this.onClickChangeLName}>Change Last Name</button>
          <button onClick={this.onClickRemove}>Remove All Friends</button>
        </div>
         </header>
          </div>
)}}


export default App;

