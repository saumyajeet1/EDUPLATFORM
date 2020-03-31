import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import four from '../../images/2.jpg' 
import five from '../../images/3.jpg'
import six from '../../images/1.jpg'
import {allawards} from '../actions/recordactions'
import { Grid } from '@material-ui/core';
import flow from "../../images/flow.png"; 
import aut1 from "../../images/aut1.png";
import aut2 from "../../images/aut2.png";
import Aux from "../hoc/Aux";
import { Container, Row, Col, Jumbotron, Button, Image } from 'react-bootstrap';
class Main extends Component {

    state={
        news:'',
    }
    
  //    newslist=()=>(
  //        this.state.news?
       
  //        this.state.news.map((item,i)=>(        
  // <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
  // <div className="d-flex w-100 justify-content-between">
  //   <h5 className="mb-1">CREATED AT {item.createdAt}</h5>
  
  // </div>
  //    <p className="mb-1">{item.subject}</p>
  //    <p className="mb-1">BY {item.author}</p>
  // </a>
  //        ))
  //        :null
  //       )
      

  //   componentWillMount(){
  //       this.props.dispatch(allnews()).then(response=>{
  //           console.log(response.payload)
  //           this.setState({
  //               news:response.payload
  //           })
  //       }).catch(err=>console.log(err))
  //   }



