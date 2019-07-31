import React from 'react'
import {connect} from 'react-redux'
import {login} from '../Actions/LoginAction'

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    fillEmail=(event)=>{
        this.setState({
            email: event.target.value
        })
    }
    fillPass=(event)=>{
        this.setState({
            password: event.target.value
        })
      }
    login=()=>{
        const {history, onLogin }= this.props
        const {email, password}=this.state 
        onLogin(email, password)

        history.push({
            pathname: "/success",
            search: `?email=${email}`,
            state:{
                email: email,
                password:password
            }
        })
    }
  
    render() {
      return (
        <div>
            <h2> Login </h2>
            <div className="item">
                <li>
                    <input type="text" placeholder="  Email..." onChange={this.fillEmail}></input>
                    <br></br>
                </li>
                <li>
                    <input type="password" placeholder="  password..." onChange={this.fillPass}></input>
                </li>
                <li>
                    <button type="button" onClick={this.login}>Sign In</button>
                </li>
            </div>
        </div>    
      )
    }
}
const mapStateToProps= state=>({
    isLogin: state.isLogin
})
const mapDispatchToProps= dispatch=>({
    onLogin: (email, password)=> dispatch(login(email, password))
})
export default  connect(mapStateToProps, mapDispatchToProps)(Login)