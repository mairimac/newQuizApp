import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class QuizView extends Component {



    render () {
      return (
<div className="container">

        <div className="card border-dark mt-2 mb-2">
            <h5 className ="text-center card-header card text-white bg-primary">{this.props.name}</h5>
                <div className ="card-body text-center">
                    <p className ="card-text">Number of questions: {this.props.number}
                    <br/>Score: {this.props.score}
                    <br/>Attempted: {this.props.attempted} </p>
                        <Link
                        to={`/quiz/${this.props.quiz_id}`}
                        className="btn btn-primary mb-3">Start</Link>
                </div>
          </div>
          </div>
      );
    }
  }


export default QuizView;
