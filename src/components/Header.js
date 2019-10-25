import React from 'react';
import {withRouter} from 'react-router';

import {Link} from 'react-router-dom';

import logo from '../assets/images/logo.svg';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to="" className="logo-wrapper">
                    <img src={logo} alt="SC Logo"/>
                </Link>
                <nav>
                    <Link to="" className="my-name">
                        <span>Seth Campbell</span>
                    </Link>
                    <ul>
                        <li><Link to="" className={this.props.history.location.pathname === "/" ? "selected" : null}>About</Link></li>
                        <li><Link to="projects" className={this.props.history.location.pathname === "/projects" ? "selected" : null}>Projects</Link></li>
                        <li><Link to="work-history" className={this.props.history.location.pathname === "/work-history" ? "selected" : null}>Work History</Link></li>
                        <li><Link to="resume" className={this.props.history.location.pathname === "/resume" ? "selected" : null}>Resume</Link></li>
                        <li><Link to="contact" className={this.props.history.location.pathname === "/contact" ? "selected" : null}>Contact</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter(Header);