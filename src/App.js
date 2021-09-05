import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from './components/Container.js';
import MainPage from './components/MainPage.js';
import Japan from './components/Japan.js';
import Korea from './components/Korea.js';
import China from './components/China.js';
import BookNow from './components/BookNow.js';
import NoMatch from './components/NoMatch.js';
import Navbar from './components/NavBar.js';
import Navbar2 from './components/NavBar2.js';
import Footer from './components/Footer.js';
import './components/myStyles.css';
import GetTest from './components/GetTest.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      darkMode:false,
      testgit:true
    }
  }
  
  handleChange=()=>{
    this.setState({darkMode:!this.state.darkMode});
  }
  render() {
    console.log(this.state.darkMode);//rendering twice, not sure
    let blackOrWhite= this.state.darkMode? 'black':'white'
    
    
    return (
      <div style={{backgroundColor:`${blackOrWhite}`}}>
        <React.Fragment >
          <Router>
            <Navbar darkMode={this.state.darkMode} onDarkMode={this.handleChange} />
            <Navbar2 />
            <Container> 
              {/* Container here from Brice ayres youtube tutorial */}
              <Switch>
                <Route exact path="/" render={()=><MainPage darkMode={this.state.darkMode}/>}/>
                <Route path="/Japan" render={()=><Japan darkMode={this.state.darkMode}/>} />
                <Route path="/Korea" render={()=><Korea darkMode={this.state.darkMode}/>} />
                <Route path="/China" render={()=><China darkMode={this.state.darkMode}/>} />
                <Route path="/BookNow" render={()=><BookNow darkMode={this.state.darkMode}/>} />
                <Route path="/GetTest" render={()=><GetTest/>}/>
                <Route component={NoMatch} />
              </Switch>
            </Container>
            <Footer />
          </Router>
        </React.Fragment>
      </div>
    );
  }
}
export default App;
