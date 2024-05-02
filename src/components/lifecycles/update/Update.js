import { Component } from "react";
import Getderived from "./Getderived";
import Shouldcomp from "./Shouldcomp";
import Getsnapshot from "./Getsnapshot";
import Didupdate from "./Didupdate";

class Update extends Component{

    render(){
        return(
            <div>
                <p>getDerivedStateFromProps</p>
                <Getderived favCol = "white"/>
                <p>shouldComponentUpdate</p>
                <Shouldcomp/>
                <p>getSnapshotBeforeUpdate</p>
                <Getsnapshot/>
                <p>componentDidUpdate</p>
                <Didupdate/>
            </div>
        )
    }
}
export default Update;