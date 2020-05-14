import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class QuestionViewHeader extends Component {



  render () {



      return (
        <nav className="navbar navbar-dark bg-primary">
          <div className="float-left">
            <Link to ="/" className="btn btn-dark btn-sm float-left mt-2 ml-1" >Quizzes</Link>
          </div>
          <div className="visible">
          <div className="float-right">
            <button className = "btn-success btn-sm float-right mt-2 mr-sm-2" disabled={this.props.hintViewed === true ? true: false} onClick={this.props.viewHint}>Hint</button>
            </div>
            </div>

        </nav>
    );
  }

}


export default QuestionViewHeader;
