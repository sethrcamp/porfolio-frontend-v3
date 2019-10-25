import React from 'react';

import InfoTable from '../InfoTable';

export default class Job extends React.Component {

    render() {

        var information = [
            {title: "Employer", items: this.props.job.employer},
            {title: "Positions", items: this.props.job.positions},
            {title: "Locations", items: this.props.job.locations},
            {title: "Skills", items: this.props.job.skills}
        ];


        return(
            <div className="project">
                <h2>{this.props.job.name}</h2>
                <div className="project-info">
                    <InfoTable information={information}/>
                    <p dangerouslySetInnerHTML={{ __html: this.props.job.description}}/>
                </div>
                <div className={"project-image"}>
                    <img src={this.props.job.image} alt={"filler"}/>
                </div>
            </div>
        );
    }
}