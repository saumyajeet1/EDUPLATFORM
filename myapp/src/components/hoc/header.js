import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {log} from "../actions/memberactions"
import logo from '../../images/logo.png'
import { NavDropdown } from 'react-bootstrap';

class Header extends Component {
  

  
   logoutuser=()=>{
       this.props.dispatch(log()).then(res=>{
           console.log('logout')
           
        }).catch(err=>
        console.log(err)
        )
   }
   
    render() {
      console.log(this.props.user.userData)
        return (

             <div className='header'>
               {/* <div className="containerl">
               <img className="limg" src={logo} alt="eduplat" />
             <div className="heading1">EduStream</div>
             <div className="heading2">Online Student Kit</div>
             </div>
               */}




             <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                 
              <ul className="navbar-nav">
              <li className="nav-item">
                  <Link className ="nav-link"  style={{fontFamily:"Times new roman",fontSize:"10px"}} to="/">HOME</Link>
                  </li>
 
                   {
                     this.props.user.userData?
                     this.props.user.userData.isAuth?
                 
                    <li className="nav-item">
                    <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"10px"}} to="/details" >ADD ACADEMIC DETAILS</Link>
                    </li>
                    :null
                    :null
                   }
                   {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}

                   
                   {
                     this.props.user.userData?
                     this.props.user.userData.isAuth?
                   
                    <li className="nav-item">
                    <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"10px"}} to="/show" >VIEW YOUR CV</Link>
                    </li>
                    :null
                    :null
                   }

                  <li className="nav-item">
                  <NavDropdown className="nav-link" title="Add User Data" id="basic-nav-dropdown">
                          <NavDropdown.Item >{
                     this.props.user.userData?
                     this.props.user.userData.isAuth?
                   
                    <li className="nav-item">
                    <Link className ="nav-link" style={{color:"black",fontFamily:"Times new roman",fontSize:"10px"}} to="/skill" >ADD SKILLS</Link>
                    </li>
                    :null
                    :null
                   }</NavDropdown.Item>
                          
                          
                          <NavDropdown.Item >{
                     this.props.user.userData?
                     this.props.user.userData.isAuth?
                   
                    <li className="nav-item">
                    <Link className ="nav-link" style={{color:"black",fontFamily:"Times new roman",fontSize:"10px"}} to="/addaward" >ADD AWARD</Link>
                    </li>
                    :null
                    :null
                   }</NavDropdown.Item>
                          
                          <NavDropdown.Item >{
                     this.props.user.userData?
                     this.props.user.userData.isAuth?
                   
                    <li className="nav-item">
                    <Link className ="nav-link" style={{color:"black",fontFamily:"Times new roman",fontSize:"10px"}} to="/addacademic" >ADD ACADEMIC RECORDS</Link>
                    </li>
                    :null
                    :null
                   }</NavDropdown.Item>
                         
                            
                         </NavDropdown>
                   

                  </li>

                  
             

                  {
                     this.props.user.userData?
                     this.props.user.userData.isAuth?
                   
                    <li className="nav-item">
                    <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"10px"}} to="/see my info" >SEE MY INFO</Link>
                    </li>
                    :null
                    :null
                   }
                  
     
                  
                  
                  
                
                  {
                    !this.props.user.userData?
                  <li className="nav-item">
                  <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"10px"}} to="/login" >LOGIN</Link>
                  </li>:null
                  }
                  
              <li className="nav-item">
                  <Link className ="nav-link " style={{fontFamily:"Times new roman",fontSize:"10px"}} to="/register">REGISTER</Link>    
                  </li>
                  {this.props.user.userData?
                  
                    !this.props.user.userData.isAuth?
                    <li className="nav-item">
                    <Link className ="nav-link"  style={{fontFamily:"Times new roman",fontSize:"10px"}} to="/login">LOGIN</Link>
                    </li>
                    :
                    <li className="nav-item">
                    <Link className ="nav-link " style={{fontFamily:"Times new roman",fontSize:"10px"}} to="/logout" onClick={(event)=>this.logoutuser()}>LOGOUT</Link>
                    </li>:null
    }
              </ul>
             </div>  
            </nav>
            <br></br>
            </div>
                        
        );
    }
}

const mapStateToProps=(state)=>{
    return{
      user:state.member,
    }
      
}

export default connect(mapStateToProps)(Header);