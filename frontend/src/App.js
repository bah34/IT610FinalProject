import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }
  
  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            This is a paragraph in the app header
          </p>
        </header>
        <div className="App-body">
          <p>
            This is a paragraph in the app body
          </p>
          <p className="App-intro">{this.state.apiResponse}</p>
        </div>  
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           This is a paragraph in the app header
//         </p>
//       </header>
//       <div className="App-body">
//         <p>
//           This is a paragraph in the app body
//         </p>
//       </div>  
//     </div>
//   );
// }

export default App;
