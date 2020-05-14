import React, { Component } from 'react';
import QuizView from './QuizView';
import Header from './Header';
import * as DataAPI from './utils/DataAPI';

class QuizHome extends Component {
  state ={
    quizzes: {},
  }

  componentDidMount() {
  DataAPI.getAllQuizzes()
  .then((quizzes) => {
      this.setState(() => ({
        quizzes
      }));
    })
  }

  render(){
    const quizKeys = Object.keys(this.state.quizzes)
    const { quizzes } = this.state
      return (
        <div className="container">
        <nav className="navbar navbar-dark bg-primary text-center">
        <h5>Quizzes</h5>

          </nav>

          {quizKeys.map((quizKey) => {
            return (
              <div>

                <QuizView
                  key={quizKey.id}
                  name={quizzes[quizKey].name}
                  number={quizzes[quizKey].questions.length}
                  quiz_id={this.state.quizzes[quizKey].id}
                  questions={this.state.quizzes[quizKey].questions}
                  score={quizzes[quizKey].answeredCorrectly.length}
                  attempted= {quizzes[quizKey].answeredCorrectly.length + quizzes[quizKey].answeredIncorrectly.length}
                />

              </div>
            )
          }
        )
      }
      </div>
    );
  }

}

export default QuizHome;
