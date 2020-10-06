import React from 'react';

import './App.css';

class Odometer extends React.Component{
  constructor(){
    super();
    this.state = {
        odometer: 0
    };
}

increase_by_1(){
  this.setState(() => ({
    odometer: this.state.odometer + 1
  }));
}

  increase_by_10(){
    this.setState(() => ({
      odometer: this.state.odometer + 10
    }));
  }

  increase_by_100(){
    this.setState(() => ({
      odometer: this.state.odometer + 100
    }));
  }

  increase_by_1000(){
    this.setState(() => ({
      odometer: this.state.odometer + 1000
    }));
  }
  

  render(){
    console.log(this.state.odometer)
    return(
    <>
      <button onClick={()=>this.increase_by_1() }>1</button>
      <button onClick={()=>this.increase_by_10() }>10</button>
      <button onClick={()=>this.increase_by_100() }>100</button>
      <button onClick={()=>this.increase_by_1000() }>1000</button>
      <h1>{this.state.odometer}</h1>
      </>
    );
  }


}


function Header(props) {
  console.log(props);
  return (
    <header>
      <p>{props.text}</p>
    </header>
  );
}


function Footer(props) {
  console.log(props);
  return (
    <footer >
      <p>Copy Right:{props.trademark}</p>
    </footer>
  );
}



function App() {
  return (
    <>
      <Header text='welcome to my website'/>
      <Odometer/>
      <Footer trademark = 'yazan'/>
    </>
  );
}

export default App;
