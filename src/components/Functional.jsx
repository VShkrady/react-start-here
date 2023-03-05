import React, { useState } from 'react';

function Functional() {
	//#region
	//existing state as a first param and updater function as a second param
	//const [state, setState] = useState({age:30})
	// const onClickOne = (e) =>{
	//console.log("onClickOne in Functional")
	//  e.preventDefault();
	//using updater function
	//if you want to use prevState you can write function like this (this.setState((prevState)=>{})) or opposite (this.setState(()=>{}))
	//if you overwriting state you don't need to use prevState, like in the example below
	//setState((prevState)=>{
	//return {age:prevState.age + 1, win: true}})

	//#endregion

	const [user, setUser] = useState({ age: 30, firstName: 'Peter' });

	const [company] = useState({ empCount: 1000, name: 'Acme' });

	const onUpdateUser = (e) => {
		console.log('onUpdateUser in Functional');
		e.preventDefault();
		//using updater function
		//if you want to use prevState you can write function like this (this.setState((prevState)=>{})) or opposite (this.setState(()=>{}))
		//if you overwriting state you don't need to use prevState, like in the example below
		setUser((prevState) => {
			//if you want to keep keys from prevState you can do spread operator and then overwrite
			//if you want to change state based on state include spread operator
			return { ...prevState, age: prevState.age, win: true };
		});
	};
	//{useState} hook for functional component
	//useState function returns state object
	//this is how you initialize state
	//const [state] = useState({age:30, firstName: "Peter"});
	//just example of how you can use hooks in functional components
	//in functional components with hooks you can split state in multiple separate objects
	/*const [company]= useState({empCount: 1000, name: "Acme"});
 const [isOn] = useState(true);
 const [countOfEmps] = useState(1500);
 const [street] = useState("100 Main Street");
 //this is how you can initialize a group of things, which is an array
 const [myGroupOfThings] = useState([1,2,3]);*/

	return (
		<React.Fragment>
			<nav
				className="navbar navbar-expand-lg  bg-light"
				aria-label="Eighth navbar example"
			>
				<div className="container">
					<button className="navbar-brand btn btn-outline-primar">
						State Managment in Functional
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
								>
									Command 1
								</button>
							</li>
							<li className="nav-item">
								<button
									className="nav-link active btn-link btn "
									onClick={onUpdateUser}
								>
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
			{/*{state.age}*/}
			<div className="container">
				<div className="row">
					<div className="col">
						Age <span>{user.age}</span>
					</div>
					<div className="col">
						Name <span>{user.firstName}</span>
					</div>
					{/*conditional rendering, says if I have this company then output this <div>*/}
					{company && (
						<div className="col">
							Co <span>{company.name}</span>
						</div>
					)}
				</div>
			</div>
		</React.Fragment>
	);
}

export default Functional;
