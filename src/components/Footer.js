import React from 'react';

import facebookLogo from '../assets/images/facebook-logo.svg';
import githubLogo from '../assets/images/github-logo.svg';
import linkedInLogo from '../assets/images/linkedin-logo.svg';
import twitterLogo from '../assets/images/twitter-logo.svg';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <span>sethrcamp@gmail.com</span>
                <ul>
                    <li><a href="https://www.facebook.com/seth.campbell.1297"><img src={facebookLogo}/></a></li>
                    <li><a href="https://github.com/sethrcamp"><img src={githubLogo}/></a></li>
                    <li><a href="https://www.linkedin.com/in/sethrcamp/"><img src={linkedInLogo}/></a></li>
                    <li><a href="https://twitter.com/riguy1998?lang=en"><img src={twitterLogo}/></a></li>
                </ul>
            </footer>
        );
    }
}