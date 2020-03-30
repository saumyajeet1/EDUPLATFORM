import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getrecords}  from '../actions/recordactions';
import FieldRow from "../utils/formrow"
import Pic from '../utils/pic';

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

    render() {
        console.log(this.state.pic)
        return (
            <div className="row">
        
            <div className="cv" >
                <h3 className="neon" style={{textAlign:'center'}}>
                    YOUR INFORMATION
                </h3>

         <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <Pic image={this.state.pic?this.state.pic[0].url:null} text={"PHOTO"}/>
            </div>
        </div>


            <div className="row">
                 <FieldRow name={'name'}
                    value={this.state.name}
                 />
            </div>

            <div className="row">
                 <FieldRow name={'email'}
                    value={this.state.email}
                 />
            </div>
               
               
            <div className="row">
                <FieldRow name={'Current qualification'}
                    value={this.state.currentdegree}
                 />
            </div>
                
                
            <div className="row">
                <FieldRow name={'Work Place'}
                    value={this.state.workplace}
                 />
            </div>

                
            <div className="row">
                <FieldRow name={'Address'}
                    value={this.state.address}
                />
            </div>

            
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
                this.state.academicrecords.map((acad,i)=>(
                    <div className="row">
                   <p style={{fontSize:"15px",fontFamily:'IBM Plex Serif'}}> {acad.name}:{acad.subject}</p>
                    </div>
                ))
                :null
            }

                </div>
        <button onClick={()=> window.print()}>GENERATE PDF</button>
        
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    
    return{
      record:state.record
    }
      
}

export default connect(mapStateToProps)(Show);