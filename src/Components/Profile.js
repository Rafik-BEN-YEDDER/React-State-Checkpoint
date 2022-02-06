import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

export default class Profile extends Component {
constructor(props){
    super(props)
    this.state={count:0 }
}
componentDidMount(){
    setInterval(()=>this.setState({...this.state, count:this.state.count+1}),1000)
}
componentDidUpdate(){

}
componentWillUnmount(){

}
render() {
    return (
        <div style={{display:'flex' ,justifyContent:'center'}}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.imgSrc}></Card.Img>
                <Card.Body>
                    <Card.Title>{this.props.fullName}</Card.Title>
                    <Card.Text >{this.props.bio}</Card.Text>
                    <Card.Text >{this.props.profession}</Card.Text>
                    <Card.Text >{this.state.count}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
  }
}
