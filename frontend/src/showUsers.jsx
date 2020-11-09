import React, { Component } from 'react';
import axios from "axios"
import { Button } from 'react-bootstrap';

class ShowUsers extends Component {
    state = {
        users: []
      }
    getUsers = () => {
        axios.get("/getUsersInfo").then(response => {
            this.prepareData(response.data)
        })
    }

    prepareData = (ee) => {
        var arr = []
        for(var e of ee){
            arr.push([e.username,e.ratings])
        }
        console.log(arr)
        this.setState({users:arr})
    }

    printResults = () => {
        if(this.state.users.length == 0){
            return ""
        }
    return this.state.users.map(e => {return <div><h5>User: {e[0]}</h5> {e[1].map(f => <React.Fragment><p>title: {f[1]}</p><p>rating: {f[0]}</p></React.Fragment> )} </div>})
    }

    render() { 
        return <React.Fragment>
            <Button onClick={() => this.getUsers()}>
            Show Users
            </Button>
            {this.printResults()}
        </React.Fragment>
    }
}
 
export default ShowUsers;