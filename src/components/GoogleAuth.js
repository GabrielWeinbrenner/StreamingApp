import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';


class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '774935828273-lnv8e70rn9qks6blcpscrb8jg9jkvijt.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            }); 
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn();
        }else{
            this.props.signOut();
        }
    }

    onSignIn = () => {
        console.log("OUCH");

        this.auth.signIn();
    }

    onSignOut = () => {

        this.auth.signOut();
    }
    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignOut}className="ui red google button">
                    <i className="google icon"></i>
                    Sign Out
                </button>    
            )
        }else{
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon"></i>
                    Sign In With Google
                </button>    
            )
        }
    }
    render(){
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, {signIn,signOut})(GoogleAuth);