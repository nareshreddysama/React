import React,{Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
     message:"User"
    };
    this.updateMessage=this.updateMessage.bind(this);
  }
  updateMessage(){
    this.setState({
      message:"Naresh Reddy Sama"
    });

  }


  render(){
    return(
      <div>
        <h1>Hello {this.state.message}</h1>
        <button onClick={this.updateMessage}  name="Button"/>
      </div>
    );
  }
}


export default App;
