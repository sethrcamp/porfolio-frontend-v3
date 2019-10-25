import React from 'react';

import PDF from '../../assets/Seth_Campbell_Resume.pdf';

export default class Resume extends React.Component {
    render() {
        return (
            <div className="resume">
                <iframe src={PDF}/>
            </div>
        );
    }
}