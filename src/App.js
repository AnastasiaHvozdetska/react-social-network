import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';

import './App.scss';
import DialogsContainer from './Components/Dialogs/DialogsContainer';



const App = (props) => {
    return (
        <div className="App">
          <Header />
          <Navigation navigation={props.state.naviagation} />

          <div className="Layout">
            <Route path="/profile" render={() =>  <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
              store={props.store}
             />}/>

            <Route path="/dialogs" render={() =>  <DialogsContainer
             store={props.store}
             />}/>

            <Route path="/news" component={News}
              store={props.store}
            />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </div>
        </div>
    );
}

export default App;
