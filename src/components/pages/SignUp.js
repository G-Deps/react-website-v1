import React, {Component} from "react"
import {connect} from 'react-redux'
import '../../App.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import CardItem from '../CardItem';

/*export class SignUp extends Component {
  render(){
    return(
      <div>
      <h1>login</h1>
     </div>
    )
  }
}

const mapStateToProps = (state) =>({


})

const mapDispatchToProps = dispatch =>({


})

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)*/



export default function SignUp() {
  return(
  <CardItem>
    <Button buttonStyle='btn--black'>Sign Up</Button>
  </CardItem>
    
  )
}