import { Component } from "react";

class Willunmount extends Component{
    
    componentWillUnmount(){
        alert('The Component named header is about to unmounted')
    }

    render(){
        return <h1>Hello World!</h1>
    }
}
export default Willunmount;