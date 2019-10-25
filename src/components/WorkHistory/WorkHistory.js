import React from 'react';

import Job from './Job';
import SelectableList from "../SelectableList";

import testData from '../../assets/test-data/jobs';

export default class WorkHistory extends React.Component {

    constructor() {
        super();

        this.state = {
            jobs: testData,
            selectedJob: null
        };

    }

    componentDidMount() {
        this.setState({
            selectedJob: this.state.jobs[0]
        });
    }

    setSelectedJob(job) {
        this.setState({
            selectedJob: job
        });
    }

    render() {
        return (
            <div className="projects">
                <SelectableList items={this.state.jobs}
                                selectedItem={this.state.selectedJob}
                                setSelected={job => this.setSelectedJob(job)}
                />
                {
                    this.state.selectedJob != null &&
                    <Job job={this.state.selectedJob}/>
                }
            </div>
        );
    }
}