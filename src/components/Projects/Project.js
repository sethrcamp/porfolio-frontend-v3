import React from 'react';

import InfoTable from '../InfoTable';

import placeholder from '../../assets/images/filler image.jpg';


export default class Project extends React.Component {
    render() {

        var information = [
            {title: "Clients", items: this.props.project.clients},
            {title: "Skills", items: this.props.project.skills},
            {title: "Team", items: this.props.project.team}
        ];

        return (
            <div className="project">
                <h2>{this.props.project.name}</h2>
                <div className="project-info">
                    <InfoTable information={information}/>
                    <p dangerouslySetInnerHTML={{ __html: this.props.project.description}}/>
                </div>
                <div className={"project-image"}>
                    <img src={this.props.project.image} alt={"filler"}/>
                </div>
            </div>
        );
    }
}