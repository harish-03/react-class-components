import { Component } from "react";

class Shouldcomp extends Component{
    constructor(props){
        super(props);
        this.state = {
            favouriteColor : "cyan"
        }
    }

    shouldComponentUpdate(){
        return false;
    }

    changeColor = () => {
        this.setState({favouriteColor:"magenta"})
    }

    render(){
        return(
            <div>
                <h1>My favourite color for shouldcomponentupdate {this.state.favouriteColor}</h1>
                <button onClick={this.changeColor}>Shouldcomponent date</button>
            </div>
        )
    }
}
export default Shouldcomp;