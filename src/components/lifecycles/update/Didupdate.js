import { Component } from "react";

class Didupdate extends Component{
    constructor(props){
        super(props);
        this.state = {favouriteColor : "green"}
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({favouriteColor:"olive-green"});
        })
    }

    componentDidUpdate(){
        document.getElementById("update").textContent = "The updated favColor is " + this.state.favouriteColor;
    }

    render(){
        return(
            <div>
                <h2>My favouriteColor in didupdate is {this.state.favouriteColor}</h2>
                <h3 id="update"></h3>
            </div>
        )
    }
}
export default Didupdate;