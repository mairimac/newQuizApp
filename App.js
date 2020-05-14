import React,  { Component } from 'react';

import { Route } from 'react-router-dom';
import QuizHome from './QuizHome';
import QuestionView from './QuestionView';
import FeedbackScreen from './FeedbackScreen';


class App extends Component {

  render(){
    return (
    <div className="container">

      <Route exact path='/' component={QuizHome} />
      <Route path='/quiz/:quiz_id' component={QuestionView} />
      <Route path='/feedback' component={FeedbackScreen} />

      </div>

  );
}
}


export default App;
