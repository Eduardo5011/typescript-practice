import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from './Message';

const initialState = {
  name: 'Manny',
  message: 'Typescript is cool'
}

type State = Readonly<typeof initialState>



class App extends Component<any, State> {
  readonly state: State = initialState
  // let firstValue: string = "Manny";
  // let firstValue: number = 34;
  // let firstValue: boolean = true;
  // let firstValue: number[] = [2, 3, 56];
  // let firstValue: Array<string> = ['2', '3', '56'];

  //tuple
  // let aTuple: [string, number] = ["Manny", 34];
  // // enum
  // enum Codes {
  //   first = 1,
  //   second = 2,
  // }
  // //any
  // let firstName: any = 3
  // //void
  // const warning = (): void => {
  //   console.log('warning')
  // }
  
render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message name={this.state.name} message={this.state.message}/>
      </header>
    </div>
  );
}
}

export default App;
