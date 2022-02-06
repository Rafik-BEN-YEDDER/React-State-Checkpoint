import React, { Component } from 'react';
import Profile from './Components/Profile';
import{Button} from 'react-bootstrap'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={show:true}
  }
  render() {
    return (
      <div style={{display:'flex' ,justifyContent:'center',flexDirection:'column'}}>
        {this.state.show && <Profile fullName='Rafik BEN YEDDER' bio='NINJA' imgSrc='https://st.depositphotos.com/2400497/3428/v/600/depositphotos_34287663-stock-illustration-cartoon-ninja.jpg' profession='Engineer' />}
        <Button variant="primary" onClick={()=>this.setState({show: !this.state.show})} >Show/Hide</Button>
      </div>
    )
  }
}

