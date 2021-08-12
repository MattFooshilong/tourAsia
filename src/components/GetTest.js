import React, { Component } from 'react';
import axios from 'axios';

class GetTest extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:'',
            errorMsg:''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8082/')
        .then(response=>this.setState({posts:response.data.Message}))
        .catch(err=>{
            console.log(err);
            this.setState({errorMsg:'Error retrieving data'});
        });
    }
    render() {
        const errorMsg = this.state.errorMsg;
        return (
            <div>
                Posts:
                {this.state.posts}
                {errorMsg?<div>{errorMsg}</div>:null}
            </div>
        )
    }
}

export default GetTest
