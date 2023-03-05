import React from "react";

class OfClass extends React.Component {

//#region
 // state = {age:30};
  onClickOne = (e) =>{
    console.log("onClickOne in Class");
    e.preventDefault();
    //if the property names matches, such as "age" then setState will overwrite values of the property (ex.: from 30 to 512) and add any other property
    //the most recent state passed to the function called "prevState" used with updater function
    //if you want to use prevState you can write function like this (this.setState((prevState)=>{})) or opposite (this.setState(()=>{}))
    //if you overwriting state you don't need to use prevState, like in the example below
    this.setState((prevState)=>{
      return {age:prevState.age + 1, win: true}
    })
  }
//#endregion
  
   
    state = {
      user:{ age: 30, firstName: "Gregorio"}, 
      company: {empCount: 1000, name: "Acme"},
    }

    onClickTwo = (e) =>{
      console.log("onClickTwo in Class");
      e.preventDefault();
      //if the property names matches, such as "age" then setState will overwrite values of the property (ex.: from 30 to 512) and add any other property
      //the most recent state passed to the function called "prevState" used with updater function
      //if you want to use prevState you can write function like this (this.setState((prevState)=>{})) or opposite (this.setState(()=>{}))
      //if you overwriting state you don't need to use prevState, like in the example below
      this.setState((prevState)=>{
        return {age:prevState.age + 1, win: true}
      })
    }
   
    //in class component everything have to be in one state can't split it like in functional components
   //this is how you initialize state
   // state = {user:{
    //    age: 30, firstName: "Gregorio"}, company: {empCount: 1000, name: "Acme"},}

  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-lg  bg-light"
          aria-label="Eighth navbar example"
        >
          <div className="container">
            <button className="navbar-brand btn btn-outline-primar">
              State Managment in Class
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample07"
              aria-controls="navbarsExample07"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample07">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button
                    className="nav-link active btn-link btn "
                    aria-current="page"
                    onClick={this.onClickOne}
                  >
                    Command 1
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link active btn-link btn"  onClick={this.onClickTwo}>
                    Command 2
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link active btn-link btn ">
                    Command 3
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/*{this.state.age}*/}
        <div className="container">
        <div className="row">
        <div className="col">
               Age <span>{this.state.user.age}</span>
            </div>
            <div className="col">
               Name <span>{this.state.user.firstName}</span>
            </div>
            <div className="col">
               Co <span>{this.state.company.name}</span>
            </div>
           </div>
    </div>
      </React.Fragment>
    );
  }
}

export default OfClass;