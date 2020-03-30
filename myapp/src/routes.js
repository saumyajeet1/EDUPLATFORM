import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Main from './components/main/main';
import Register from './components/register/register';
import Login from './components/register/login';
import Details from './components/main/details';
import Layout from './components/hoc';
import Award from './components/main/awardrec';
import Show from './components/main/show';
import Error from './components/main/404'
import Disp from './components/main/display';
import Education from './components/main/qualification';
import Forgot from './components/main/forgotpass';
import Forget from './components/main/forget'
import Allalum from './components/main/allcards'
import Addnews from './components/main/addaward'
import Chat from "./components/Layout"
import Live from "./components/main/live"
import Auth from './components/hoc/auth'
import ChatContainer from './components/main/ChatContainer';
const Routes = () => {
    return (
        <Layout>
        <Switch>
            

            <Route exact component={Auth(Main,null)} path="/"/>
            
            <Route exact component={Auth(Live,null)} path="/live"/>

            
            <Route exact component={Auth(Live,null)} path="/live"/>
        
            <Route exact component={Auth(Register,null)} path="/register"/>
        
            <Route exact component={Auth(Login,null)} path="/login"/>

            <Route exact component={Auth(Show,true)} path="/show"/>

            <Route exact component={Auth(Award,true)} path="/award"/>
            
            <Route exact component={Auth(Education,true)} path="/qualify"/>

            
            <Route exact component={Auth(Forgot,null)} path="/resetpass"/>
            
            <Route exact component={Auth(Details,true)} path="/details"/>

            <Route exact component={Auth(Disp,true)} path="/display"/>
            
            <Route exact component={Auth(Forget,null)} path="/forget"/>

            <Route exact component={Auth(Allalum,true)} path="/allalum"/>
            <Route exact component={Auth(Addnews,true)} path="/addnews"/>
            <Route exact component={Auth(Chat,true)} path="/livechat"/>
            <Route exact component={Auth(ChatContainer,true)} path="/chat"/>
            
            
            
            <Route component={Error} /> 

        
        </Switch>
        </Layout>
    );
};

export default Routes;