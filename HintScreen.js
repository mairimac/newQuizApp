import React, { Component } from 'react';




class HintScreen extends Component {
  render () {

      return (

        <div className="container">
         <div className="row">
            <div className="col-sm">
                <div className="card mt-2 mb-2">
                    <div className ="text-left card-header">Hint.
  </div>
                     <div className="card-body text-justify"> {this.props.hintText}

                     </div>
                        <div className="text-center">
                            <button className="btn-success mb-2 mt-2" onClick={this.props.closeHint}>Got it!</button>
                        </div>
                      </div>
            </div>
      </div>
      </div>




    );
  }
}


export default HintScreen;
