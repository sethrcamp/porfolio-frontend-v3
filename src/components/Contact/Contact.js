import React from 'react';

import facebookLogo from '../../assets/images/facebook-logo.svg';
import githubLogo from '../../assets/images/github-logo.svg';
import linkedInLogo from '../../assets/images/linkedin-logo.svg';
import twitterLogo from '../../assets/images/twitter-logo.svg';

import Request from "../../requests";
import moment from "moment";

export default class Contact extends React.Component {

    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            message: "",
            submissionInProgress: false
        };
    }

    submit() {
        this.setState({
            submissionInProgress: true
        }, () => {
            if(this.state.name != "" && this.state.email != "" && this.state.message != "") {
                //API Call
                Request.sendMessage({...this.state, sent_at: moment().format("YYYY-MM-DD hh:mm:ss")}).then(response => this.setState({submissionInProgress: false}));
            }
        });
    }

    render() {
        return (
            <div className="contact">
                <div className="contact-info">
                    <h2>Seth Campbell</h2>
                    <span>sethrcamp@gmail.com</span>
                    <ul>
                        <li><a href="https://www.facebook.com/seth.campbell.1297"><img src={facebookLogo}/></a></li>
                        <li><a href="https://github.com/sethrcamp"><img src={githubLogo}/></a></li>
                        <li><a href="https://www.linkedin.com/in/sethrcamp/"><img src={linkedInLogo}/></a></li>
                        <li><a href="https://twitter.com/riguy1998?lang=en"><img src={twitterLogo}/></a></li>
                    </ul>
                </div>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text"
                               placeholder="Alexander Hamilton"
                               className={this.state.submissionInProgress && this.state.name == "" ? "emptyField" : ""}
                               onChange={(e) => {
                                   this.setState({
                                       name: e.currentTarget.value
                                   });
                               }}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email"
                               placeholder="tenDollar@FoundingFathers.gov"
                               className={this.state.submissionInProgress && this.state.email == "" ? "emptyField" : ""}
                               onChange={(e) => {
                                   this.setState({
                                       email: e.currentTarget.value
                                   });
                               }}
                        />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea placeholder="There's a million things I haven't done, but just you wait!"
                                  className={this.state.submissionInProgress && this.state.message == "" ? "emptyField" : ""}
                                  onChange={(e) => {
                                      this.setState({
                                          message: e.currentTarget.value
                                      });
                                  }}
                        />
                    </div>
                    <input type="button"
                           value="Send"
                           className="submit"
                           onClick={() => {
                               this.submit();
                           }}
                    />
                </form>
            </div>
        );
    }
}
//name
//email
//message
//social media
//my email
//my name