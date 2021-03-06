import React from 'react';

import myself from '../../assets/images/me_on_orange.jpg'

export default class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h1>About Me:</h1>
                <div>
                    <img src={myself}/>
                </div>
                <p>
                    I am a web and software developer based in Indiana.
                    I have had years of experience with frontend and backend concepts,
                    including databases, custom API's, HTML, CSS, and frameworks
                    such as AngularJS and React.js. I am currently looking for work
                    and have graduated from Ball State University with an Honors
                    Bachelor's of Science in Computer Science degree,
                    with a Mathematics minor in Spring 2020.
                </p>
            </div>
        );
    }
}