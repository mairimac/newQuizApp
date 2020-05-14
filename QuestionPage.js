import React, { Component } from 'react';




class QuestionPage extends Component {



  render () {

      return (

        <div className="container">
         <div className="row">
            <div className="col-sm">
                <div className="card mt-2 mb-2">
                    <div className ="text-left card-header">Read the question.
  </div>
                     <div className="card-body text-justify"> {this.props.questionText}

                     </div>
                        <div className="text-center">

                            <img className="mt-4 mb-4 rounded img-fluid" max-width="100%" height="auto" src={`${this.props.image}`}/>


                      </div>
                      </div>
            </div>
      </div>
      </div>




      );

    }
    }






export default QuestionPage;
