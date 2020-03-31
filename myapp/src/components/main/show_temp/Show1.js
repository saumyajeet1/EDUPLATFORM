import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getrecords}  from '../../actions/recordactions';
// import FieldRow from "../utils/formrow"
import Pic from '../../utils/pic';
import {Container, Row, Col} from "react-bootstrap";

class Show1 extends Component {

    state={


    }
componentDidMount(){
    this.props.dispatch(getrecords()).then(response=>{
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
            <div id="cv" class="instaFade_cv">
	<div class="mainDetails_cv">
		<div id="headshot" class="quickFade_cv">
		{this.state.pic? <Pic image={this.state.pic?this.state.pic[0].url:null} text={"PHOTO"}/>:null}
		</div>
		
		<div id="name">
			<h1 class="quickFade_cv delayTwo">{this.state.name}</h1>
			<h2 class="quickFade_cv delayThree">{this.state.workplace}</h2>
		</div>
		
		<div id="contactDetails" class="quickFade_cv delayFour">
			<ul>
				<li>email: <a href={`mailto:${this.state.email}`} target="_blank">{this.state.email}</a></li>
				
				<li>mobile: {this.state.phone}</li>
			</ul>
		</div>
		<div class="clear"></div>
	</div>
	
	<div id="mainArea" class="quickFade_cv delayFive">
		<section>
			<article>
				<div class="sectionTitle">
					<h1>Personal Profile</h1>
				</div>
				
				<div class="sectionContent">
					<p>{this.state.additional}</p>
				</div>
			</article>
			<div class="clear"></div>
		</section>
		
		
		
		<section>
			<div class="sectionTitle">
				<h1>Achievements</h1>
			</div>
			{
			this.state.awards?
			this.state.awards.map(el=>{
				return(
					<div class="sectionContent">
				<article>
					<h2>{el}</h2>
					
				</article>
				
				
			</div>
				);
			}):null
		}
			
			<div class="clear"></div>
		</section>
		
		
		<section>
			<div class="sectionTitle">
				<h1>Key Skills</h1>
			</div>
			
			<div class="sectionContent">
				<ul class="keySkills">
					{
					this.state.skills?
					this.state.skills.map(el=>{
						return(
							<li>{el}</li>

						);
					}):null}
					
				</ul>
			</div>
			<div class="clear"></div>
		</section>
		
		
		<section>
			<div class="sectionTitle">
				<h1>Education</h1>
			</div>
			
			<div class="sectionContent">
				{
				
				this.state.academicrecords?
				this.state.academicrecords.map(el=>{
					return(
					<article>
					<h2>{el}</h2>

					</article>
					);
				}):null}
				
				
			</div>
			<div class="clear"></div>
		</section>
		
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

export default connect(mapStateToProps)(Show1);












