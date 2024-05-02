import { Component } from "react";

class Getderived extends Component {
    constructor(props){
        super(props);
        this.state = {
            favouriteColor : "red"
        }
    }

     static getDerivedStateFromProps(props, state){
        return {favouriteColor: props.favCol}
     }
    render(){
        return <h1>My favouriteColor in mount is {this.state.favouriteColor}</h1>
    }
}
export default Getderived;