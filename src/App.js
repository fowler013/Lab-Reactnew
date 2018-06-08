import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import Profile from './components/Profile.jsx';
import Trending from './components/Trending.jsx';
import TimeLine from './components/TimeLine.jsx';
import WhoToFollow from './components/WhoToFollow.jsx';
import CopyRight from './components/CopyRight.jsx';



//thes are the components that I need//
//NavBar
//Profile
//Trending
//Timeline
//Who To Follow
//Copyright

class App extends Component {
  render() {
    return (
      <div className = 'wrapper'>
      <NavBar />
      <div className='container'>
      <div className='row'>
          <div className='col-12 col-md-3 col-lg-3 col' style={{width: '290px'}}>
            <Profile />
            <Trending />
          </div>
          <div className='col-12 col-md-6 col-lg-6 col'>
            <TimeLine />
          </div>
          <div className='col-12 col-md-3 col-lg-3 col' style={{width: '290px'}}>
            <WhoToFollow />
            <CopyRight />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
