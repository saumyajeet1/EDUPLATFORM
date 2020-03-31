import React, { Component } from 'react';
import Messages from '../messages/Messages'
import MessageInput from '../messages/MessageInput'
import io from 'socket.io-client'
import queryString from 'query-string'
import Live from './live';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {endsession} from '../actions/recordactions'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

const socketUrl = "http://localhost:3002"
class ChatContainer extends Component {
	constructor(props){  
		super(props)
	this.state = {
		  chats:[],
		  activeChat:null,
		  socket:{},
		  roomname:'',
		  user:''
			 }
			 
			}

	
	componentWillMount() {
		this.initSocket()		
		const values = queryString.parse(this.props.location.search)
		this.setState({
				  roomname:values.room,
		     	   name:values.name
					  })
		   	}
		
			initSocket = ()=>{
				const socket = io("http://localhost:3002")
		
				socket.on('connect', ()=>{
					console.log("Connected");
				})
		
				this.setState({socket:socket})
				socket.on("activemessage",(message,user)=>{
					console.log(message)
					this.setActiveChat(message)
					   let	newchat=[...this.state.chats,message]
				 this.setState({
					chats:newchat
							 })
				   console.log(this.state.chat)
				   })
			}
	componentDidMount() {
		const socket=this.state.socket
		console.log(this.state.roomname)
		socket.emit('subscribe',this.state.roomname)
     	setInterval(()=>{
			console.log(this.state.chats)		
            },5000)
					  }
	resetChat = (chat)=>{
	console.log('resetting the chat')
	return this.addChat(chat, true)
	}

	addChat = (chat, reset = false)=>{
		const { socket } = this.props
		const { chats } = this.state

		const newChats = reset ? [chat] : [...chats, chat]
		this.setState({chats:newChats, activeChat:reset ? chat : this.state.activeChat})

		const messageEvent = `MESSAGE_RECIEVED-${chat.id}`
		
		socket.on(messageEvent, this.addMessageToChat(chat.id))
	}

	addMessageToChat = (chatId)=>{
		return message => {
			const { chats } = this.state
			let newChats = chats.map((chat)=>{
				if(chat.id === chatId)
					chat.messages.push(message)
				return chat
			})

			this.setState({chats:newChats})
		}
	}
	
	sendMessage = ( message)=>{
		console.log(message,this.state.roomname,this.state.name)
		
		const roomname=this.state.roomname
		const name=this.state.name
		
		this.state.socket.emit("message", {roomname,name,message} )
		
	}

    
	setActiveChat = (activeChat)=>{
		this.setState({activeChat:activeChat})
	}

	endsession=(e)=>{
		e.preventDefault()
		const user=this.props.user.userData.name
		this.props.dispatch(endsession(this.state.roomname,this.props.user.userData.email)).then((res)=>{
           console.log(res)
		}).catch(e=>console.log(e))
	
	}

	render() {
		console.log(this.state.chats)
		const { user, logout } = this.props
		const { chats, activeChat } = this.state
		return (
			<Container>
				<Jumbotron>
				<Row>
					<Col xs={12}>
					<Row xs={1}>
						<Live socket={this.state.socket}/>
					</Row>
					<Row xs={1}>
					
					<div className="chat-room-container" style={{width:"100%",height:"100%",margin:"4px"}}>
					 
					 	
						 <div className="chat-room" style={{border:"2px solid black"}}>
				 
				 {this.state.chats.length>0?
				   <Messages
					messages={this.state.chats}
					user={user}
					typingUsers={activeChat.typingUsers}
					/>
					:null
					}
					</div>
					
					
					
						<MessageInput sendMessage={this.sendMessage}/>
						           
								 
										 
	 
								 
						 
					 </div>

					
				
				
				{this.props.user.userData.isAdmin?
				<button
				onClick={e=>this.endsession(e)}
						type = "submit"
						className = "send"
				>
					<Link className = "contact-submit-reset" to="/livechat">
							 END SESSION
					</Link>
				</button>:
				<button
				type = "submit"
				
		>
			<Link className = "contact-submit-reset" to="/livechat">
					 GO BACK
			</Link>
		</button>
	}

					</Row>
					</Col>
				</Row>

				</Jumbotron>
				
					

					

			</Container>
		);
	}
}
const mapStateToProps=(state)=>{
       
    return{
      user:state.member
    }
      
}

export default connect(mapStateToProps)(ChatContainer);