    render() {
        var height="560px";
        return (
          <Aux>
              <Container style={{marginTop:"20px"}}>
            <Row >
    
              <Col className="p-0"  style={{textAlign:"center"}}>
                <h1 className="home_head">We Bring The School Experience to Home</h1>
                <span className="home_sub">Never Stop learning, even at home</span>

                <Row style={{marginTop:"50px"}}>
                  <Col  xs={12} xsOffset={6}>
                  {this.props.user.userData?
                  
                  !this.props.user.userData.isAuth?
                 
                   <Link  id="contact-submit" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/login">SignUp/SignIn</Link>
                  
                  
                  :
                  null
                 :null
  }
                  </Col>
                  
                </Row>

              </Col>
              
              
            </Row>

          
            <Row xs={1} md={1} lg={3} style={{marginTop:"100px"}}>

              
                <Col  className="p-3 "  style={{textAlign:"center"}}>

                  <Row>
                    <Col  xsOffset={6}>
                        <i className="fas fa-file-alt home_works_img"/>
                    </Col>

                  </Row>
                  <p className="home_works">Storing Your Achievements</p>
                  <span className="home_works_sub">We give you a platform to store Records of your Achivements and Goals</span>

                  
              </Col>
              <Col className="p-3"  style={{textAlign:"center"}}>
              <Row >
                    <Col  xsOffset={6}>
                        <i className="fas fa-file-pdf home_works_img"/>
                    </Col>

                  </Row>
                  <p className="home_works">CV Maker</p>
                  <span className="home_works_sub">PDF CV/RESUME available from our website</span>

                  
              </Col>
              <Col className="p-3"  style={{textAlign:"center"}}>
              <Row>
                    <Col  xsOffset={6}>
                        <i className="fas fa-video home_works_img"/>
                    </Col>

                  </Row>
                  <p className="home_works">Live Classrooms</p>
                  <span className="home_works_sub">Join Chat-Rooms and Have an Online Video-Tutorial Experience</span>

                  
              </Col>
            </Row>
          
            <Row xs={1} style={{marginTop:"100px",textAlign:"center"}}>
                <p className="home_topic">How our WebSite Works:</p>
            </Row>
            <Row xs={1} style={{marginTop:"50px"}}>
            
              
                <img className="img_flow" src={flow} />
              
            </Row>
            
          </Container>

            <Container style={{margin:"100px 0"}} className="names" fluid>
              
            <Row xs={1} style={{textAlign:"center"}}>
              <p className="home_top">Our Team</p>
            </Row>
            <Row xs={2} style={{backgroundColor:"#808080", marginTop:"30px",textAlign:"center"}}>
              <Col xs={6}>
                
                  
                  <h2 className="team_style">Saumyajeet Mukherjee</h2>
                  
                  
                  <img src={aut1} className="author"/>
                  

                
                
              
              </Col>
              <Col xs={6} >
              
                  
                  
                  <img src={aut2} className="author"/>
                  
                  
                  <h2 className="team_style">Sayanta Bhattacharjee</h2>
                  

                
                
                

              </Col>
            </Row>
          
            <Row style={{marginTop:"50px"}}>
              <Col xs={4}>
                  
              </Col>
              <Col xs={4}>

              </Col>
              <Col xs={4}>
              
              </Col>
            </Row>
          </Container>

          </Aux>
          

//             <div className="container">
             
//         <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{objectFit:"cover"}}>
//           <ol className="carousel-indicators">
//             <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
//             <li data-target="#myCarousel" data-slide-to="1"></li>
//             <li data-target="#myCarousel" data-slide-to="2"></li>
//           </ol>
//           <div className="carousel-inner">
      
//             <div className="item active" style={{objectFit:"cover"}}>
//               <img src={four} alt="eduplat" />
//               <div className="carousel-caption">
//               </div>
//             </div>
      
//             <div className="item">
//               <img src={five} alt="eduplat"/>
//               <div className="carousel-caption">
//               </div>
//             </div>
          
//             <div className="item" style={{objectFit:"cover"}}>
//               <img src={six} alt="eduplat"/>
//               <div className="carousel-caption">
//               </div>
//             </div>
        
//           </div>
      
//           <a className="left carousel-control" href="#myCarousel" data-slide="prev">
//             <span className="glyphicon glyphicon-chevron-left"></span>
//             <span className="sr-only">Previous</span>
//           </a>
//           <a className="right carousel-control" href="#myCarousel" data-slide="next">
//             <span className="glyphicon glyphicon-chevron-right"></span>
//             <span className="sr-only">Next</span>
//           </a>
        
//       </div>
            
            
//               <div className="row" id="about">
               
//                <div className="col-lg-12 col-sm-12 col-md-12 description" >
                   
//                <h1 style={{color:"black"}}>ABOUT CHESS</h1>
//                    <div className="circle">
    
//                    </div>
//                    <p style={{fontFamily: "'Lobster Two', cursive"}}>The Chemical Engineering Student's Society (CHESS) is an independent student run society of Chemical Engineering Department of NIT Durgapur.It is solely dedicated to form a network
//                      among all the students,faculty members and alumni of the department. It promotes interaction  within the department and implements acadmeic, social and other programs of interest to its members.
                   
//                    </p>
               
               
//                </div>
//                </div>
//               <div className="row">
//                <div id="box">
//                 <div id="smallbox">
//                     <i className="fas fa-user-graduate" id="cap1" style={{fontSize:"40px",color:"#E39821"}}>
//                         <h3 id="faculty"><Link to="/facad">FACULTY</Link></h3></i>
//                 </div>
//                 <div id="smallbox">
//                     <i className="fas fa-graduation-cap" id="cap1" style={{fontSize:"40px",color:"#E39821"}}>
//                         <h3 id="faculty"><Link to="/subject">SYLLABUS</Link></h3></i>
//                </div>
               
//                <div id="smallbox">
//                 <i className="fa fa-book" id="cap1"style={{fontSize:"40px",color:"#E39821"}}>
//                 <h3 id="faculty"><Link to="/register">REGISTER</Link></h3></i>
//                </div>
//                <div id="smallbox">
//                 <i className="fa fa-lock" id="cap1" style={{fontSize:"40px",color:"#E39821"}}>
//                 <h3 id="faculty"><Link to="/login">LOGIN</Link></h3></i>
//                </div>
                 
//             </div>
//              </div>
//              <div className="row" id="about">
               
//                <div className="col-lg-12 col-sm-12 col-md-12 description" >
                   
//                <h1 style={{color:"black"}}>MESSAGE FROM HOD:Prof Gopinath Halder</h1>
//                    <div className="circler">
    
//                    </div>
               
//                    <p style={{fontFamily: "'Lobster Two', cursive"}}>Chemical Engineering Students'society is working with a motivation of developing professional
//     and personal skills of students,which facilitate them to perform magnificently as an eminent
//     engineer in the society. This society is aimed to provide a platform to showcase and sharpen
//     student's talents through a variety of events and activities planned throughout four years,
//     for overall development of students personalities. We continue our effort to prepare and
//     guide the students for the various competitive exams and interviews so that they perform
//     better and make their carrier in the selected fields. Real world problems will be blended in
//     the curriculum and these are to be taught by experts from industry, in addition through guest
//     lectures. Our focus is to effectively train our students as chemical engineers who can serve the
//     society competently, collaboratively and ethically as planners, designers and operators of the
//     environment.
//                    </p>
               
               
//                </div>
            
//             </div>
//             <br></br>
//             <br></br>
//             <br></br>
// {/*             
//             <h1 style={{color:"black"}}>NEWS LIST</h1>
//             <div className="row">
              
//             <br></br><br></br><br></br> <br></br><br></br><br></br> <br></br><br></br><br></br>
//             <div className="list-group">
//             { this.newslist()}
//             </div>
              
//         </div> */}
//             </div>
        
               
        );
    }
}

const mapStateToProps=(state)=>{
    
       
    return{
      news:state.news,
      user:state.member
    }
      
  }
  
  export default connect(mapStateToProps)(Main);