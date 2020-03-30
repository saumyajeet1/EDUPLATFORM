  
import React, { Component } from 'react';

import {connect} from 'react-redux'

class Live extends Component {
  constructor(props) {
    super(props)
    this.localVideoref = React.createRef()
    this.remoteVideoref = React.createRef()

    this.socket = this.props.socket
    this.candidates = []
  }

  
  componentDidMount = () => {


    this.socket.on('connection-success', success => {
      console.log(success)
    })

    this.socket.on('offerOrAnswer', (sdp) => {
    //   this.textref.value = JSON.stringify(sdp)
      this.pc.setRemoteDescription(new RTCSessionDescription(sdp))
    })

    this.socket.on('candidate', (candidate) => {
      this.pc.addIceCandidate(new RTCIceCandidate(candidate))
    })

    const pc_config = {
      "iceServers": [
        {
          urls : 'stun:stun.l.google.com:19302'
        }
      ]
    }

    this.pc = new RTCPeerConnection(pc_config)

    this.pc.onicecandidate = (e) => {
      if (e.candidate) {
        this.sendToPeer('candidate', e.candidate)
      }
    }

    this.pc.oniceconnectionstatechange = (e) => {
      console.log(e)
    }

    this.pc.onaddstream = (e) => {
      this.remoteVideoref.current.srcObject = e.stream
    }

  }

  sendToPeer = (messageType, payload) => {
    this.socket.emit(messageType, {
      socketID: this.socket.id,
      payload
    })
  }

  createOffer = () => {

    console.log('Offer')
    this.pc.createOffer({ offerToReceiveVideo: 1 })
      .then(sdp => {
        this.pc.setLocalDescription(sdp)

        this.sendToPeer('offerOrAnswer', sdp)
        
 
    })

  }

  createAnswer = () => {
    console.log('Answer')
    this.pc.createAnswer({ offerToReceiveVideo: 1 })
      .then(sdp => {
        this.pc.setLocalDescription(sdp)

        this.sendToPeer('offerOrAnswer', sdp)
    })
  }

  setRemoteDescription = () => {
    const desc = JSON.parse(this.textref.value)

    this.pc.setRemoteDescription(new RTCSessionDescription(desc))
  }

  addCandidate = () => {

    this.candidates.forEach(candidate => {
      console.log(JSON.stringify(candidate))
      this.pc.addIceCandidate(new RTCIceCandidate(candidate))
    });
  }
  startvideo=(e)=>{
      e.preventDefault()
      
    const success = (stream) => {
        window.localStream = stream
        console.log('cxcx')
        this.localVideoref.current.srcObject = stream
        this.pc.addStream(stream)
      }
   const failure = (e) => {
        console.log('getUserMedia Error: ', e)
      }
  
      const constraints = {
        audio: true,
        video: true,
        
      }
    //   var getUserMedia = navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;  
    navigator.mediaDevices.getUserMedia(constraints)
        .then(success)
        .catch(failure)
  
        this.props.user.userData.isAdmin?
        setInterval(()=>{
           this.createOffer() 
            },2000):
            console.log('hurray')
    
    }

  render() {
console.log( this.props.user.userData.isAdmin)
    return (
      <div className="row ">
      {
      this.props.user.userData.isAdmin?
        <video
          style={{
            width: 1000,
            height: 400,
            margin: 5,
            background:"black",
            border:"4px solid black"
          }}
          ref={ this.localVideoref }
          autoPlay
          onClick={(e)=>{this.startvideo(e)}}>
        </video>:
        <video
          style={{
            width: 1000,
            height: 400,
            margin: 5,
            background:"black",
            border:"4px solid black"
          }}
          ref={ this.remoteVideoref }
          >
        </video>
  }
        <br />
        {
        this.props.user.userData.isAdmin?
        // <button onClick={this.createOffer}>Offer</button>:
        null:
        <button className="btn btn-success"
        onClick={this.createAnswer}>Answer</button>
        }
        <br />
        {/* <textarea style={{ width: 450, height:40 }} ref={ref => { this.textref = ref }} /> */}
        
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
       
    return{
      user:state.member
    }
      
}

export default connect(mapStateToProps)(Live);
