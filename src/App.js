import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FreeList from './components/freelist/FreeList'
import LowCostList from './components/lowcostlist/LowCostList'
import ExpensiveList from './components/expensivelist/ExpensiveList'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      free: this.props.free,
      lowCost: this.props.lowCost,
      expensive: this.props.expensive
    };
  }

  randPickE(e) {
    let randomVal = Math.floor(Math.random() * this.state.expensive.length);
    document.getElementById('chosen-activity').innerHTML=this.state.expensive[randomVal];
  }

  randPickLC(e) {
    let randomVal = Math.floor(Math.random() * this.state.lowCost.length);
    document.getElementById('chosen-activity').innerHTML=this.state.lowCost[randomVal];
  }

  randPickF(e) {
    let randomVal = Math.floor(Math.random() * this.state.free.length);
    document.getElementById('chosen-activity').innerHTML=this.state.free[randomVal];
  }

  render() {
    return (
      <div className="App">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Super RANDOM Activity Picker</h1>

      <img src="https://2.bp.blogspot.com/-KObjMJqxMog/WKraLagnbPI/AAAAAAAGbKE/eYTixBXDHD44KSIb-XRiU1TBXVSmHVaawCLcB/s1600/AW380449_21.gif?time=Thu%20May%2018%202017%2014:16:12%20GMT+0800%20(+08)" alt="buny" />
        <Router>
          <div>
            <Link to="/free" id="link">Free Activities | </Link>{' '}
            <Link to="/lowcost" id="link">Low Cost Activities | </Link>{' '}
            <Link to="/expensive" id="link">Expensive Activities </Link>
            <br /> <br />

            <Route path='/free' component={() => <FreeList free={this.props.free} />} />
            <Route path='/lowcost' component={() => <LowCostList lowCost={this.props.lowCost} />} />
            <Route path='/expensive' component={() => <ExpensiveList expensive={this.props.expensive} />} />
          </div>
        </Router>




        <div id="buttons">
        <button id="free-btn" onClick={(e) => this.randPickF(e)}> FREE </button>{'  '}
        <button id="lc-btn" onClick={(e) => this.randPickLC(e)}> LOW COST </button>{'  '}
        <button id="ex-btn" onClick={(e) => this.randPickE(e)}> EXPENSIVE </button>
        </div>
        <h2>You have chosen:</h2>
        <h3 id="chosen-activity"></h3>


      </div>
    );
  }
}

export default App;
