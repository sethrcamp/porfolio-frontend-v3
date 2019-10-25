import React from 'react';
import {Switch, Route} from 'react-router';

import Header from './Header';
import Footer from './Footer';
import About from './About/About';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import WorkHistory from './WorkHistory/WorkHistory';
import Contact from './Contact/Contact';

import '../css/index.css';

export default class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Header/>
                <div className="scrollable-area">
                    <main>
                        <Switch>
                            <Route exact path="/" component={About}/>
                            <Route path="/projects" component={Projects}/>
                            <Route path="/resume" component={Resume}/>
                            <Route path="/work-history" component={WorkHistory}/>
                            <Route path="/contact" component={Contact}/>
                        </Switch>
                    </main>
                </div>
                <Footer/>
            </div>
        );
    }
}