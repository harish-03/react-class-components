import { Component } from "react";
import Willunmount from "./Willunmount";

class Unmount extends Component{
    constructor(props){
        super(props);
        this.state={show:true}
    }

    delHeader = () => {
        this.setState({show:false});
    }

    render(){
        let myHeader;
        if(this.state.show){
            myHeader = <Willunmount/>
        }
        return(
            <div>
                <p>Unmount</p>
                {myHeader}
                <button onClick={this.delHeader}>Delete Header</button>
            </div>
        )
    }
}
export default Unmount;