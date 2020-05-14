import React, { Component } from 'react';
import QuestionViewHeader from './QuestionViewHeader';
import Header from './Header';
import QuestionPage from './QuestionPage';
import AnswerOptions from './AnswerOptions';
import HintScreen from './HintScreen';
import * as DataAPI from './utils/DataAPI';
import FeedbackScreen from './FeedbackScreen';


class QuestionView extends Component {

  state = {
    hintVisible: '',
    hintViewed: '',
    goToFeedback: false,
    questions: {},
    quizzes: {},
    quizId: '',
    currentQuestionIndex: 0,
    currentQuestionKey:''

  };

  componentDidMount() {
    const { quiz_id } = this.props.match.params;
    this.setState({ quizId: quiz_id })

    DataAPI.getAllQuestions()
    .then((questions) => {
      console.log(questions)
      this.setState(() => ({
       questions
     }));    })

    DataAPI.getAllQuizzes()
    .then((quizzes) => {
    console.log(quizzes)
      this.setState(() => ({
       quizzes
     }));
    })
  }



handleViewHint =() =>{
this.setState({ hintVisible: true});
  };

handleCloseHint =() =>{
  this.setState({ hintVisible: false, hintViewed: true });

};


updateQuestionIndex = (numberOfQuestionsInQuiz) => {
  if (this.state.currentQuestionIndex < numberOfQuestionsInQuiz) {
    this.setState({ currentQuestionIndex: this.state.currentQuestionIndex+1 })
  }
};

endOfQuiz=() => {
  if (this.state.lengthOfCurrentQuiz+1 === this.state.currentQuestionIndex+1)
  {
    this.setState({ goToFeedback: true})

  }
};



  render () {

    const questionKeys = Object.keys(this.state.questions)
    const { questions, quizzes, quizId} = this.state
    // This gets the currentQuizQuestions which we will use. Remember this is an array.
    const currentQuizQuestions = quizzes[quizId] && quizzes[quizId].questions;
    // So, what we will do is find out the length
    const lengthOfCurrentQuiz = currentQuizQuestions ? currentQuizQuestions.length : 0;
    const currentQuestionKey = lengthOfCurrentQuiz > 0 && currentQuizQuestions[this.state.currentQuestionIndex];


    if (this.state.goToFeedback) {
           return(
                <div>
                  <Header/>
                  <FeedbackScreen />
                </div>
           );
         }

    else if (this.state.hintVisible) {
      return(
          <div>
            <Header/>
            <HintScreen
              hintText={this.state.questions[currentQuestionKey].hint}
              closeHint={this.handleCloseHint}/>
          </div>

 );

}

    else {

      return (

        <div>
        {currentQuizQuestions &&
          <div>
        <QuestionViewHeader
        viewHint={this.handleViewHint}
        />

        <QuestionPage
          questionText={this.state.questions[currentQuestionKey].questionText}
        image={this.state.questions[currentQuestionKey].image}
        hint={this.state.questions[currentQuestionKey].hint}
        quiz_id={this.state.quizId}/>
        <AnswerOptions
        handleUpdateQuestionIndex={this.updateQuestionIndex}
        lengthOfCurrentQuiz={lengthOfCurrentQuiz}
        handleUpdateScore={this.updateScore}
        handleGoToFeedback={this.endOfQuiz}
        key={this.state.questions[currentQuestionKey].id}
        questionKey={currentQuestionKey}
        answers={this.state.questions[currentQuestionKey].answers}
        questions={questions}/>


        </div>

  }
  </div>
);
}
}
}

export default QuestionView;
