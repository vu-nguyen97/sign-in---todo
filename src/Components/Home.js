import React from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import Login from './Login'

const Home=({isLogin}) =>{
  if(!isLogin) return <Redirect to={Login}/>
  return <h3>Home</h3>;
}
const mapStateToProps=state=>({
  isLogin: state.isLogin
})
export default connect(mapStateToProps)(Home)