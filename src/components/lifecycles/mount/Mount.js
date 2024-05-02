import { Component } from "react";
import Getderived from "./Getderived";
import Didmount from "./Didmount";

class Mount extends Component{
    render(){
        return(
            <div>
                <Getderived favCol = "yellow"/>
                <Didmount/>
            </div>
        )
    }
}
export default Mount;