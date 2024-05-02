import { Component } from "react";

class Getderived extends Component{
    constructor(props){
        super(props)
        this.state={
            favouriteColor : "orange"
        }
    }

    static getDerivedStateFromProps(props, state){
        return {favouriteColor: props.favCol }
    }

     changeColor = () => {
      this.setState({favouriteColor: "pink"})
    }

    render(){
        return(
            <div>
                <h1>My favourite Color in update is {this.state.favouriteColor}</h1>
                <button onClick={this.changeColor}>Change color for get derived</button>
            </div>
        )
    }
}
export default Getderived;