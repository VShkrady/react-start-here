import React, {useState} from "react";

function Functional(props) {
    const [name, setName] = useState("nothing");

const onNavClicked = (e) =>{
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    let myNodeName = e.currentTarget.nodeName;
    props.onParentNotified(e, myNodeName);
//can get rid of prevState and we always use "updater" function
//using "updater" function; async function that's why created 
//local var myNodeName and declared to extract data to this.setState function
  setName(()=>{
        return myNodeName;
    })
    }

   const onSomethingElseClicked = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
        let myNodeName = e.currentTarget.nodeName;
        props.onParentNotified(e, myNodeName);
    //using "updater" function; async function that's why created 
        //local var myNodeName and declared to extract data to this.setState function 
        setName(()=>{
            return myNodeName;
        })
    }

    const logSomething = (anArg) =>
    {
     console.log("fx",{anArg});
    }

 return(
            <React.Fragment>
                <nav
                onClick={onNavClicked}
                    className = "navbar navbar-expand-lg bg-light"
                    aria-label="Eighth navbar example">
                        <div className="container"></div>
                </nav>
                <div className="container" onClick={onSomethingElseClicked}>
                    <div className="row">
                        <div className="col">
                            <h1>No <mark>this</mark>in functional components.{name}</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

export default Functional;