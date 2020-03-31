import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getrecords}  from '../actions/recordactions';
import FieldRow from "../utils/formrow"
import Pic from '../utils/pic';
import { Container, Card, Col, Row } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import Show0 from './show_temp/Show0';
import Show1 from './show_temp/Show1';
import cv1 from "../../images/cv1.png"
import cv2 from "../../images/cv2.png"


class Show extends Component {

    state={

    }

componentDidMount(){
    this.props.dispatch(getrecords(this.props.user.userData.id)).then(response=>{
        console.log(response.payload)
        this.setState({
          ...response.payload,
           pic:response.payload.images
      })
    })
}
    loadTemplate=(val)=>{
        this.setState({temp:val})
    }
    render() {
        console.log(this.state.pic)

        const sub=(
                this.state.temp?
                this.state.temp===1?
                <Show0/>:
                <Show1/>:
                <Container>
                    <Jumbotron>
                        <h1>
                            Choose your template:
                        </h1>
                        <Container>
                            <Row>
                                
                                <Col><Card style={{cursor:"pointer"}} onClick={()=>this.loadTemplate(1)}><Card.Img variant="top" src={cv1} fluid/></Card></Col>
                                <Col><Card style={{cursor:"pointer"}} onClick={()=>this.loadTemplate(2)}><Card.Img variant="top" src={cv2} responsive /></Card></Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                
            {/* <button onClick={()=> window.print()}>GENERATE PDF</button>
            */}
            </Container>
        );

        return (
            <div className="show_cv">
                {sub}
            </div>
            
<<<<<<< HEAD
            <div className="row">
                <FieldRow name={'Date of birth'}
                    value={this.state.dateofbirth}
                />
            </div>

            <div className="row">
                <FieldRow name={'Contact Number'}
                    value={this.state.phone}
                 />
            </div>


            <div className="row">
                <FieldRow name={'Additional Information'}
                    value={this.state.additional}
                 />
            </div>
            <h3 className="neon" style={{textAlign:'center'}}>
                    YOUR ACADEMIC RECORDS
                </h3>
   
            {
                this.state.academicrecords?
                this.state.academicrecords.map((acad,i)=>(
                    <div className="row">
                   <p style={{fontSize:"15px",fontFamily:'IBM Plex Serif'}}> {acad.name}:{acad.subject}</p>
                    </div>
                ))
                :null
            }

            <h3 className="neon" style={{textAlign:'center'}}>
                    YOUR AWARDS
                </h3>
       
            {
                this.state.awards?
                this.state.awards.map((acad,i)=>(
                    <div className="row">
                   <p style={{fontSize:"15px",fontFamily:'IBM Plex Serif'}}> {acad.name}:{acad.subject}</p>
                    </div>
                ))
                :null
            }

                </div>
        {/* <button onClick={()=> window.print()}>GENERATE PDF</button>
         */}
            </div>
=======
            
>>>>>>> 40d3ef151237809cc6a77f1a34cfd06f9d852280
        );
    }
}

const mapStateToProps=(state)=>{
    
    return{
      record:state.record
    }
      
}

export default connect(mapStateToProps)(Show);