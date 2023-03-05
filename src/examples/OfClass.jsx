import React from "react";

class OfClass extends React.Component{
    state = {
        name: nothing;
    }
    
    onNavClicked = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
        let myNodeName = e.currentTarget.nodeName;
        this.props.onParentNotified(e, myNodeName);
        //using "updater" function; async function that's why created 
        //local var myNodeName and declared to extract data to this.setState function
        this.setState(()=>{
            return {name:myNodeName};
        })


        this.logSomething(e.currentTarget.nodeName);
    }

    logSomething = (anArg) =>
    {
     console.log("class",{anArg});
    }

    onSomethingElseClicked = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
        let myNodeName = e.currentTarget.nodeName;
        this.props.onParentNotified(e, myNodeName);
       //using "updater" function; async function that's why created 
        //local var myNodeName and declared to extract data to this.setState function
        this.setState(()=>{
            return {name:myNodeName};
        })
    }
    render(){
        return(
            <React.Fragment>
                <nav
                    onClick={this.onNavClicked}
                    className = "navbar navbar-expand-lg bg-light"
                    aria-label="Eighth navbar example">
                        <div className="container"></div>
                </nav>
                <div className="container"onClick={this.onSomethingElseClicked} >
                    <div className="row">
                        <div className="col">
                            <h1>Keep <mark>this</mark>in scope.{this.state.name}</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default OfClass;