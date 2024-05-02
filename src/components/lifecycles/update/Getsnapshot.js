import { Component } from "react";

class Getsnapshot extends Component{
    constructor(props){
        super(props)
        this.state={
            favouriteColor:"snow white"
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({favouriteColor: "bisque"})
        },2000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("id1").textContent = "Previous favouriteColor was " + prevState.favouriteColor;
    }

    componentDidUpdate(){
        document.getElementById("id2").textContent = "Updated favouriteColor was " + this.state.favouriteColor;
    }

    render(){
        return(
            <div>
                <h2>initial color was {this.state.favouriteColor}</h2>
                <h2 id="id1"></h2>
                <h2 id="id2"></h2>
            </div>
        )
    }
}
export default Getsnapshot;