import React, { Component } from 'react';

export default class MessageInput extends Component {

	  state = {
	  	message:"",
	  	isTyping:false
	  }

	

	handleSubmit = (e)=>{
		e.preventDefault()
		this.sendMessage(this.state.message)
	}

	sendMessage = (m)=>{
		this.props.sendMessage(m)
		console.log(m)
		this.setState({message:""})

	}

	render() {
		const { message } = this.state
		return (
			<div className="row">
				<form
					onSubmit={ this.handleSubmit }
				>
                   <div className="col-lg-6 col-sm-6 col-xs-6 col-md-6">
					<input
						id = "message"
						ref = {"messageinput"}
						type = "text"
						className = "form-control"
						value = { message }
						onChange = {
							({target})=>{
								this.setState({message:target.value})
							}
						}
						/>
						</div>
						<div className="col-lg-6 col-sm-6 col-xs-6 col-md-6">
					<button
						disabled = { message.length < 1 }
						type = "submit"
						className = "btn btn-primary">
							 Send
					 </button>
					 </div>
				</form>

			</div>
		);
	}
}
