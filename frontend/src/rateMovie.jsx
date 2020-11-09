import React, { Component } from 'react';
import { Button,InputGroup,FormControl } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import axios from "axios"
import {movies_all} from "./movies"
class RateMovie extends Component {
    state = { 
        movies: movies_all,
        username:"",
        ratings: []
      }
      ratingChanged = (newRating,title) => {
            var rating = this.state.ratings;
            rating.push([newRating,title])
            this.setState({ratings:rating});
      };

      usernameChanged = (event) => {
          this.setState({username:event.target.value})
      }
    makeRequest = () => {
        var data = {
            ratings:this.state.ratings,
            username:this.state.username
        }
        axios.post("/saveUser", data)
    }

    listElement = (element) => {
        return <div>
            <h5>{element}</h5>
            <ReactStars
                count={5}
                onChange={ e => this.ratingChanged(e,element)}
                size={24}
                activeColor="#ffd700"
            />
        </div>
    }
    render() { 
        return <div>
            <div className="jaz">
                {this.state.movies.map(e => <div>{this.listElement(e)}</div> )}
            </div>
            <div>
                <InputGroup className="mb-3">
                    <FormControl
                    onChange={event => this.usernameChanged(event)}
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button onClick={this.makeRequest}>Submit</Button>
            </div>
        </div>

    }

}
 
export default RateMovie;