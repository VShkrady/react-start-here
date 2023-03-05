import React from "react";

class Fruits extends React.Component
 {
    state = {
        fruits : []
    }


    render(){
        return (
        <div>
            Fruits are going to be here: 
            <strong>{this.state.fruits.length}</strong>
        </div>
        )
    }
}
export default Fruits;