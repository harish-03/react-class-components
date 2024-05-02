import { Component } from "react";

class Didmount extends Component{
    constructor(props){
        super(props)
        this.state = {
            favouriteColor:"blue"
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({favouriteColor: "green"})
        },2000)
    }

    render(){
        return(
            <h1>My Favourite color in didmount is {this.state.favouriteColor}</h1>
        )
    }
}
export default Didmount;