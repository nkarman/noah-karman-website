import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Containers/Home.js'
import Work from './Containers/Work.js'
import About from './Containers/About.js'


const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const App = () => (
  <Router>
    <div className='main-container'>
      <div className="navigation-wrapper">
        <Link className='navigation-item  hvr-rectangle-out' to="/">
          <h1 className='navigation-text'>HOME</h1>
        </Link>
        <Link className='navigation-item hvr-rectangle-out' to="/work">
          <h1 className='navigation-text'>WORK</h1>
        </Link>
        <Link className='navigation-item hvr-rectangle-out' to="/about">
          <h1 className='navigation-text'>ABOUT</h1>
        </Link>
      </div>
      <Route exact path="/" component={Home}/>
      <Route path="/work" component={Work}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)
export default App
